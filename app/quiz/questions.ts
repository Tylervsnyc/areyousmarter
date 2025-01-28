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
      "Purrfectly calculated, my mathematical apprentice!",
      "Well, well... you might have a future in my royal court after all!",
      "Hmph! Your answer pleases the royal mathematician.",
      "Almost as clever as a cat... almost.",
      "I suppose I shall have to make these more challenging next time!"
    ],
    incorrectResponses: [
      "Ha! Just as I suspected - no match for feline intelligence!",
      "Even my royal litterbox has better numbers than that!",
      "Try again, and this time use ALL of your human brain cells!",
      "Meow-ch! That answer was painful to my royal sensibilities!",
      "Is that the best you can do? My afternoon nap is more accurate!"
    ],
    scoreMessages: {
      low: [
        "Oh dear, oh dear. Even a sleeping kitten could do better!",
        "Well, at least you tried. Unlike Hudson's chances of getting that bike at this rate!"
      ],
      medium: [
        "Mediocre, just like most humans. But I sense potential...",
        "You're about as sharp as a ball of yarn, but keep practicing!"
      ],
      high: [
        "Not bad for a human! You might be worthy of joining my mathematical court someday.",
        "I suppose you've earned a small nod of approval. *nods regally from throne*"
      ],
      perfect: [
        "Well, well... I must admit, you've impressed even this genius cat. *licks paw dismissively*",
        "Hmph! You might be almost as smart as me. Almost. *adjusts crown*"
      ]
    }
  },
  '2': {
    correctResponses: [
      "Purrfection! You're learning the ways of royal mathematics!",
      "A most regal calculation, my subject!",
      "The royal mathematician approves of this answer!",
      "Your mathematical prowess grows... but still no match for mine!",
      "Perhaps you're not as hopeless as you look, tiny human!"
    ],
    incorrectResponses: [
      "And here I thought you had potential! *dramatic sigh*",
      "Is this what passes for mathematics in the human realm?",
      "Try again, before I banish you from my mathematical kingdom!",
      "Even my royal whiskers can calculate better than that!",
      "Oh, the mathematical shame! My kingdom weeps!"
    ],
    scoreMessages: {
      low: [
        "*Sighs dramatically* Well, at least you didn't try to count with your toes.",
        "Perhaps we should start with counting royal kibble pieces?"
      ],
      medium: [
        "You're showing potential, tiny subject. The royal court is mildly impressed!",
        "Not completely hopeless. My royal training is working... slowly."
      ],
      high: [
        "Now you're thinking with your whiskers! Almost purr-fect!",
        "You're earning your place in the royal court of mathematics!"
      ],
      perfect: [
        "*Purrs regally* I hereby grant you the title of Royal Mathematical Scholar!",
        "You've proven yourself worthy of the Golden Whisker Award! *adjusts crown*"
      ]
    }
  }
}

