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
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable'

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

export default function SortingQuestion({ animals, onAnswer, isAnswered }: SortingQuestionProps) {
  const [unplacedAnimals, setUnplacedAnimals] = useState<Animal[]>(animals)
  const [safeAnimals, setSafeAnimals] = useState<Animal[]>([])
  const [dangerAnimals, setDangerAnimals] = useState<Animal[]>([])
  const [activeId, setActiveId] = useState<string | null>(null)
  const [hasWrongGuess, setHasWrongGuess] = useState(false)
  const [correctSound, setCorrectSound] = useState<HTMLAudioElement | null>(null)
  const [incorrectSound, setIncorrectSound] = useState<HTMLAudioElement | null>(null)

  useEffect(() => {
    setCorrectSound(new Audio('/sounds/matchcorrect.wav'))
    setIncorrectSound(new Audio('/sounds/matchincorrect.wav'))
  }, [])

  const playSound = (isCorrect: boolean) => {
    if (isCorrect) {
      // Don't play sound if this is the last correct answer
      const totalCorrectAnswers = safeAnimals.filter(a => a.isCorrectlySafe).length + 
        dangerAnimals.filter(a => !a.isCorrectlySafe).length
      
      if (totalCorrectAnswers < animals.length - 1 && correctSound) { // Only play if not the last answer
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

    const activeAnimal = animals.find(animal => animal.id === active.id)
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

      // Check if all animals are correctly placed
      const newTotalCorrect = (
        safeAnimals.filter(a => a.isCorrectlySafe).length + 
        dangerAnimals.filter(a => !a.isCorrectlySafe).length + 
        (activeAnimal.isCorrectlySafe && over.id === 'safe-zone' ? 1 : 0) +
        (!activeAnimal.isCorrectlySafe && over.id === 'danger-zone' ? 1 : 0)
      )

      if (newTotalCorrect === animals.length) {
        onAnswer(true)
      }
    } else {
      setHasWrongGuess(true)
      onAnswer(false)
    }

    playSound(isCorrectPlacement)
    setActiveId(null)
  }

  const handleDragCancel = () => {
    setActiveId(null)
  }

  return (
    <div className="max-w-lg mx-auto bg-white/90 rounded-xl border-4 border-yellow-400 p-4 shadow-lg">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
        Sort the Animals!
      </h2>
      
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

        <div className="h-14 sm:h-20 bg-white/90 rounded-lg border-2 border-yellow-400 p-0.5 sm:p-2 mt-4">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-0.5 sm:gap-2 h-full items-center">
            {animals.map((animal) => {
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
              {animals.find(a => a.id === activeId)?.name} {animals.find(a => a.id === activeId)?.emoji}
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  )
} 