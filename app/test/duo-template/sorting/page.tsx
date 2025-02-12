'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { DuoTemplateButton } from '../buttons/page'
import DuoHeader from '../components/DuoHeader'
import FeedbackPopup from '../components/FeedbackPopup'
import { duoFontStyles, duoDefaultTheme } from '../styles'
import { questions } from '../questions'
import {
  DndContext,
  DragOverlay,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  useDroppable,
  useDraggable,
} from '@dnd-kit/core'
import { getRandomQuip, playSound } from '../types'
import { handleQuestionNavigation, getCurrentQuestionData } from '../utils/navigation'
import Image from 'next/image'

interface Animal {
  id: string
  name: string
  emoji: string
  isCorrectlySafe: boolean
}

const initialAnimals: Animal[] = [
  { id: 'goldfish', name: 'Goldfish', emoji: '🐠', isCorrectlySafe: true },
  { id: 'trex', name: 'T Rex', emoji: '🦖', isCorrectlySafe: false },
  { id: 'mouse', name: 'Mouse', emoji: '🐭', isCorrectlySafe: true },
  { id: 'wolf', name: 'Wolf', emoji: '🐺', isCorrectlySafe: false },
  { id: 'crocodile', name: 'Crocodile', emoji: '🐊', isCorrectlySafe: false },
  { id: 'hamster', name: 'Hamster', emoji: '🐹', isCorrectlySafe: true }
]

function DraggableAnimal({ animal, isCorrectlyPlaced, isDragging }: { 
  animal: Animal
  isCorrectlyPlaced?: boolean
  isDragging?: boolean
}) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: animal.id,
  })
  
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`h-10 sm:h-12 w-[120px] sm:w-[150px] rounded-xl flex items-center justify-center text-sm sm:text-base font-medium p-2 text-center cursor-move touch-none
        ${isDragging ? 'opacity-50' : ''}
        ${isCorrectlyPlaced ? 'bg-gray-100 text-gray-400 border-2 border-gray-300' : 'bg-blue-500 text-white border-2 border-blue-600 hover:bg-blue-600 transition-colors'}`}
    >
      {animal.name} {animal.emoji}
    </div>
  )
}

