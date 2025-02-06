'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MagicProgressBar from '@/components/MagicProgressBar'
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
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable'

interface Animal {
  id: string
  name: string
  emoji: string
  isCorrectlySafe: boolean
}

const initialAnimals: Animal[] = [
  { id: 'trex', name: 'T-Rex', emoji: '🦖', isCorrectlySafe: false },
  { id: 'mouse', name: 'Mouse', emoji: '🐭', isCorrectlySafe: true },
  { id: 'crocodile', name: 'Crocodile', emoji: '🐊', isCorrectlySafe: false },
  { id: 'goldfish', name: 'Goldfish', emoji: '🐠', isCorrectlySafe: true },
  { id: 'hamster', name: 'Hamster', emoji: '🐹', isCorrectlySafe: true },
  { id: 'wolf', name: 'Wolf', emoji: '🐺', isCorrectlySafe: false },
]

function DraggableAnimal({ animal, isCorrectlyPlaced, isDragging }: { 
  animal: Animal, 
  isCorrectlyPlaced?: boolean,
  isDragging?: boolean 
}) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: animal.id,
  });
  
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  if (isCorrectlyPlaced || isDragging) {
    return (
      <div className="h-5 sm:h-8 bg-gray-100 rounded border border-gray-300 flex items-center justify-center text-[10px] sm:text-sm font-medium p-0.5 text-center text-gray-400">
        {animal.name} {animal.emoji}
      </div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="h-5 sm:h-8 bg-blue-100 rounded border border-blue-300 flex items-center justify-center text-[10px] sm:text-sm font-medium p-0.5 text-center cursor-move touch-none"
    >
      {animal.name} {animal.emoji}
    </div>
  );
}

function DroppableZone({ id, title, animals, color, placeholderColor }: { 
  id: string
  title: string
  animals: Animal[]
  color: string
  placeholderColor: string
}) {
  const { setNodeRef } = useDroppable({
    id: id,
  });

  return (
    <div 
      ref={setNodeRef}
      className={`w-full sm:w-[250px] border-2 ${color} rounded-lg bg-white/80 p-0.5 sm:p-2`}
    >
      <h2 className={`text-xs sm:text-base font-bold ${color.replace('border', 'text')} text-center mb-0.5 sm:mb-2`}>
        {title}
      </h2>
      <div className="flex flex-col gap-0.5 sm:gap-2">
        {animals.map((animal) => (
          <div 
            key={animal.id}
            className={`h-6 sm:h-10 ${color.replace('border', 'bg').replace('400', '100')} rounded border ${color.replace('400', '300')} flex items-center justify-center text-[10px] sm:text-base font-medium`}
          >
            {animal.name} {animal.emoji}
          </div>
        ))}
        {animals.length < 3 && Array.from({ length: 3 - animals.length }).map((_, i) => (
          <div 
            key={`${id}-placeholder-${i}`} 
            className={`h-6 sm:h-10 border border-dashed ${placeholderColor} rounded`} 
          />
        ))}
      </div>
    </div>
  );
}

