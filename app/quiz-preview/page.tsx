'use client'

import QuizTemplate from '@/components/QuizTemplate'

const sampleQuestions = [
  {
    question: "How much money does Hudson have at the beginning?",
    options: ["$5", "$10", "$15", "$20"],
    answer: "$10"
  },
  {
    question: "How much do humans pay for cat sitting per day?",
    options: ["$5", "$8", "$10", "$12"],
    answer: "$10"
  },
  {
    question: "What do the ants pay per day?",
    options: ["$3", "$4", "$5", "$6"],
    answer: "$5"
  },
  {
    question: "How many days of cat sitting this week?",
    options: ["3", "4", "5", "6"],
    answer: "5"
  },
  {
    question: "If I earn Hudson $10 each day for 5 days, how much is that? Use your counting skills, tiny human!",
    options: ["$40", "$45", "$50", "$55"],
    answer: "$50"
  },
  {
    question: "How much did Hudson spend on flyers?",
    options: ["$1", "$2", "$3", "$4"],
    answer: "$3"
  },
  {
    question: "What's Hudson's total revenue?",
    options: ["$55", "$60", "$65", "$70"],
    answer: "$65"
  },
  {
    question: "What's Hudson's final profit?",
    options: ["$57", "$62", "$67", "$72"],
    answer: "$62"
  },
  {
    question: "How much money does Hudson have now?",
    options: ["$52", "$62", "$72", "$82"],
    answer: "$72"
  },
  {
    question: "Final question! Did you enjoy my mathematical wisdom?",
    options: ["Yes!", "Absolutely!", "Of course!", "All of the above!"],
    answer: "All of the above!"
  }
]

export default function QuizPreview() {
  return (
    <QuizTemplate
      questions={sampleQuestions}
      chapterNumber="2"
      quizType="hard"
    />
  )
} 