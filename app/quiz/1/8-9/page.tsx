'use client'

import QuizTemplate from '@/components/QuizTemplate'

const chapter1HardQuestions = [
  {
    question: "Calculate Hudson's initial savings. If he starts with $0 and earns $10 per day for 3 days, what's his total?",
    options: ["$20", "$25", "$30", "$35"],
    answer: "$30"
  },
  {
    question: "If Hudson needs $500 for the bike and has earned $30, what percentage of his goal has he reached?",
    options: ["4%", "6%", "8%", "10%"],
    answer: "6%"
  },
  {
    question: "Hudson earns $10 per hour cat-sitting. If he works 4 hours today and 5 hours tomorrow, what's his total earnings?",
    options: ["$80", "$90", "$100", "$110"],
    answer: "$90"
  },
  {
    question: "If Hudson saves 75% of his $90 earnings, how much money will he have saved?",
    options: ["$57.50", "$67.50", "$77.50", "$87.50"],
    answer: "$67.50"
  },
  {
    question: "Hudson earns $50 per week. How many weeks will it take to save $400?",
    options: ["6 weeks", "7 weeks", "8 weeks", "9 weeks"],
    answer: "8 weeks"
  },
  {
    question: "If Hudson's weekly earnings increase by 20% from $50, what's his new weekly income?",
    options: ["$55", "$60", "$65", "$70"],
    answer: "$60"
  },
  {
    question: "Hudson spends 30% of his $100 savings on supplies. How much money does he have left?",
    options: ["$60", "$70", "$80", "$90"],
    answer: "$70"
  },
  {
    question: "If Hudson saves $20 per day, how many days until he saves $160?",
    options: ["6 days", "7 days", "8 days", "9 days"],
    answer: "8 days"
  },
  {
    question: "Hudson's monthly earnings: $200 from cat-sitting, $100 from other jobs. What's his average weekly income?",
    options: ["$65", "$70", "$75", "$80"],
    answer: "$75"
  },
  {
    question: "If Hudson has saved $250 (halfway to his goal) and increases his savings by 25%, what's his new total?",
    options: ["$287.50", "$312.50", "$337.50", "$362.50"],
    answer: "$312.50"
  }
]

export default function Chapter1HardQuiz() {
  return (
    <QuizTemplate
      questions={chapter1HardQuestions}
      chapterNumber="1"
      quizType="hard"
    />
  )
} 