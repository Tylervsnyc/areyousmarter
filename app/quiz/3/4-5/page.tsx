'use client'

import QuizTemplate from '@/components/QuizTemplate'
import MatchingQuestion from '@/components/MatchingQuestion'

const matchingPairs = [
  {
    id: 1,
    leftText: "Dog name",
    rightText: "Edie"
  },
  {
    id: 2,
    leftText: "Bird name",
    rightText: "Joseph"
  },
  {
    id: 3,
    leftText: "New flyers cost",
    rightText: "$12"
  },
  {
    id: 4,
    leftText: "Pet count",
    rightText: "Four"
  }
]

const questions = [
  {
    question: "Purr-fect counters! Hudson has two $5 bills. How much money is that?",
    options: [
      "$8",
      "$10",
      "$7",
      "$9"
    ],
    answer: "$10",
    explanation: "Two $5 bills equals $10!"
  },
  {
    question: "Count these bills! Hudson has one $5 bill and four $1 bills. How much is that?",
    options: [
      "$8",
      "$9",
      "$7",
      "$10"
    ],
    answer: "$9",
    explanation: "One $5 bill plus four $1 bills equals $9!"
  },
  {
    question: "Meow-velous math! Hudson has $7. If he spends $3, how much is left?",
    options: [
      "$5",
      "$3",
      "$4",
      "$2"
    ],
    answer: "$4",
    explanation: "If Hudson spends $3 from $7, he has $4 left!"
  },
  {
    question: "Hey kittens! Hudson has six $1 bills. How much money is that?",
    options: [
      "$5",
      "$7",
      "$6",
      "$4"
    ],
    answer: "$6",
    explanation: "Six $1 bills equals $6!"
  },
  {
    question: "Time to count! Hudson has $8. If he spends $5, how much is left?",
    options: [
      "$2",
      "$4",
      "$3",
      "$1"
    ],
    answer: "$3",
    explanation: "If Hudson spends $5 from $8, he has $3 left!"
  },
  {
    question: "Paw-some adding! Hudson has $3. If he gets $4 more, how much will he have?",
    options: [
      "$8",
      "$6",
      "$7",
      "$5"
    ],
    answer: "$7",
    explanation: "$3 plus $4 more equals $7!"
  },
  {
    question: "Count with me! Hudson has one $5 bill and one $1 bill. How much is that?",
    options: [
      "$7",
      "$4",
      "$6",
      "$8"
    ],
    answer: "$6",
    explanation: "One $5 bill plus one $1 bill equals $6!"
  },
  {
    question: "Purr-fect pupils! Hudson has $9. If he spends $4, how much is left?",
    options: [
      "$6",
      "$5",
      "$4",
      "$3"
    ],
    answer: "$5",
    explanation: "If Hudson spends $4 from $9, he has $5 left!"
  },
  {
    question: "Last one! Hudson has $6. If he gets $2 more, how much will he have?",
    options: [
      "$7",
      "$9",
      "$8",
      "$10"
    ],
    answer: "$8",
    explanation: "$6 plus $2 more equals $8!"
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

export default function Quiz3Ages4To5() {
  return (
    <QuizTemplate
      questions={questions}
      chapterNumber="3"
      quizType="easy"
    />
  )
} 