import { Question } from './types'

export const questions: Question[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: "Meow-velous friends! Hudson has one $5 bill and five $1 bills. How much money does he have?",
    options: ["$8", "$10", "$6", "$7"],
    correctAnswer: "$10",
    explanation: "One $5 bill plus five $1 bills equals $10!"
  },
  {
    id: 2,
    type: 'sorting',
    question: "Sort these animals from safest to most dangerous!",
    items: [
      { id: 'goldfish', name: 'Goldfish', emoji: '🐠', isCorrectlySafe: true },
      { id: 'trex', name: 'T Rex', emoji: '🦖', isCorrectlySafe: false },
      { id: 'mouse', name: 'Mouse', emoji: '🐭', isCorrectlySafe: true },
      { id: 'wolf', name: 'Wolf', emoji: '🐺', isCorrectlySafe: false },
      { id: 'crocodile', name: 'Crocodile', emoji: '🐊', isCorrectlySafe: false },
      { id: 'hamster', name: 'Hamster', emoji: '🐹', isCorrectlySafe: true }
    ],
    explanation: "Now you know which animals are safe to pet and which ones to avoid!"
  },
  {
    id: 3,
    type: 'matching',
    question: "Match the facts about Hudson and his cat!",
    pairs: [
      { id: 1, leftText: "Time with cat", rightText: "1 hour" },
      { id: 2, leftText: "Hudson's age", rightText: "Nine" },
      { id: 3, leftText: "Cat's name", rightText: "Mr. Fluffbutt" },
      { id: 4, leftText: "Bike color", rightText: "Red" }
    ],
    explanation: "Great job matching all the facts!"
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: "Hey kittens! Hudson has three $1 bills. How much money is that?",
    options: ["$2", "$4", "$3", "$5"],
    correctAnswer: "$3",
    explanation: "Three $1 bills equals $3!"
  }
] 