export const questions: Record<string, ChapterQuestions> = {
  '1': {
    younger: [
      {
        question: "Listen up, tiny human! How much money does Hudson have at the start of his journey?",
        options: ["$0", "$5", "$10", "$15"],
        correctAnswer: 0
      },
      {
        question: "If Hudson earns $10 per day under my royal supervision, how much will he earn in 2 days?",
        options: ["$10", "$15", "$20", "$25"],
        correctAnswer: 2
      },
      {
        question: "Pay attention! How much does Hudson earn per hour of cat-sitting in my royal presence?",
        options: ["$5", "$8", "$10", "$12"],
        correctAnswer: 2
      },
      {
        question: "Use your human brain for this one: If Hudson has $10 now, what fraction of his goal does he still need?",
        options: ["48/50", "49/50", "98/100", "99/100"],
        correctAnswer: 1
      },
      {
        question: "If Hudson earns $50 per week in my royal service, how many complete weeks until $500?",
        options: ["8 weeks", "9 weeks", "10 weeks", "11 weeks"],
        correctAnswer: 2
      },
      {
        question: "Hudson earned $20 today and spent $5 on cat treats for me. How much did he save?",
        options: ["$10", "$15", "$20", "$25"],
        correctAnswer: 1
      },
      {
        question: "If Hudson saves $25 each week, how many weeks to save $100?",
        options: ["2 weeks", "3 weeks", "4 weeks", "5 weeks"],
        correctAnswer: 3
      },
      {
        question: "Hudson has saved $150 so far. How much more does he need for the $500 bike?",
        options: ["$250", "$300", "$350", "$400"],
        correctAnswer: 2
      },
      {
        question: "If Hudson earns $15 per day, how many days to earn $75?",
        options: ["3 days", "4 days", "5 days", "6 days"],
        correctAnswer: 2
      },
      {
        question: "Hudson found $5 on the ground! If he had $45 before, how much does he have now?",
        options: ["$45", "$50", "$55", "$60"],
        correctAnswer: 1
      }
    ],
    older: [
      {
        question: "Behold, a challenge worthy of my court! What percentage of Hudson's $500 goal would $100 represent?",
        options: ["15%", "20%", "25%", "30%"],
        correctAnswer: 1
      },
      {
        question: "Calculate this, if your human mind can handle it: How many $10 days equal $500?",
        options: ["45 days", "50 days", "55 days", "60 days"],
        correctAnswer: 1
      },
      {
        question: "A royal math puzzle: If Hudson saves $75 per week, how many weeks until $500?",
        options: ["6 weeks", "7 weeks", "8 weeks", "9 weeks"],
        correctAnswer: 1
      },
      {
        question: "If Hudson earns $12 per hour and works 4 hours, what percentage of $100 has he earned?",
        options: ["38%", "48%", "58%", "68%"],
        correctAnswer: 1
      },
      {
        question: "Hudson spent 15% of his $200 savings on new cat toys for me. How much does he have left?",
        options: ["$150", "$160", "$170", "$180"],
        correctAnswer: 2
      },
      {
        question: "If Hudson saves 40% of his $50 weekly allowance, how much does he save in a month?",
        options: ["$60", "$70", "$80", "$90"],
        correctAnswer: 2
      },
      {
        question: "Hudson has saved $300. What fraction of his $500 goal remains?",
        options: ["2/5", "3/5", "3/8", "5/8"],
        correctAnswer: 0
      },
      {
        question: "If Hudson earns $8 per hour, how many hours to earn 25% of his $500 goal?",
        options: ["12.5 hours", "15.5 hours", "15.625 hours", "16.5 hours"],
        correctAnswer: 2
      },
      {
        question: "Hudson's earnings increased by 20% from $50 to what amount?",
        options: ["$55", "$60", "$65", "$70"],
        correctAnswer: 1
      },
      {
        question: "If Hudson saves $450, what percentage of his $500 goal has he achieved?",
        options: ["85%", "90%", "95%", "98%"],
        correctAnswer: 1
      }
    ]
  },
  '2': {
    younger: [
      {
        question: "Attention, mathematical apprentice! How much money does Hudson have in his royal treasury?",
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
        question: "If I pay Hudson $10 for treats and he spends $4, how much remains in the royal treasury?",
        options: ["$4", "$6", "$8", "$10"],
        correctAnswer: 1
      },
      {
        question: "Hudson bought 3 royal cat toys at $2 each. How much did he spend on my happiness?",
        options: ["$4", "$6", "$8", "$10"],
        correctAnswer: 1
      },
      {
        question: "If Hudson saves $5 each day, how many days until he has $25?",
        options: ["3 days", "4 days", "5 days", "6 days"],
        correctAnswer: 2
      },
      {
        question: "Hudson spent half of his $30 on premium cat food. How much money does he have left?",
        options: ["$10", "$15", "$20", "$25"],
        correctAnswer: 1
      },
      {
        question: "If Hudson earns $8 today and $7 tomorrow, how much will he have earned in total?",
        options: ["$13", "$14", "$15", "$16"],
        correctAnswer: 2
      }
    ],
    older: [
      {
        question: "A royal calculation: If I earn Hudson $10 each day for 5 days, what's the total?",
        options: ["$40", "$45", "$50", "$55"],
        correctAnswer: 2
      },
      {
        question: "Now for the grand total! Add my royal payments ($50) to those ant wages ($15).",
        options: ["$55", "$60", "$65", "$70"],
        correctAnswer: 2
      },
      {
        question: "Expense time! How much did Hudson waste on those paper things?",
        options: ["$1", "$2", "$3", "$4"],
        correctAnswer: 2
      },
      {
        question: "Hudson made $65 in total but spent $3 on flyers. Calculate his profit, if you can!",
        options: ["$57", "$62", "$67", "$72"],
        correctAnswer: 1
      },
      {
        question: "Final challenge! Hudson started with $10 and made $62 in profit. What's his total now?",
        options: ["$52", "$62", "$72", "$82"],
        correctAnswer: 2
      },
      {
        question: "If Hudson's earnings increase by 25% from $40, what's his new total?",
        options: ["$45", "$50", "$55", "$60"],
        correctAnswer: 1
      },
      {
        question: "Hudson spends 20% of his $100 savings on premium cat food. How much remains?",
        options: ["$70", "$75", "$80", "$85"],
        correctAnswer: 2
      },
      {
        question: "If Hudson saves $15 per day, how many days to save $90?",
        options: ["4 days", "5 days", "6 days", "7 days"],
        correctAnswer: 2
      },
      {
        question: "Hudson's weekly earnings: $30 from me, $20 from ants. What's his monthly total?",
        options: ["$180", "$200", "$220", "$240"],
        correctAnswer: 1
      },
      {
        question: "If Hudson has $85 and spends 40% on cat supplies, how much does he have left?",
        options: ["$45", "$51", "$55", "$59"],
        correctAnswer: 1
      }
    ]
  }
}

export type { Question, ChapterQuestions, ChapterResponses } 