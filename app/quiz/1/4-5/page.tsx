'use client'

import QuizTemplate from '@/components/QuizTemplate'
import MatchingQuestion from '@/components/MatchingQuestion'

const matchingPairs = [
  {
    id: 1,
    leftText: "Bike color",
    rightText: "Red"
  },
  {
    id: 2,
    leftText: "Hudson's age",
    rightText: "Nine"
  },
  {
    id: 3,
    leftText: "Cat's name",
    rightText: "Mr. Fluffbutt"
  },
  {
    id: 4,
    leftText: "Time with cat",
    rightText: "1 hour"
  }
]

const questions = [
  {
    question: "Meow-velous friends! Hudson has one $5 bill and five $1 bills. How much money does he have?",
    options: ["$8", "$10", "$6", "$7"],
    answer: "$10",
    explanation: "One $5 bill plus five $1 bills equals $10!"
  },
  {
    question: "Purr-fect counters! Hudson spends $3 on lunch. If he started with $10, how much money does he have left?",
    options: ["$8", "$7", "$6", "$5"],
    answer: "$7",
    explanation: "If Hudson spends $3 from $10, he has $7 left!"
  },
  {
    question: "Hey kittens! Hudson has three $1 bills. How much money is that?",
    options: ["$2", "$4", "$3", "$5"],
    answer: "$3",
    explanation: "Three $1 bills equals $3!"
  },
  {
    question: "Count with me! Hudson has two $5 bills. How much money is that?",
    options: ["$5", "$15", "$10", "$20"],
    answer: "$10",
    explanation: "Two $5 bills equals $10!"
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
  },
  {
    question: "Meow-velous math! Hudson has one $10 bill. If he spends $5, how much is left?",
    options: ["$3", "$4", "$5", "$6"],
    answer: "$5",
    explanation: "If Hudson spends $5 from $10, he has $5 left!"
  },
  {
    question: "Time to count! Hudson has four $1 bills. How much money is that?",
    options: ["$4", "$5", "$3", "$6"],
    answer: "$4",
    explanation: "Four $1 bills equals $4!"
  },
  {
    question: "Purr-fect pupils! Hudson has $10. If he spends $2, how much is left?",
    options: ["$6", "$7", "$8", "$9"],
    answer: "$8",
    explanation: "If Hudson spends $2 from $10, he has $8 left!"
  },
  {
    question: "Count these bills! Hudson has five $1 bills. How much money is that?",
    options: ["$4", "$6", "$3", "$5"],
    answer: "$5",
    explanation: "Five $1 bills equals $5!"
  },
  {
    question: "Last one, kittens! Hudson has $5. If he gets another $5, how much will he have?",
    options: ["$8", "$10", "$7", "$9"],
    answer: "$10",
    explanation: "$5 plus another $5 equals $10!"
  }
]

export default function Quiz1Ages4To5() {
  return (
    <QuizTemplate
      questions={questions}
      chapterNumber="1"
      quizType="easy"
    />
  )
} 