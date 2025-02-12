import { Question } from '@/types'

const activities = [
  { id: 'save', name: 'Save Allowance', emoji: '💰', isCorrectlySafe: true },
  { id: 'candy', name: 'Buy Candy', emoji: '🍬', isCorrectlySafe: false },
  { id: 'chores', name: 'Do Chores', emoji: '🧹', isCorrectlySafe: true },
  { id: 'toys', name: 'Buy Toys', emoji: '🎮', isCorrectlySafe: false },
  { id: 'help', name: 'Help Parents', emoji: '🤝', isCorrectlySafe: true },
  { id: 'games', name: 'Buy Games', emoji: '🎲', isCorrectlySafe: false }
]

const matchingPairs = [
  { id: 1, leftText: "Weekly goal", rightText: "$20" },
  { id: 2, leftText: "Money spent", rightText: "$15" },
  { id: 3, leftText: "Days worked", rightText: "Five" },
  { id: 4, leftText: "Money earned", rightText: "$35" }
]

export const chapter3Questions = [
  {
    id: "1",
    type: "multiple-choice",
    text: "Hudson earned $35 this week but spent $15. How much did he save?",
    options: ["$15", "$20", "$25", "$30"],
    correctAnswer: "$20",
    explanation: "$35 earned - $15 spent = $20 saved!"
  },
  {
    id: "2",
    type: "sorting",
    text: "Help Hudson sort these activities into money-saving and money-spending choices!",
    items: activities,
    explanation: "Great job! These money-saving activities will help Hudson get his bike faster!"
  },
  {
    id: "3",
    text: "If Hudson saves $20 per week, how much will he save in 3 weeks?",
    type: "multiple-choice",
    options: ["$40", "$50", "$60", "$70"],
    correctAnswer: "$60",
    explanation: "$20 per week × 3 weeks = $60"
  },
  {
    id: "4",
    text: "Hudson has saved $150. What fraction of the $500 bike has he saved?",
    type: "multiple-choice",
    options: ["1/2", "1/3", "1/4", "3/10"],
    correctAnswer: "3/10",
    explanation: "$150 is three-tenths of $500, so 3/10"
  },
  {
    id: "5",
    type: "matching",
    text: "Match these facts about Hudson's weekly money management!",
    pairs: matchingPairs,
    explanation: "Excellent! You understand Hudson's weekly money plan!"
  },
  {
    id: "6",
    text: "If Hudson earns $10 per day for 5 days, how much will he earn?",
    type: "multiple-choice",
    options: ["$40", "$45", "$50", "$55"],
    correctAnswer: "$50",
    explanation: "$10 per day × 5 days = $50"
  },
  {
    id: "7",
    text: "Hudson has $100 and spends $25. What fraction of his money did he spend?",
    type: "multiple-choice",
    options: ["1/2", "1/3", "1/4", "1/5"],
    correctAnswer: "1/4",
    explanation: "$25 is one-fourth of $100, so 1/4"
  },
  {
    id: "8",
    text: "If Hudson saves $40 per week, how many weeks until he saves $200?",
    type: "multiple-choice",
    options: ["3 weeks", "4 weeks", "5 weeks", "6 weeks"],
    correctAnswer: "5 weeks",
    explanation: "$200 ÷ $40 per week = 5 weeks"
  },
  {
    id: "9",
    text: "Hudson earned $45 but spent $15 on games. How much did he save?",
    type: "multiple-choice",
    options: ["$25", "$30", "$35", "$40"],
    correctAnswer: "$30",
    explanation: "$45 earned - $15 spent = $30 saved"
  },
  {
    id: "10",
    text: "If Hudson has saved $250, how much more does he need for the $500 bike?",
    type: "multiple-choice",
    options: ["$200", "$250", "$300", "$350"],
    correctAnswer: "$250",
    explanation: "$500 - $250 = $250 more needed"
  }
] 