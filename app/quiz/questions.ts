interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

interface ChapterQuestions {
  younger: Question[];
  older: Question[];
}

interface ChapterResponses {
  correctResponses: string[];
  incorrectResponses: string[];
  scoreMessages: {
    low: string[];
    medium: string[];
    high: string[];
    perfect: string[];
  };
}

export const responses: Record<string, ChapterResponses> = {
  '1': {
    correctResponses: [
      "Purrfectly calculated, tiny human!",
      "Well, well... maybe you're not as hopeless as you look.",
      "Hmph! You got lucky with that one.",
      "Almost as smart as a cat... almost.",
      "I suppose I'll have to make these harder next time."
    ],
    incorrectResponses: [
      "Ha! Just as I suspected - no match for feline intelligence!",
      "Even a sleeping cat could do better than that!",
      "Try again, and this time use your human brain cells!",
      "Meow-ch! That answer was painful!",
      "Is that the best you can do? My litterbox has better numbers!"
    ],
    scoreMessages: {
      low: [
        "Oh dear, oh dear. Even a sleeping cat could do better!",
        "Well, at least you tried. Unlike Hudson's chances of getting that bike."
      ],
      medium: [
        "Mediocre, just like most humans. Keep practicing.",
        "You're about as sharp as a ball of yarn. Try harder next time."
      ],
      high: [
        "Not bad for a human. You might be worthy of petting me someday.",
        "I suppose you've earned a small nod of approval. *nods regally from perch*"
      ],
      perfect: [
        "Well, well... I must admit, you've impressed even this genius cat. *licks paw dismissively*",
        "Hmph! You might be almost as smart as a cat. Almost."
      ]
    }
  },
  '2': {
    correctResponses: [
      "Purrfectly calculated!",
      "Almost as smart as a cat!",
      "You've earned a royal head bump!",
      "My whiskers are tingling with approval!",
      "Not bad for a two-legged creature!",
      "You're making this cat purr with pride!",
      "Finally, a human who can count!",
      "My royal mathematician!",
      "Better than chasing laser dots!",
      "You've pleased His Majesty!",
      "Worthy of sharing my cushion!",
      "A treat for your brain!",
      "My apprentice taught you well!",
      "Almost as clever as me... almost.",
      "Royal paw of approval!",
      "You've earned a whisker twitch!",
      "Meow-velous calculation!",
      "You're thinking like a cat!",
      "Royal court mathematician!",
      "You've earned your catnip!"
    ],
    incorrectResponses: [
      "Licks paw dismissively Try again!",
      "Even a sleeping cat counts better!",
      "Did you count on your toes?",
      "Rolls eyes Is that your final answer?",
      "My litterbox math is better than that!",
      "Swats playfully Wrong!",
      "Were you distracted by a red dot?",
      "Did a dog help you with that?",
      "Tail swish No, no, no!",
      "Back to math class with you!",
      "Not worthy of my royal approval... yet.",
      "Yawns Is that your best attempt?",
      "Even my naps are more accurate!",
      "Time for remedial counting lessons!",
      "Hisses at calculator Try again!",
      "Did you forget how to count treats?",
      "My whiskers say that's wrong!",
      "Back to kitten school!",
      "Flops dramatically Oh, the horror!",
      "The royal court is not impressed!"
    ],
    scoreMessages: {
      low: [
        "Sighs dramatically Well, at least you didn't try to bark your answers.",
        "Perhaps we should start with counting kibble pieces?"
      ],
      medium: [
        "You're showing potential, tiny human. Keep practicing!",
        "Not completely hopeless. My training is working... slowly."
      ],
      high: [
        "Now you're thinking with your whiskers! Almost purr-fect!",
        "You're earning your place in the royal court of mathematics!"
      ],
      perfect: [
        "Purrs loudly I hereby grant you the title of Royal Mathematical Scholar!",
        "You've proven yourself worthy of the Golden Whisker Award!"
      ]
    }
  }
}

