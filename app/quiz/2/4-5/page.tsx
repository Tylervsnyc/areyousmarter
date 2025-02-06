'use client'

import QuizTemplate from '@/components/QuizTemplate'
import MatchingQuestion from '@/components/MatchingQuestion'

const matchingPairs = [
  {
    id: 1,
    leftText: "Flyer cost",
    rightText: "$3"
  },
  {
    id: 2,
    leftText: "Work days",
    rightText: "Five"
  },
  {
    id: 3,
    leftText: "Ant pay",
    rightText: "$5"
  },
  {
    id: 4,
    leftText: "Cat pay",
    rightText: "$10"
  }
]

const questions = [
  {
    question: "Meow-velous counters! Hudson has $10. If he spends $3 on flyers, how much is left?",
    options: [
      "$8",
      "$7",
      "$6",
      "$5"
    ],
    answer: "$7",
    explanation: "If Hudson spends $3 from $10, he has $7 left!"
  },
  {
    question: "Count with me! Hudson has seven $1 bills. How much money is that?",
    options: [
      "$6",
      "$8",
      "$7",
      "$5"
    ],
    answer: "$7",
    explanation: "Seven $1 bills equals $7!"
  },
  {
    question: "Purr-fect math! Hudson has $5. If he spends $2, how much is left?",
    options: [
      "$2",
      "$4",
      "$3",
      "$1"
    ],
    answer: "$3",
    explanation: "If Hudson spends $2 from $5, he has $3 left!"
  },
  {
    question: "Hey kittens! Hudson has eight $1 bills. How much money is that?",
    options: [
      "$7",
      "$9",
      "$6",
      "$8"
    ],
    answer: "$8",
    explanation: "Eight $1 bills equals $8!"
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
    question: "Count these bills! Hudson has one $5 bill and two $1 bills. How much is that?",
    options: [
      "$8",
      "$7",
      "$6",
      "$5"
    ],
    answer: "$7",
    explanation: "One $5 bill plus two $1 bills equals $7!"
  },
  {
    question: "Paw-some counting! Hudson has $6. If he spends $3, how much is left?",
    options: [
      "$2",
      "$4",
      "$3",
      "$5"
    ],
    answer: "$3",
    explanation: "If Hudson spends $3 from $6, he has $3 left!"
  },
  {
    question: "Time to add! Hudson has $4. If he gets $2 more, how much will he have?",
    options: [
      "$5",
      "$7",
      "$6",
      "$8"
    ],
    answer: "$6",
    explanation: "$4 plus $2 more equals $6!"
  },
  {
    question: "Count with care! Hudson has nine $1 bills. How much money is that?",
    options: [
      "$8",
      "$7",
      "$9",
      "$10"
    ],
    answer: "$9",
    explanation: "Nine $1 bills equals $9!"
  },
  {
    question: "Meow-velous math! Hudson has $8. If he spends $4, how much is left?",
    options: [
      "$4",
      "$5",
      "$3",
      "$6"
    ],
    answer: "$4",
    explanation: "If Hudson spends $4 from $8, he has $4 left!"
  }
]

export default function Quiz2Ages4To5() {
  return (
    <QuizTemplate
      questions={questions}
      chapterNumber="2"
      quizType="easy"
    />
  )
} 