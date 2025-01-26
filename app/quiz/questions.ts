interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

interface ChapterQuestions {
  younger: Question[];
  older: Question[];
}

const questions: Record<string, ChapterQuestions> = {
  '1': {
    younger: [
      {
        question: "What did Mr. Fluffbutt want to buy at the bike shop?",
        options: ["A red bike", "A blue bike", "A green bike", "A yellow bike"],
        correctAnswer: 0
      },
      // Add 9 more questions for ages 5-7
    ],
    older: [
      {
        question: "How much did the red bike cost?",
        options: ["$50", "$100", "$150", "$200"],
        correctAnswer: 2
      },
      // Add 9 more questions for ages 8-9
    ]
  },
  '2': {
    younger: [
      {
        question: "Where did Mr. Fluffbutt go in the park first?",
        options: ["Playground", "Lake", "Basketball court", "Picnic area"],
        correctAnswer: 1
      },
      // Add 9 more questions for ages 5-7
    ],
    older: [
      {
        question: "What type of birds did Mr. Fluffbutt see at the lake?",
        options: ["Pigeons", "Ducks", "Swans", "Geese"],
        correctAnswer: 2
      },
      // Add 9 more questions for ages 8-9
    ]
  }
}

export default questions; 