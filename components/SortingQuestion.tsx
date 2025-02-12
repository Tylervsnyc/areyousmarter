'use client'

import { useState, useEffect } from 'react'
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
import Image from 'next/image'
import { useButtonSound } from '../app/hooks/useButtonSound'
import { duoDefaultTheme } from '../app/test/duo-template/styles'
import { DuoTemplateButton } from '../app/test/duo-template/buttons/page'

interface Animal {
  id: string
  name: string
  emoji: string
  isCorrectlySafe: boolean
}

interface SortingQuestionProps {
  animals: Animal[]
  onAnswer: (isCorrect: boolean) => void
  isAnswered: boolean
}

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

export default function SortingQuestion({ animals, onAnswer, isAnswered }: SortingQuestionProps) {
  const [unplacedAnimals, setUnplacedAnimals] = useState<Animal[]>(animals)
  const [safeAnimals, setSafeAnimals] = useState<Animal[]>([])
  const [dangerAnimals, setDangerAnimals] = useState<Animal[]>([])
  const [activeId, setActiveId] = useState<string | null>(null)
  const [hasError, setHasError] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [correctSound] = useState(() => typeof Audio !== 'undefined' ? new Audio('/sounds/Correct/correct.wav') : null)
  const [incorrectSound, setIncorrectSound] = useState<HTMLAudioElement | null>(null)

  useEffect(() => {
    setIncorrectSound(new Audio('/sounds/incorrect.wav'))
  }, [])

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor)
  )

  const playSound = (isCorrect: boolean) => {
    if (isCorrect) {
      const totalCorrectAnswers = safeAnimals.filter(a => a.isCorrectlySafe).length + 
        dangerAnimals.filter(a => !a.isCorrectlySafe).length
      
      if (totalCorrectAnswers < animals.length - 1 && correctSound) {
        correctSound.currentTime = 0
        correctSound.play()
      }
    } else {
      if (incorrectSound) {
        incorrectSound.currentTime = 0
        incorrectSound.play()
      }
    }
  }

  const handleDragStart = (event: any) => {
    setActiveId(event.active.id)
  }

  const handleDragEnd = (event: any) => {
    const { active, over } = event
    
    if (!over) {
      setActiveId(null)
      return
    }

    const activeAnimal = animals.find(animal => animal.id === active.id)
    if (!activeAnimal) return

    const isCorrectPlacement = (
      (over.id === 'safe-zone' && activeAnimal.isCorrectlySafe) ||
      (over.id === 'danger-zone' && !activeAnimal.isCorrectlySafe)
    )

    if (isCorrectPlacement) {
      setUnplacedAnimals(prev => prev.filter(a => a.id !== active.id))
      
      if (over.id === 'safe-zone') {
        setSafeAnimals(prev => [...prev, activeAnimal])
      } else if (over.id === 'danger-zone') {
        setDangerAnimals(prev => [...prev, activeAnimal])
      }

      // Play correct sound
      playSound(true)

      // Check if this was the last animal to be correctly placed
      const remainingAnimals = unplacedAnimals.length - 1 // Subtract 1 for the current animal
      if (remainingAnimals === 0) {
        if (!hasError) {
          // Show success popup for perfect sorting
          setShowSuccess(true)
        } else {
          // If there were errors, just notify parent
          onAnswer(false)
        }
      }
    } else {
      // Play incorrect sound and mark error
      playSound(false)
      setHasError(true)
      onAnswer(false)
    }

    setActiveId(null)
  }

  const handleDragCancel = () => {
    setActiveId(null)
  }

  return (
    <div className="w-full max-w-lg mx-auto">
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
                {animals.find(a => a.id === activeId)?.name} {animals.find(a => a.id === activeId)?.emoji}
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>

        {/* Success Message */}
        {showSuccess && (
          <div className="fixed inset-x-0 bottom-0 p-4 z-50">
            <div className="bg-white rounded-xl p-6 max-w-md mx-auto shadow-lg border-4 border-yellow-400">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 relative flex-shrink-0">
                  <div className="absolute inset-0 rounded-full border-4 border-yellow-400 overflow-hidden">
                    <Image
                      src="/images/mrfb.jpg"
                      alt="Mr. Fluffbutt"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-xl font-bold text-gray-900 mb-1">
                    Purr-fect!
                  </div>
                  <div className="text-lg text-gray-700">
                    You've sorted all the animals correctly! My whiskers are tingling with approval!
                  </div>
                  <div className="text-sm text-gray-600 mt-2">
                    Now you know which animals are safe to pet and which ones to avoid!
                  </div>
                </div>
              </div>
              <DuoTemplateButton
                variant="blue"
                onClick={() => onAnswer(true)}
                className="mt-6"
              >
                Continue
              </DuoTemplateButton>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 