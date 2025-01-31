'use client'

import QuizTemplate from '@/components/QuizTemplate'

const chapter3HardQuestions = [
  {
    question: "Calculate Hudson's starting money precisely: 2 twenty dollar bills, 1 ten dollar bill, 1 five dollar bill, and 7 one dollar bills. What's the total?",
    options: ["$52", "$62", "$72", "$82"],
    answer: "$62"
  },
  {
    question: "Hudson invested $12 in new marketing flyers today. What percentage of his starting money ($62) did he spend? Round to the nearest whole percent!",
    options: ["15%", "19%", "22%", "25%"],
    answer: "19%"
  },
  {
    question: "Using ratios: If $3 in marketing brought 1 client last week, calculate the potential number of new clients from $12 in marketing!",
    options: ["2 clients", "3 clients", "4 clients", "5 clients"],
    answer: "4 clients"
  },
  {
    question: "Hudson earned $10 watching Mr. Fluffbutt today but spent $12 on flyers. Express his net loss as a percentage of his marketing cost!",
    options: ["10%", "15%", "17%", "20%"],
    answer: "17%"
  },
  {
    question: "Today Hudson got calls from 4 new clients, each offering $5 per day. Calculate his potential weekly revenue if they all book him!",
    options: ["$100", "$120", "$140", "$160"],
    answer: "$140"
  },
  {
    question: "If Hudson's weekly revenue is $140 and his expenses are 15% of revenue, what's his net profit?",
    options: ["$105", "$119", "$125", "$130"],
    answer: "$119"
  },
  {
    question: "Hudson has saved $150. If he continues making $119 in net profit weekly, how many weeks until he reaches $500?",
    options: ["2 weeks", "3 weeks", "4 weeks", "5 weeks"],
    answer: "3 weeks"
  },
  {
    question: "The bike shop is offering a 10% discount on the $500 bike. Calculate the savings amount!",
    options: ["$25", "$40", "$50", "$75"],
    answer: "$50"
  },
  {
    question: "With the 10% discount applied, what percentage of the new bike price ($450) has Hudson saved with his $150?",
    options: ["25%", "33%", "40%", "45%"],
    answer: "33%"
  },
  {
    question: "If Hudson increases his weekly savings by 25% from $119, how many weeks until he saves the remaining $300?",
    options: ["8 weeks", "9 weeks", "10 weeks", "11 weeks"],
    answer: "10 weeks"
  }
]

export default function Chapter3HardQuiz() {
  return (
    <QuizTemplate
      questions={chapter3HardQuestions}
      chapterNumber="3"
      quizType="hard"
    />
  )
} 