export const questions: Record<string, ChapterQuestions> = {
  '1': {
    younger: [
      {
        question: "How much money does Hudson have at the beginning of the chapter?",
        options: ["$0", "$5", "$10", "$15"],
        correctAnswer: 0
      },
      {
        question: "If Hudson earns $10 per day cat-sitting, how much will he earn in 2 days?",
        options: ["$10", "$15", "$20", "$25"],
        correctAnswer: 2
      },
      {
        question: "How much does Hudson earn per hour of cat-sitting?",
        options: ["$5", "$8", "$10", "$12"],
        correctAnswer: 2
      },
      {
        question: "If Hudson cat-sits Monday through Friday, how many days is that?",
        options: ["3 days", "4 days", "5 days", "6 days"],
        correctAnswer: 2
      },
      {
        question: "How much could Hudson earn in one week of cat-sitting?",
        options: ["$30", "$40", "$50", "$60"],
        correctAnswer: 2
      },
      {
        question: "If the bike costs $500, and Hudson has $10, how much more does he need?",
        options: ["$470", "$480", "$490", "$500"],
        correctAnswer: 2
      },
      {
        question: "What percentage of his goal has Hudson reached?",
        options: ["1%", "2%", "3%", "4%"],
        correctAnswer: 1
      },
      {
        question: "If Hudson saves $10 per day, how many days would it take to reach $500?",
        options: ["40 days", "45 days", "50 days", "55 days"],
        correctAnswer: 2
      },
      {
        question: "How much would Hudson earn in 2 weeks of cat-sitting 5 days each week?",
        options: ["$80", "$90", "$100", "$110"],
        correctAnswer: 2
      },
      {
        question: "If Hudson has $10 now, what percentage of his $500 goal does he still need to earn?",
        options: ["95%", "96%", "97%", "98%"],
        correctAnswer: 3
      }
    ],
    older: [
      {
        question: "If Hudson starts with $0 and earns $10 from cat-sitting, what percentage of his $500 goal has he reached?",
        options: ["1%", "2%", "3%", "4%"],
        correctAnswer: 1
      },
      {
        question: "If Hudson cat-sits for 5 days at $10 per day, what fraction of his $500 goal will he have earned?",
        options: ["1/10", "1/8", "1/5", "1/4"],
        correctAnswer: 0
      },
      {
        question: "How many weeks of cat-sitting 5 days per week would it take Hudson to earn $500?",
        options: ["8 weeks", "9 weeks", "10 weeks", "11 weeks"],
        correctAnswer: 2
      },
      {
        question: "If Hudson has earned $10 so far, what decimal represents his progress toward the $500 goal?",
        options: ["0.01", "0.02", "0.03", "0.04"],
        correctAnswer: 1
      },
      {
        question: "If Hudson earns $10 per day for 30 days, how much more would he need to reach $500?",
        options: ["$150", "$200", "$250", "$300"],
        correctAnswer: 1
      },
      {
        question: "What is Hudson's hourly rate if he earns $10 for 2 hours of cat-sitting?",
        options: ["$3", "$4", "$5", "$6"],
        correctAnswer: 2
      },
      {
        question: "If Hudson saves 100% of his cat-sitting money, how many $10 days would it take to reach $500?",
        options: ["40 days", "45 days", "50 days", "55 days"],
        correctAnswer: 2
      },
      {
        question: "If Hudson has $10 now, what fraction of his goal does he still need to earn?",
        options: ["48/50", "49/50", "98/100", "99/100"],
        correctAnswer: 1
      },
      {
        question: "If Hudson earns $50 per week, how many complete weeks would it take to reach $500?",
        options: ["8 weeks", "9 weeks", "10 weeks", "11 weeks"],
        correctAnswer: 2
      },
      {
        question: "What percentage of Hudson's $500 goal would $100 represent?",
        options: ["15%", "20%", "25%", "30%"],
        correctAnswer: 1
      }
    ]
  },
  '2': {
    younger: [
      {
        question: "How much money does Hudson have at the beginning of the chapter?",
        options: ["$5", "$10", "$15", "$20"],
        correctAnswer: 1
      },
      {
        question: "How much do humans pay for the honor of having ME watch their homes each day?",
        options: ["$5", "$8", "$10", "$12"],
        correctAnswer: 2
      },
      {
        question: "And what do those tiny ants pay per day? Obviously less than ME.",
        options: ["$3", "$4", "$5", "$6"],
        correctAnswer: 2
      },
      {
        question: "How many days am I gracing Hudson with my royal presence this week?",
        options: ["3", "4", "5", "6"],
        correctAnswer: 2
      },
      {
        question: "And how many days is he watching those boring ants?",
        options: ["2", "3", "4", "5"],
        correctAnswer: 1
      },
      {
        question: "If I earn Hudson $10 each day for 5 days, how much is that? Use your counting skills, tiny human!",
        options: ["$40", "$45", "$50", "$55"],
        correctAnswer: 2
      },
      {
        question: "Now for the grand total! Add up my royal payments ($50) and those ant wages ($15). What's Hudson's total revenue?",
        options: ["$55", "$60", "$65", "$70"],
        correctAnswer: 2
      },
      {
        question: "Expense time! How much did Hudson spend on those paper things?",
        options: ["$1", "$2", "$3", "$4"],
        correctAnswer: 2
      },
      {
        question: "Hudson made $65 in total but spent $3 on flyers. What's his profit?",
        options: ["$57", "$62", "$67", "$72"],
        correctAnswer: 1
      },
      {
        question: "Final question! Hudson started with $10 and made $62 in profit. How much does my apprentice have now?",
        options: ["$52", "$62", "$72", "$82"],
        correctAnswer: 2
      }
    ],
    older: [
      {
        question: "How much money does Hudson have at the beginning of the chapter?",
        options: ["$5", "$10", "$15", "$20"],
        correctAnswer: 1
      },
      {
        question: "If watching ME earns $10 per day and those ants pay $5, what's the difference?",
        options: ["$3", "$4", "$5", "$6"],
        correctAnswer: 2
      },
      {
        question: "How much would Hudson earn in 2 days of watching ME?",
        options: ["$15", "$20", "$25", "$30"],
        correctAnswer: 1
      },
      {
        question: "If the ant farm pays $5 per day for 3 days, what's the total?",
        options: ["$12", "$15", "$18", "$20"],
        correctAnswer: 1
      },
      {
        question: "How much do I earn Hudson in 3 days?",
        options: ["$20", "$25", "$30", "$35"],
        correctAnswer: 2
      },
      {
        question: "If Hudson makes $10 watching ME and $5 watching ants in one day, what's his daily total?",
        options: ["$12", "$15", "$18", "$20"],
        correctAnswer: 1
      },
      {
        question: "Add my royal payments ($50) to the ant income ($15). What's Hudson's total revenue?",
        options: ["$55", "$60", "$65", "$70"],
        correctAnswer: 2
      },
      {
        question: "How much did Hudson spend on those flyers?",
        options: ["$1", "$2", "$3", "$4"],
        correctAnswer: 2
      },
      {
        question: "Hudson's revenue is $65 and expenses are $3 for flyers. What's his profit?",
        options: ["$57", "$62", "$67", "$72"],
        correctAnswer: 1
      },
      {
        question: "If Hudson had $10 at the start and made $62 in profit, what's his total now?",
        options: ["$52", "$62", "$72", "$82"],
        correctAnswer: 2
      }
    ]
  }
}

export type { Question, ChapterQuestions, ChapterResponses } 