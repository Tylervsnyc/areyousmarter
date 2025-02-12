import { Question } from '@/types'

const safeAnimals = [
  { id: 'cat', name: 'Cat', emoji: '🐱', isCorrectlySafe: true },
  { id: 'dog', name: 'Dog', emoji: '🐕', isCorrectlySafe: true },
  { id: 'lion', name: 'Lion', emoji: '🦁', isCorrectlySafe: false },
  { id: 'hamster', name: 'Hamster', emoji: '🐹', isCorrectlySafe: true },
  { id: 'tiger', name: 'Tiger', emoji: '🐯', isCorrectlySafe: false },
  { id: 'rabbit', name: 'Rabbit', emoji: '🐰', isCorrectlySafe: true }
]

const matchingPairs = [
  { id: 1, leftText: "Time with cat", rightText: "1 hour" },
  { id: 2, leftText: "Hudson's age", rightText: "Nine" },
  { id: 3, leftText: "Cat's name", rightText: "Mr. Fluffbutt" },
  { id: 4, leftText: "Bike color", rightText: "Red" }
]

export const chapter1Questions = [
  {
    id: "1",
    type: "multiple-choice",
    text: "Meow-velous friends! Hudson has one $5 bill and five $1 bills. How much money does he have?",
    options: ["$8", "$10", "$6", "$7"],
    correctAnswer: "$10",
    explanation: "One $5 bill plus five $1 bills equals $10!"
  },
  {
    id: "2",
    type: "sorting",
    text: "Help Hudson sort these animals into safe pets and dangerous animals!",
    items: safeAnimals,
    explanation: "Great job! Now you know which animals make safe pets and which ones are too dangerous!"
  },
  {
    id: "3",
    text: "Hey kittens! Hudson has three $1 bills. How much money is that?",
    type: "multiple-choice",
    options: ["$2", "$4", "$3", "$5"],
    correctAnswer: "$3",
    explanation: "Three $1 bills equals $3!"
  },
  {
    id: "4",
    text: "Count with me! Hudson has two $5 bills. How much money is that?",
    type: "multiple-choice",
    options: ["$5", "$15", "$10", "$20"],
    correctAnswer: "$10",
    explanation: "Two $5 bills equals $10!"
  },
  {
    id: "5",
    type: "matching",
    text: "Match these facts about Hudson and his feline friend!",
    pairs: matchingPairs,
    explanation: "Excellent matching! You know all about Hudson and Mr. Fluffbutt!"
  },
  {
    id: "6",
    text: "Meow-velous math! Hudson has one $10 bill. If he spends $5, how much is left?",
    type: "multiple-choice",
    options: ["$3", "$4", "$5", "$6"],
    correctAnswer: "$5",
    explanation: "If Hudson spends $5 from $10, he has $5 left!"
  },
  {
    id: "7",
    text: "Time to count! Hudson has four $1 bills. How much money is that?",
    type: "multiple-choice",
    options: ["$4", "$5", "$3", "$6"],
    correctAnswer: "$4",
    explanation: "Four $1 bills equals $4!"
  },
  {
    id: "8",
    text: "Purr-fect pupils! Hudson has $10. If he spends $2, how much is left?",
    type: "multiple-choice",
    options: ["$6", "$7", "$8", "$9"],
    correctAnswer: "$8",
    explanation: "If Hudson spends $2 from $10, he has $8 left!"
  },
  {
    id: "9",
    text: "Count these bills! Hudson has five $1 bills. How much money is that?",
    type: "multiple-choice",
    options: ["$4", "$6", "$3", "$5"],
    correctAnswer: "$5",
    explanation: "Five $1 bills equals $5!"
  },
  {
    id: "10",
    text: "Last one, kittens! Hudson has $5. If he gets another $5, how much will he have?",
    type: "multiple-choice",
    options: ["$8", "$10", "$7", "$9"],
    correctAnswer: "$10",
    explanation: "$5 plus another $5 equals $10!"
  }
] 