'use client'

import QuizTemplate from '@/components/QuizTemplate'
import MatchingQuestion from '@/components/MatchingQuestion'

const matchingPairs = [
  {
    id: 1,
    leftText: "New friend's name",
    rightText: "Jimmy"
  },
  {
    id: 2,
    leftText: "Is Mr. Fluffbutt fluffy?",
    rightText: "Very"
  },
  {
    id: 3,
    leftText: "Flyer spend",
    rightText: "$12"
  },
  {
    id: 4,
    leftText: "Distance walked",
    rightText: "5 miles"
  }
]

const chapter3HardQuestions = [
  {
    question: "Ahem Let's start with something simple for your developing human brains. My servant... er, Hudson, has two $20 bills (probably from admiring my beauty), one $10 bill, three $5 bills, and seven $1 bills. Calculate his total wealth (though nothing compares to my priceless presence).",
    options: ["$67", "$70", "$72", "$75"],
    answer: "$72"
  },
  {
    question: "If my human starts with $72 and foolishly spends $12 on flyers (which I will shred) plus $8 on treats (acceptable expense), how much is left in his sad little savings?",
    options: ["$48", "$52", "$54", "$58"],
    answer: "$52"
  },
  {
    question: "Hudson feeds that squawking menace Joseph AND that creepy spider (the things I put up with!) for $5 each per day. Calculate his earnings for 3 days of this questionable career choice.",
    options: ["$20", "$25", "$30", "$35"],
    answer: "$30"
  },
  {
    question: "Pay attention, darlings! If Hudson makes $5 from each animal (none as magnificent as me), and he tends to 4 creatures daily for 3 days, what's his total earnings? Show me your arithmetic prowess!",
    options: ["$50", "$55", "$60", "$65"],
    answer: "$60"
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
    question: "Now for some real brain exercise! If Hudson makes $20 daily from his animal adventures but spends $8 on treats (at least he has priorities), calculate his 3-day profits!",
    options: ["$26", "$32", "$36", "$40"],
    answer: "$36"
  },
  {
    question: "Question 7: Hudson charges $5 per pet visit. If he visits 3 dogs twice a day for 5 days, what are his total earnings?",
    options: ["$120", "$130", "$150", "$160"],
    answer: "$150"
  },
  {
    question: "Time to discuss someone truly important - ME! Hudson spent a day attending to my needs (as he should). How much did I generously allow him to earn?",
    options: ["$5", "$10", "$15", "$20"],
    answer: "$10"
  },
  {
    question: "How much did my human waste... I mean, invest in those shreddable marketing materials this week?",
    options: ["$8", "$10", "$12", "$15"],
    answer: "$12"
  },
  {
    question: "Final question, kittens! If Hudson made $10 from experiencing my magnificence but spent $12 on those paper things I love to destroy, what's the state of his finances?",
    options: ["He made $2", "He lost $2", "He made $12", "He lost $10"],
    answer: "He lost $2"
  }
]

export default function Quiz3Ages8To9() {
  return (
    <QuizTemplate
      questions={chapter3HardQuestions}
      chapterNumber="3"
      quizType="hard"
    />
  )
} 