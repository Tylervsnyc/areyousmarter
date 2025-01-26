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
        question: "What color bike did Mr. Fluffbutt want to buy?",
        options: ["Red", "Blue", "Green", "Yellow"],
        correctAnswer: 0
      },
      {
        question: "How did Mr. Fluffbutt get to the bike shop?",
        options: ["Walked", "Took the bus", "Rode a skateboard", "Got a ride"],
        correctAnswer: 1
      },
      {
        question: "What was the name of the bike shop owner?",
        options: ["Mr. Whiskers", "Mr. Barks", "Mr. Paws", "Mr. Meow"],
        correctAnswer: 3
      },
      {
        question: "What did Mr. Fluffbutt bring to carry his new bike home?",
        options: ["A wagon", "His dad's truck", "A rope", "Nothing"],
        correctAnswer: 2
      },
      {
        question: "What color was the bike shop's door?",
        options: ["Blue", "Red", "Green", "Brown"],
        correctAnswer: 1
      },
      {
        question: "What was playing on the radio in the bike shop?",
        options: ["Jazz", "Rock", "Classical", "Country"],
        correctAnswer: 0
      },
      {
        question: "What did Mr. Fluffbutt forget to bring?",
        options: ["His wallet", "His keys", "His helmet", "His shoes"],
        correctAnswer: 2
      },
      {
        question: "Who helped Mr. Fluffbutt pick out his bike?",
        options: ["His mom", "His dad", "His sister", "The shop owner"],
        correctAnswer: 3
      },
      {
        question: "What time did the bike shop close?",
        options: ["5 PM", "6 PM", "7 PM", "8 PM"],
        correctAnswer: 1
      },
      {
        question: "What was special about the bike Mr. Fluffbutt chose?",
        options: ["It had a bell", "It had a basket", "It had flames painted on it", "It had training wheels"],
        correctAnswer: 2
      }
    ],
    older: [
      {
        question: "How much did the red bike cost?",
        options: ["$100", "$150", "$200", "$250"],
        correctAnswer: 1
      },
      {
        question: "What was the bike's brand name?",
        options: ["SpeedMaster", "VeloKing", "RushRider", "SwiftCycle"],
        correctAnswer: 2
      },
      {
        question: "How many gears did the bike have?",
        options: ["3", "5", "7", "10"],
        correctAnswer: 3
      },
      {
        question: "What size were the bike's wheels?",
        options: ["20 inch", "24 inch", "26 inch", "28 inch"],
        correctAnswer: 1
      },
      {
        question: "What type of brakes did the bike have?",
        options: ["Disc brakes", "Rim brakes", "Coaster brakes", "Drum brakes"],
        correctAnswer: 0
      },
      {
        question: "What material was the bike frame made of?",
        options: ["Steel", "Aluminum", "Carbon fiber", "Titanium"],
        correctAnswer: 1
      },
      {
        question: "How long was the bike's warranty?",
        options: ["6 months", "1 year", "2 years", "3 years"],
        correctAnswer: 2
      },
      {
        question: "What extra feature came free with the bike?",
        options: ["Water bottle holder", "Bike lock", "LED lights", "Phone mount"],
        correctAnswer: 2
      },
      {
        question: "What was the bike's weight in pounds?",
        options: ["15", "20", "25", "30"],
        correctAnswer: 1
      },
      {
        question: "What type of handlebars did the bike have?",
        options: ["Flat bars", "Drop bars", "Riser bars", "Bullhorn bars"],
        correctAnswer: 2
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