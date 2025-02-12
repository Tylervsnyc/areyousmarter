import { Question } from '@/types'

const foodItems = [
  { id: 'apple', name: 'Apple', emoji: '🍎', isCorrectlySafe: true },
  { id: 'candy', name: 'Candy', emoji: '🍬', isCorrectlySafe: false },
  { id: 'carrot', name: 'Carrot', emoji: '🥕', isCorrectlySafe: true },
  { id: 'soda', name: 'Soda', emoji: '🥤', isCorrectlySafe: false },
  { id: 'banana', name: 'Banana', emoji: '🍌', isCorrectlySafe: true },
  { id: 'cookie', name: 'Cookie', emoji: '🍪', isCorrectlySafe: false }
]

const matchingPairs = [
  { id: 1, leftText: "Bike cost", rightText: "$500" },
  { id: 2, leftText: "Money saved", rightText: "$25" },
  { id: 3, leftText: "Weekly allowance", rightText: "$10" },
  { id: 4, leftText: "Weeks saving", rightText: "Three" }
]

export const chapter2Questions = [
  {
    id: "1",
    type: "multiple-choice",
    text: "Hudson has saved $25 so far. How much more does he need to save for the $500 bike?",
    options: ["$425", "$475", "$450", "$525"],
    correctAnswer: "$475",
    explanation: "$500 - $25 = $475 more needed!"
  },
  {
    id: "2",
    type: "sorting",
    text: "Help Hudson sort these foods into healthy and unhealthy choices!",
    items: foodItems,
    explanation: "Great job! Healthy food choices help Hudson save money for his bike!"
  },
  {
    id: "3",
    text: "If Hudson saves $10 per week, how much will he save in 2 weeks?",
    type: "multiple-choice",
    options: ["$15", "$20", "$25", "$30"],
    correctAnswer: "$20",
    explanation: "$10 per week × 2 weeks = $20"
  },
  {
    id: "4",
    text: "Hudson spent $5 on candy. If he had $30, how much does he have left?",
    type: "multiple-choice",
    options: ["$20", "$25", "$15", "$35"],
    correctAnswer: "$25",
    explanation: "$30 - $5 = $25 left"
  },
  {
    id: "5",
    type: "matching",
    text: "Match these facts about Hudson's bike savings!",
    pairs: matchingPairs,
    explanation: "Excellent! You know all about Hudson's savings plan!"
  },
  {
    id: "6",
    text: "If Hudson saves $10 per week, how many weeks will it take to save $50?",
    type: "multiple-choice",
    options: ["3 weeks", "4 weeks", "5 weeks", "6 weeks"],
    correctAnswer: "5 weeks",
    explanation: "$50 ÷ $10 per week = 5 weeks"
  },
  {
    id: "7",
    text: "Hudson has $40 and spends $15 on toys. How much money does he have left?",
    type: "multiple-choice",
    options: ["$20", "$25", "$30", "$35"],
    correctAnswer: "$25",
    explanation: "$40 - $15 = $25 left"
  },
  {
    id: "8",
    text: "If Hudson saves $15 this week and $10 next week, how much will he have?",
    type: "multiple-choice",
    options: ["$20", "$25", "$30", "$35"],
    correctAnswer: "$25",
    explanation: "$15 + $10 = $25 total saved"
  },
  {
    id: "9",
    text: "Hudson needs $500 for the bike and has $50. What fraction has he saved?",
    type: "multiple-choice",
    options: ["1/5", "1/10", "1/20", "1/100"],
    correctAnswer: "1/10",
    explanation: "$50 is one-tenth of $500, so 1/10"
  },
  {
    id: "10",
    text: "If Hudson saves $100, what fraction of the $500 bike cost will that be?",
    type: "multiple-choice",
    options: ["1/5", "1/4", "1/3", "1/2"],
    correctAnswer: "1/5",
    explanation: "$100 is one-fifth of $500, so 1/5"
  }
] 