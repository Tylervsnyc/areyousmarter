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
        question: "Where did Mr. Fluffbutt go first in the park?",
        options: ["Playground", "Lake", "Basketball court", "Picnic area"],
        correctAnswer: 1
      },
      {
        question: "What did Mr. Fluffbutt bring to feed the ducks?",
        options: ["Bread", "Seeds", "Crackers", "Nothing"],
        correctAnswer: 1
      },
      {
        question: "Who did Mr. Fluffbutt meet at the park?",
        options: ["His teacher", "His cousin", "A new friend", "An old friend"],
        correctAnswer: 2
      },
      {
        question: "What game did Mr. Fluffbutt play at the playground?",
        options: ["Tag", "Hide and seek", "Simon says", "Red light, green light"],
        correctAnswer: 1
      },
      {
        question: "What did Mr. Fluffbutt find under a tree?",
        options: ["A toy car", "A coin", "A key", "A marble"],
        correctAnswer: 3
      },
      {
        question: "What color was the slide at the playground?",
        options: ["Red", "Blue", "Yellow", "Green"],
        correctAnswer: 2
      },
      {
        question: "What did Mr. Fluffbutt have for lunch?",
        options: ["Sandwich", "Pizza", "Hot dog", "Salad"],
        correctAnswer: 0
      },
      {
        question: "What animal did Mr. Fluffbutt see in a tree?",
        options: ["Bird", "Squirrel", "Butterfly", "Bee"],
        correctAnswer: 1
      },
      {
        question: "What did Mr. Fluffbutt ride in the park?",
        options: ["Swing", "Merry-go-round", "Seesaw", "Zip line"],
        correctAnswer: 3
      },
      {
        question: "What time did Mr. Fluffbutt leave the park?",
        options: ["Noon", "2 PM", "4 PM", "6 PM"],
        correctAnswer: 2
      }
    ],
    older: [
      {
        question: "What type of birds did Mr. Fluffbutt see at the lake?",
        options: ["Mallards", "Swans", "Canadian Geese", "Wood Ducks"],
        correctAnswer: 1
      },
      {
        question: "How many laps did Mr. Fluffbutt walk around the lake?",
        options: ["One", "Two", "Three", "Four"],
        correctAnswer: 2
      },
      {
        question: "What type of tree provided shade for Mr. Fluffbutt's picnic?",
        options: ["Oak", "Maple", "Pine", "Willow"],
        correctAnswer: 3
      },
      {
        question: "What temperature was it at the park?",
        options: ["65°F", "70°F", "75°F", "80°F"],
        correctAnswer: 2
      },
      {
        question: "How many other families were having picnics?",
        options: ["Three", "Four", "Five", "Six"],
        correctAnswer: 1
      },
      {
        question: "What sport were people playing on the field?",
        options: ["Soccer", "Football", "Frisbee", "Baseball"],
        correctAnswer: 2
      },
      {
        question: "What kind of flowers were blooming near the lake?",
        options: ["Tulips", "Daisies", "Roses", "Lilies"],
        correctAnswer: 3
      },
      {
        question: "How long did Mr. Fluffbutt stay at the park?",
        options: ["2 hours", "3 hours", "4 hours", "5 hours"],
        correctAnswer: 1
      },
      {
        question: "What musical instrument was someone playing in the park?",
        options: ["Guitar", "Violin", "Saxophone", "Drums"],
        correctAnswer: 2
      },
      {
        question: "What was the name of the park's main trail?",
        options: ["Sunset Trail", "Lake Loop", "Forest Path", "Meadow Walk"],
        correctAnswer: 1
      }
    ]
  }
}

export default questions; 