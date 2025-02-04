'use client'

import QuizTemplate from '@/components/QuizTemplate'
import MatchingQuestion from '@/components/MatchingQuestion'

const matchingPairs = [
  {
    id: 1,
    leftText: "Bike price",
    rightText: "$500"
  },
  {
    id: 2,
    leftText: "Cat pay",
    rightText: "$10"
  },
  {
    id: 3,
    leftText: "Belt color",
    rightText: "Green"
  },
  {
    id: 4,
    leftText: "Pet type",
    rightText: "Cat"
  }
]

const chapter1EasyQuestions = [
  {
    question: "Meow there! Hudson started the day with $10 from cat-sitting me. Count it with me: one $10 bill. How much money does Hudson have?",
    options: ["$5", "$10", "$15", "$20"],
    answer: "$10"
  },
  {
    question: "If Hudson cat-sits me for 5 days, and I convince my human to pay him $10 each day, how much will Hudson make in total?",
    options: ["$40", "$45", "$50", "$55"],
    answer: "$50"
  },
  {
    question: "Hudson bought some cat treats for me that cost $3, and a toy mouse that costs $2. How much did he spend on my presents in total?",
    options: ["$4", "$5", "$6", "$7"],
    answer: "$5"
  },
  {
    question: "If Hudson saves $10 each week from cat-sitting me, how much money will he have after 3 weeks?",
    options: ["$20", "$25", "$30", "$35"],
    answer: "$30"
  },
  {
    question: "Hudson found these bills in his piggy bank: two $5 bills and three $1 bills. How much money did he find?",
    options: ["$11", "$13", "$15", "$17"],
    answer: "$13"
  },
  {
    question: "If Hudson spends $4 on Monday and $6 on Tuesday buying snacks, how much did he spend altogether?",
    options: ["$8", "$10", "$12", "$14"],
    answer: "$10"
  },
  {
    question: "Hudson earned $10 from cat-sitting and found $8 in his piggy bank. How much money does he have now?",
    options: ["$16", "$18", "$20", "$22"],
    answer: "$18"
  },
  {
    question: "After a week of work and savings, Hudson has: one $10 bill, two $5 bills, and three $1 bills. What's his total?",
    options: ["$21", "$23", "$25", "$27"],
    answer: "$23"
  },
  {
    question: "This week, Hudson spent $5 on snacks and $7 on school supplies. What are his total expenses?",
    options: ["$10", "$12", "$14", "$16"],
    answer: "$12"
  },
  {
    question: "If Hudson has $23 and spends $12 on supplies, how much money does he have left?",
    options: ["$9", "$11", "$13", "$15"],
    answer: "$11"
  },
  {
    question: "",
    type: "matching" as const,
    hideQuestionBox: true,
    component: MatchingQuestion,
    componentProps: {
      pairs: matchingPairs
    },
    explanation: "Great job matching all the facts!"
  }
]

export default function Quiz1Ages6To7() {
  return (
    <QuizTemplate
      questions={chapter1EasyQuestions}
      chapterNumber="1"
      quizType="easy"
    />
  )
} 