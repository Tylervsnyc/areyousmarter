'use client'

import QuizTemplate from '@/components/QuizTemplate'

const chapter1EasyQuestions = [
  {
    question: "Listen up, tiny human! How much money does Hudson have at the start of his journey?",
    options: ["$0", "$5", "$10", "$15"],
    answer: "$0"
  },
  {
    question: "If Hudson earns $10 per day under my royal supervision, how much will he earn in 2 days?",
    options: ["$10", "$15", "$20", "$25"],
    answer: "$20"
  },
  {
    question: "Pay attention! How much does Hudson earn per hour of cat-sitting in my royal presence?",
    options: ["$5", "$8", "$10", "$12"],
    answer: "$10"
  },
  {
    question: "If Hudson has $10 now, how much more does he need for the $500 bike?",
    options: ["$450", "$470", "$490", "$500"],
    answer: "$490"
  },
  {
    question: "If Hudson earns $50 per week in my royal service, how many complete weeks until $500?",
    options: ["8 weeks", "9 weeks", "10 weeks", "11 weeks"],
    answer: "10 weeks"
  },
  {
    question: "Hudson earned $20 today and spent $5 on cat treats for me. How much did he save?",
    options: ["$10", "$15", "$20", "$25"],
    answer: "$15"
  },
  {
    question: "If Hudson saves $15 per day, how many days until he has $75?",
    options: ["3 days", "4 days", "5 days", "6 days"],
    answer: "5 days"
  },
  {
    question: "Hudson has $30 and spends half on cat food. How much money does he have left?",
    options: ["$10", "$15", "$20", "$25"],
    answer: "$15"
  },
  {
    question: "If Hudson earns $8 today and $12 tomorrow, how much will he have earned in total?",
    options: ["$15", "$18", "$20", "$22"],
    answer: "$20"
  },
  {
    question: "Hudson needs $500 for the bike and has saved $50. How much more does he need?",
    options: ["$400", "$425", "$450", "$475"],
    answer: "$450"
  }
]

export default function Chapter1EasyQuiz() {
  return (
    <QuizTemplate
      questions={chapter1EasyQuestions}
      chapterNumber="1"
      quizType="easy"
    />
  )
} 