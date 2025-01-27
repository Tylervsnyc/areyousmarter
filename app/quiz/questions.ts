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
      }
    ]
  }
}

export type { Question, ChapterQuestions, ChapterResponses } 