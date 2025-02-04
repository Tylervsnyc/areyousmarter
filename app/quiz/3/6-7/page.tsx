'use client'

import QuizTemplate from '@/components/QuizTemplate'
import MatchingQuestion from '@/components/MatchingQuestion'

const matchingPairs = [
  {
    id: 1,
    leftText: "Flyers cost",
    rightText: "$12"
  },
  {
    id: 2,
    leftText: "Dog walk pay",
    rightText: "$5"
  },
  {
    id: 3,
    leftText: "Bird and Spider Pay",
    rightText: "$10"
  },
  {
    id: 4,
    leftText: "New dog name",
    rightText: "Edie"
  }
]

const chapter3EasyQuestions = [
  {
    question: "Meow-thematics time! My human Hudson (yes, I've claimed him) has two $20 bills, one $10 bill, three $5 bills, and seven $1 bills in his little money stash. Use your whiskers to count - how much does my human have?",
    options: ["$67", "$70", "$72", "$75"],
    answer: "$72"
  },
  {
    question: "My silly human spent $12 on those ridiculous paper things he calls flyers (I could have shredded them for free!). If he started with $72, how much is left in his treat-buying fund?",
    options: ["$58", "$60", "$62", "$65"],
    answer: "$60"
  },
  {
    question: "Sigh Hudson insists on walking that overexcited furball Edie for $5 each day (dogs, am I right?). If he does this for 3 days (the poor soul), how much money will he make?",
    options: ["$10", "$12", "$15", "$18"],
    answer: "$15"
  },
  {
    question: "That noisy feather duster Joseph needs feeding (honestly, who keeps a bird when they could have another cat?). If Hudson gets $5 each time he feeds him for 4 days, how much will my human earn?",
    options: ["$15", "$20", "$25", "$30"],
    answer: "$20"
  },
  {
    question: "Shudders That eight-legged nightmare needs feeding (and humans think WE'RE scary?). If Hudson makes $5 dealing with that creature each day for 5 days, how much will he make?",
    options: ["$20", "$25", "$30", "$35"],
    answer: "$25"
  },
  {
    question: "Another dog? Tail flick of disapproval If Hudson makes $5 walking that oversized puppy 6 times, how much money will he make?",
    options: ["$25", "$30", "$35", "$40"],
    answer: "$30"
  },
  {
    question: "Listen carefully, kittens: If my human spends $3 on those paper toys (which I generously don't always destroy) and gets one client, how many clients should he get with $12 on flyers?",
    options: ["2 clients", "3 clients", "4 clients", "5 clients"],
    answer: "4 clients"
  },
  {
    question: "Ah, now we're talking about someone important - ME! Hudson had the honor of serving... I mean, watching me for one day. How much did I allow him to earn?",
    options: ["$5", "$10", "$15", "$20"],
    answer: "$10"
  },
  {
    question: "How much of his treat money did Hudson waste on those crinkly flyer things this week? (Don't worry, I helped him redesign them... with my claws)",
    options: ["$8", "$10", "$12", "$15"],
    answer: "$12"
  },
  {
    question: "If Hudson earned $10 for basking in my glorious presence but spent $12 on those silly papers, what happened to his money this week?",
    options: ["He made $2", "He lost $2", "He made $12", "He lost $10"],
    answer: "He lost $2"
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

export default function Quiz3Ages6To7() {
  return (
    <QuizTemplate
      questions={chapter3EasyQuestions}
      chapterNumber="3"
      quizType="easy"
    />
  )
} 