export default function TestChapter1() {
  const [unplacedAnimals, setUnplacedAnimals] = useState<Animal[]>(initialAnimals)
  const [safeAnimals, setSafeAnimals] = useState<Animal[]>([])
  const [dangerAnimals, setDangerAnimals] = useState<Animal[]>([])
  const [activeId, setActiveId] = useState<string | null>(null)
  const [hasWrongGuess, setHasWrongGuess] = useState(false)
  const [correctSound, setCorrectSound] = useState<HTMLAudioElement | null>(null)
  const [incorrectSound, setIncorrectSound] = useState<HTMLAudioElement | null>(null)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    setCorrectSound(new Audio('/sounds/matchcorrect.wav'))
    setIncorrectSound(new Audio('/sounds/matchincorrect.wav'))
  }, [])

  useEffect(() => {
    // Check if all animals are correctly sorted
    const correctSafe = safeAnimals.every(animal => animal.isCorrectlySafe)
    const correctDanger = dangerAnimals.every(animal => !animal.isCorrectlySafe)
    const allSorted = safeAnimals.length + dangerAnimals.length === initialAnimals.length

    if (allSorted && correctSafe && correctDanger) {
      setIsComplete(true)
      // Wait a moment before proceeding to next question
      setTimeout(() => {
        // Navigate to next question or results
      }, 1500)
    }
  }, [safeAnimals, dangerAnimals])

  const playSound = (isCorrect: boolean) => {
    if (isCorrect) {
      // Don't play sound if this is the last correct answer
      const totalCorrectAnswers = safeAnimals.filter(a => a.isCorrectlySafe).length + 
        dangerAnimals.filter(a => !a.isCorrectlySafe).length
      
      if (totalCorrectAnswers < 5 && correctSound) { // Only play if not the last answer
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

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const handleDragStart = (event: any) => {
    const { active } = event
    setActiveId(active.id)
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

    if (isCorrectPlacement) {
      // Remove from unplaced only if correct
      setUnplacedAnimals(prev => prev.filter(a => a.id !== active.id))
      
      // Add to correct zone
      if (over.id === 'safe-zone') {
        setSafeAnimals(prev => [...prev, activeAnimal])
      } else if (over.id === 'danger-zone') {
        setDangerAnimals(prev => [...prev, activeAnimal])
      }
    } else {
      setHasWrongGuess(true)
    }

    playSound(isCorrectPlacement)
    setActiveId(null)
  }

  const handleDragCancel = () => {
    setActiveId(null)
  }

  return (
    <div className="min-h-screen bg-[rgb(252,250,245)]">
      {/* Header */}
      <div className="relative h-[12vh] w-full">
        <Image
          src="/images/header.jpg"
          alt="Header Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Logo */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <Link href="https://www.learnthroughstories.com/">
            <Image
              src="/images/logo.png"
              alt="Learn Through Stories"
              width={80}
              height={20}
              priority
            />
          </Link>
        </div>
        {/* Substack */}
        <div className="absolute top-1/2 right-4 -translate-y-1/2">
          <Link href="https://learnthroughstories.substack.com/">
            <Image
              src="/images/substack.jpg"
              alt="Subscribe to Learn Through Stories"
              width={60}
              height={15}
              priority
            />
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-1">
        <div className="w-[90%] sm:w-[512px] mx-auto flex flex-col gap-1 sm:gap-2">
          <MagicProgressBar
            currentQuestion={1}
            totalQuestions={6}
          />

          <div className="bg-white/90 rounded-lg border-2 border-yellow-400 py-0.5 sm:py-2">
            <h1 className="text-xs sm:text-lg font-bold text-gray-900 text-center whitespace-nowrap">
              Sort the Animals : Drag and Drop
            </h1>
          </div>
          
          <DndContext
            sensors={sensors}
            collisionDetection={closestCorners}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDragCancel={handleDragCancel}
          >
            <div className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-2">
              <DroppableZone
                id="safe-zone"
                title="Safe Animals"
                animals={safeAnimals}
                color="border-green-400"
                placeholderColor="border-green-300"
              />
              <DroppableZone
                id="danger-zone"
                title="Danger Zone"
                animals={dangerAnimals}
                color="border-red-400"
                placeholderColor="border-red-300"
              />
            </div>

            <div className="h-14 sm:h-20 bg-white/90 rounded-lg border-2 border-yellow-400 p-0.5 sm:p-2">
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-0.5 sm:gap-2 h-full items-center">
                {initialAnimals.map((animal) => {
                  const isCorrectlyPlaced = (
                    (safeAnimals.find(a => a.id === animal.id) && animal.isCorrectlySafe) ||
                    (dangerAnimals.find(a => a.id === animal.id) && !animal.isCorrectlySafe)
                  );
                  const isDragging = activeId === animal.id;
                  return (
                    <DraggableAnimal 
                      key={animal.id} 
                      animal={animal} 
                      isCorrectlyPlaced={isCorrectlyPlaced}
                      isDragging={isDragging}
                    />
                  );
                })}
              </div>
            </div>

            <DragOverlay>
              {activeId ? (
                <div className="h-5 sm:h-8 bg-blue-200 rounded border border-blue-400 flex items-center justify-center text-[10px] sm:text-sm font-medium p-0.5 text-center">
                  {initialAnimals.find(a => a.id === activeId)?.name} {initialAnimals.find(a => a.id === activeId)?.emoji}
                </div>
              ) : null}
            </DragOverlay>
          </DndContext>
        </div>
      </div>
    </div>
  )
} 