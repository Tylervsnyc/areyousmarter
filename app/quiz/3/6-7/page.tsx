'use client'

import QuizTemplate from '@/components/QuizTemplate'

const chapter3EasyQuestions = [
  {
    question: "How much money does Hudson have at the start? Count with me: 2 twenty dollar bills, 1 ten dollar bill, 1 five dollar bill, and 7 one dollar bills!",
    options: ["$52", "$62", "$72", "$82"],
    answer: "$62"
  },
  {
    question: "Hudson spent $12 on making flyers today. If he started with $62, how much money does he have left?",
    options: ["$40", "$50", "$60", "$70"],
    answer: "$50"
  },
  {
    question: "Last week, Hudson spent $3 on flyers and got one job. How many jobs might he get with $12 in flyers?",
    options: ["2 jobs", "3 jobs", "4 jobs", "5 jobs"],
    answer: "4 jobs"
  },
  {
    question: "Hudson got $10 for watching me, Mr. Fluffbutt, today. If he spent $12 on flyers, did he make money or lose money? How much?",
    options: ["Made $2", "Lost $2", "Made $22", "Lost $22"],
    answer: "Lost $2"
  },
  {
    question: "Today Hudson got 4 new jobs! Each family will pay him $5 per day. How much could he make in one day?",
    options: ["$15", "$20", "$25", "$30"],
    answer: "$20"
  },
  {
    question: "If Hudson makes $20 per day from his new jobs, how much will he make in 5 days?",
    options: ["$80", "$90", "$100", "$110"],
    answer: "$100"
  },
  {
    question: "Hudson has $50 now. If he saves all his money from one week ($100), how much will he have total?",
    options: ["$125", "$150", "$175", "$200"],
    answer: "$150"
  },
  {
    question: "If Hudson needs $500 for his bike and has $150 saved, how much more does he need?",
    options: ["$300", "$350", "$400", "$450"],
    answer: "$350"
  },
  {
    question: "Hudson found a special deal! The bike is now 10% off from $500. What's the new price?",
    options: ["$400", "$425", "$450", "$475"],
    answer: "$450"
  },
  {
    question: "With the 10% discount and $150 saved, how much more does Hudson need for the bike?",
    options: ["$250", "$300", "$350", "$400"],
    answer: "$300"
  }
]

export default function Chapter3EasyQuiz() {
  return (
    <QuizTemplate
      questions={chapter3EasyQuestions}
      chapterNumber="3"
      quizType="easy"
    />
  )
} 