function DroppableZone({ id, title, animals, color }: { 
  id: string
  title: string
  animals: Animal[]
  color: string
}) {
  const { setNodeRef } = useDroppable({
    id: id,
  })

  return (
    <div className="flex flex-col items-center gap-2">
      <h3 className="text-base sm:text-lg font-semibold text-gray-700">{title}</h3>
      <div
        ref={setNodeRef}
        className={`w-[140px] sm:w-[180px] h-[150px] sm:h-[180px] rounded-xl ${color} p-3 flex flex-wrap content-start gap-3 overflow-y-auto`}
      >
        {animals.map((animal) => (
          <div 
            key={animal.id} 
            className={`h-10 sm:h-12 w-full ${color.replace('bg-', 'bg-').replace('100', '200')} ${color.replace('bg-', 'text-').replace('100', '800')} rounded-xl border-2 ${color.replace('bg-', 'border-').replace('100', '300')} flex items-center justify-center text-sm sm:text-base font-medium p-2 text-center`}
          >
            {animal.name} {animal.emoji}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function SortingQuizTest() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { currentQuestion, score, name } = getCurrentQuestionData(searchParams)
  
  const [unplacedAnimals, setUnplacedAnimals] = useState<Animal[]>(initialAnimals)
  const [safeAnimals, setSafeAnimals] = useState<Animal[]>([])
  const [dangerAnimals, setDangerAnimals] = useState<Animal[]>([])
  const [activeId, setActiveId] = useState<string | null>(null)
  const [hasError, setHasError] = useState(false)
  const [feedback, setFeedback] = useState({
    show: false,
    isCorrect: false,
    message: '',
    explanation: ''
  })

  // Check if all animals have been placed
  const areAllAnimalsPlaced = () => {
    return unplacedAnimals.length === 0
  }

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor)
  )

  const handleDragStart = (event: any) => {
    setActiveId(event.active.id)
  }

  const handleDragEnd = (event: any) => {
    const { active, over } = event
    
    if (!over) {
      setActiveId(null)
      return
    }

    const activeAnimal = initialAnimals.find(animal => animal.id === active.id)
    if (!activeAnimal) return

    const isCorrectPlacement = (
      (over.id === 'safe-zone' && activeAnimal.isCorrectlySafe) ||
      (over.id === 'danger-zone' && !activeAnimal.isCorrectlySafe)
    )

    if (!isCorrectPlacement) {
      // Mark as error and show feedback
      setHasError(true)
      setFeedback({
        show: true,
        isCorrect: false,
        message: getRandomQuip(false),
        explanation: "Keep practicing to become a master animal sorter!"
      })
      playSound(false)
      return
    }

    // Update animal positions
    setUnplacedAnimals(prev => prev.filter(a => a.id !== active.id))
    if (over.id === 'safe-zone') {
      setSafeAnimals(prev => [...prev, activeAnimal])
    } else if (over.id === 'danger-zone') {
      setDangerAnimals(prev => [...prev, activeAnimal])
    }

    // Play correct sound for correct placement
    playSound(true)

    // Check if this was the last animal to be placed
    const isLastAnimal = unplacedAnimals.length === 1 // Current animal is the last one
    if (isLastAnimal) {
      setFeedback({
        show: true,
        isCorrect: !hasError, // Only correct if no previous errors
        message: !hasError ? getRandomQuip(true) : "Oops! You made some mistakes along the way!",
        explanation: !hasError 
          ? "Now you know which animals are safe to pet and which ones to avoid!"
          : "Try again and see if you can sort all the animals without any mistakes!"
      })
    }

    setActiveId(null)
  }

  const handleDragCancel = () => {
    setActiveId(null)
  }

  const handleTryAgain = () => {
    setUnplacedAnimals(initialAnimals)
    setSafeAnimals([])
    setDangerAnimals([])
    setFeedback(prev => ({ ...prev, show: false }))
    setHasError(false) // Reset error state only on retry
  }

  const handleContinue = () => {
    // Only proceed if all animals are placed and there were no errors
    if (areAllAnimalsPlaced() && !hasError) {
      handleQuestionNavigation(
        { currentQuestion: 2, totalQuestions: questions.length, score, name },
        true,
        router
      )
    }
  }

  return (
    <div className="h-screen max-h-screen flex flex-col overflow-hidden">
      <style jsx global>{duoFontStyles}</style>

      {/* Header - 15vh */}
      <DuoHeader />

      {/* Main Content - 85vh */}
      <div className="flex-1 relative">
        {/* Content Overlay */}
        <div className="absolute inset-0" style={{ backgroundColor: duoDefaultTheme.backgroundColor }}>
          {/* Main Container */}
          <div className="h-full flex flex-col px-4">
            {/* Content Section */}
            <div className="w-full max-w-lg mx-auto pt-8">
              {/* Question Box */}
              <div 
                className="rounded-xl border-4 p-4 sm:p-6 mb-6"
                style={{
                  borderColor: duoDefaultTheme.titleBoxBorderColor,
                  backgroundColor: duoDefaultTheme.titleBoxBackgroundColor
                }}
              >
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center title-text">
                  Sort these animals from safest to most dangerous!
                </h1>
                <p className="text-gray-600 text-center mt-2 sm:mt-4 text-sm sm:text-base">
                  Drag and drop to reorder the animals
                </p>
              </div>

              <div className="relative">
                <DndContext
                  sensors={sensors}
                  collisionDetection={closestCorners}
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}
                  onDragCancel={handleDragCancel}
                >
                  {/* Zones Container */}
                  <div className="flex flex-row justify-center gap-4">
                    <DroppableZone
                      id="safe-zone"
                      title="Safe Animals"
                      animals={safeAnimals}
                      color="bg-green-100"
                    />
                    <DroppableZone
                      id="danger-zone"
                      title="Danger Zone"
                      animals={dangerAnimals}
                      color="bg-red-100"
                    />
                  </div>

                  {/* Animal Choices */}
                  <div className="flex flex-wrap justify-center gap-3 mt-4">
                    {unplacedAnimals.map((animal) => (
                      <DraggableAnimal
                        key={animal.id}
                        animal={animal}
                        isDragging={activeId === animal.id}
                      />
                    ))}
                  </div>

                  <DragOverlay>
                    {activeId ? (
                      <div className="h-10 sm:h-12 w-[120px] sm:w-[150px] bg-blue-200 text-blue-800 rounded-xl border-2 border-blue-300 flex items-center justify-center text-sm sm:text-base font-medium p-2 text-center">
                        {initialAnimals.find(a => a.id === activeId)?.name} {initialAnimals.find(a => a.id === activeId)?.emoji}
                      </div>
                    ) : null}
                  </DragOverlay>
                </DndContext>

                {/* Feedback Popup */}
                <FeedbackPopup
                  show={feedback.show}
                  isCorrect={feedback.isCorrect}
                  message={feedback.message}
                  explanation={feedback.explanation}
                  onTryAgain={handleTryAgain}
                  onContinue={handleContinue}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 