'use client'

import QuizTemplate from '@/components/QuizTemplate'
import MatchingQuestion from '@/components/MatchingQuestion'

const matchingPairs = [
  {
    id: 1,
    leftText: "Distance biked",
    rightText: "2 miles"
  },
  {
    id: 2,
    leftText: "Cat sitting days",
    rightText: "Five"
  },
  {
    id: 3,
    leftText: "Total bike cost",
    rightText: "$500"
  },
  {
    id: 4,
    leftText: "Belt level",
    rightText: "Green"
  }
]

const chapter1HardQuestions = [
  {
    question: "Meow there! Hudson started the day with $10 from cat-sitting me. Count it with me: one $10 bill. How much money does Hudson have?",
    options: ["$5", "$10", "$15", "$20"],
    answer: "$10"
  },
  {
    question: "If Hudson cat-sits me for 5 days, and my human pays him $10 per day, plus a $15 bonus for making me purr, how much will he earn in total?",
    options: ["$55", "$60", "$65", "$70"],
    answer: "$65"
  },
  {
    question: "Hudson bought some cat treats for $3, two toy mice for $4 each, and a bag of catnip for $5. How much did he spend on my presents?",
    options: ["$14", "$16", "$18", "$20"],
    answer: "$16"
  },
  {
    question: "If Hudson saves $10 each week from cat-sitting, and his parents add $5 extra allowance each week, how much will he have after 3 weeks?",
    options: ["$35", "$40", "$45", "$50"],
    answer: "$45"
  },
  {
    question: "Hudson found these bills in his room: three $5 bills, four $1 bills, and one $10 bill. How much money did he find?",
    options: ["$25", "$27", "$29", "$31"],
    answer: "$29"
  },
  {
    question: "If Hudson spends $6 on Monday, $8 on Wednesday, and $12 on Friday buying supplies, how much did he spend in total?",
    options: ["$24", "$26", "$28", "$30"],
    answer: "$26"
  },
  {
    question: "Hudson earned $10 from cat-sitting, found $15 in his piggy bank, and got $20 from his grandmother. What's his total?",
    options: ["$40", "$45", "$50", "$55"],
    answer: "$45"
  },
  {
    question: "After two weeks, Hudson has: two $10 bills, three $5 bills, and six $1 bills. What's his total?",
    options: ["$41", "$43", "$45", "$47"],
    answer: "$41"
  },
  {
    question: "If Hudson has $45 and spends $28 on supplies, how much money does he have left?",
    options: ["$15", "$17", "$19", "$21"],
    answer: "$17"
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

export default function Quiz1Ages8To9() {
  return (
    <QuizTemplate
      questions={chapter1HardQuestions}
      chapterNumber="1"
      quizType="hard"
    />
  )
} 