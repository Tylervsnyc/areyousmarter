import { Question } from '@/types'

const moneyChoices = [
  { id: 'save', name: 'Save Money', emoji: '💰', isCorrectlySafe: true },
  { id: 'spend', name: 'Buy Toys', emoji: '🎮', isCorrectlySafe: false },
  { id: 'invest', name: 'Help Parents', emoji: '🤝', isCorrectlySafe: true },
  { id: 'waste', name: 'Buy Candy', emoji: '🍬', isCorrectlySafe: false },
  { id: 'earn', name: 'Do Chores', emoji: '🧹', isCorrectlySafe: true },
  { id: 'impulse', name: 'Buy Games', emoji: '🎲', isCorrectlySafe: false }
]

const matchingPairs = [
  { id: 1, leftText: "Weekly goal", rightText: "$50" },
  { id: 2, leftText: "Money lost", rightText: "$10" },
  { id: 3, leftText: "Days worked", rightText: "Four" },
  { id: 4, leftText: "Money earned", rightText: "$40" }
]

export const chapter4Questions = [
  {
    id: "1",
    type: "multiple-choice",
    text: "Hudson started with $60 this week. After losing $10, how much does he have left?",
    options: ["$40", "$50", "$55", "$45"],
    correctAnswer: "$50",
    explanation: "$60 - $10 = $50 remaining"
  },
  {
    id: "2",
    type: "sorting",
    text: "Help Hudson sort these money choices into good and bad decisions!",
    items: moneyChoices,
    explanation: "Great job! These money-saving choices will help Hudson recover from his loss!"
  },
  {
    id: "3",
    text: "If Hudson earns $10 per day and works for 4 days, how much will he earn?",
    type: "multiple-choice",
    options: ["$30", "$40", "$50", "$60"],
    correctAnswer: "$40",
    explanation: "$10 per day × 4 days = $40"
  },
  {
    id: "4",
    text: "Hudson lost $10 from his $60 savings. What fraction of his money did he lose?",
    type: "multiple-choice",
    options: ["1/4", "1/6", "1/3", "1/5"],
    correctAnswer: "1/6",
    explanation: "$10 is one-sixth of $60, so 1/6"
  },
  {
    id: "5",
    type: "matching",
    text: "Match these facts about Hudson's difficult week!",
    pairs: matchingPairs,
    explanation: "Excellent! You understand Hudson's financial situation this week!"
  },
  {
    id: "6",
    text: "If Hudson needs $500 for the bike and has $50, what percentage has he saved?",
    type: "multiple-choice",
    options: ["5%", "10%", "15%", "20%"],
    correctAnswer: "10%",
    explanation: "$50 is 10% of $500"
  },
  {
    id: "7",
    text: "Hudson earned $40 this week but lost $10. What's his net gain?",
    type: "multiple-choice",
    options: ["$20", "$25", "$30", "$35"],
    correctAnswer: "$30",
    explanation: "$40 earned - $10 lost = $30 net gain"
  },
  {
    id: "8",
    text: "If Hudson saves $20 per week, how many weeks until he saves $100?",
    type: "multiple-choice",
    options: ["3 weeks", "4 weeks", "5 weeks", "6 weeks"],
    correctAnswer: "5 weeks",
    explanation: "$100 ÷ $20 per week = 5 weeks"
  },
  {
    id: "9",
    text: "Hudson has $50 and needs $500 for the bike. How much more does he need?",
    type: "multiple-choice",
    options: ["$400", "$450", "$500", "$550"],
    correctAnswer: "$450",
    explanation: "$500 - $50 = $450 more needed"
  },
  {
    id: "10",
    text: "If Hudson saves $30 per week, how many weeks until he saves $150?",
    type: "multiple-choice",
    options: ["3 weeks", "4 weeks", "5 weeks", "6 weeks"],
    correctAnswer: "5 weeks",
    explanation: "$150 ÷ $30 per week = 5 weeks"
  }
] 