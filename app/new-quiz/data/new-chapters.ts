import type { ChapterData, Theme } from '../types'

/**
 * Question Formatting Rules:
 * 
 * 1. String Formatting:
 *    - Use single quotes with escaped apostrophes: 'Hudson\'s savings'
 *    - Never use double quotes or template literals
 *    - Always include trailing commas in objects and arrays
 * 
 * 2. Question Structure:
 *    - Each question must have: id, type, question, options, answer, explanation
 *    - IDs follow pattern: 'cX.Y.Z' (X=chapter, Y=quiz 1-3, Z=question 1-10)
 *    - Always include emojis at start and end of questions
 *    - Always include encouraging emoji in explanations
 * 
 * 3. Age-Appropriate Content:
 *    Ages 4-5:
 *    - Simple arithmetic (under 20)
 *    - Basic counting
 *    - Visual elements
 *    
 *    Ages 6-7:
 *    - Intermediate arithmetic (under 100)
 *    - Simple multiplication
 *    - Basic word problems
 *    
 *    Ages 8-9:
 *    - Advanced arithmetic
 *    - Multi-step problems
 *    - Complex word problems
 * 
 * 4. Chapter Structure:
 *    - Each chapter needs title, subtitle, readStoryLink, theme
 *    - Must have 3 age groups with 10 questions each
 *    - All questions must follow consistent format
 * 
 * 5. Content Guidelines:
 *    - Questions should be engaging and relatable
 *    - Use consistent characters (Mr. Fluffbutt, Hudson, etc.)
 *    - Include real-world money and time concepts
 *    - Maintain positive, encouraging tone
 */

// Theme configuration
const defaultTheme: Theme = {
  pattern: 'dots' as const,
  tone: 'light' as const
}

// Chapter themes
const themes: Record<string, Theme> = {
  chapter1: {
    pattern: 'dots',
    tone: 'blue'
  },
  chapter2: {
    pattern: 'paws',
    tone: 'green'
  },
  chapter3: {
    pattern: 'stars',
    tone: 'blue'
  },
  chapter4: {
    pattern: 'hearts',
    tone: 'light'
  },
  chapter5: {
    pattern: 'dots',
    tone: 'light'
  },
  chapter6: {
    pattern: 'stars',
    tone: 'green'
  },
  chapter7: {
    pattern: 'paws',
    tone: 'blue'
  },
  chapter8: {
    pattern: 'hearts',
    tone: 'red'
  }
}

// Chapter 1 Data
const chapter1: ChapterData = {
  id: 'chapter1',
  title: 'Are You Smarter than Mr. Fluffbutt?',
  subtitle: 'Help Me Get This Bike',
  readStoryLink: '/stories/chapter1',
  theme: themes.chapter1,
  questions: {
    age4to5: [
      {
        id: 'c1.1.1',
        type: 'multiple-choice',
        question: '🐱 How much money did Miss Meyers give Hudson for watching me? 💰',
        options: ['$5', '$10', '$15', '$20'],
        answer: '$10',
        explanation: '🌟 Miss Meyers gave Hudson $10 for being such a good cat-sitter! 🐾'
      },
      {
        id: 'c1.1.2',
        type: 'multiple-choice',
        question: '🎨 What color is the beautiful bike Hudson wants? 🚲',
        options: ['Blue', 'Green', 'Red', 'Yellow'],
        answer: 'Red',
        explanation: '🌈 It\'s a shiny red bike! Just like my favorite toy mouse! 🐾'
      },
      {
        id: 'c1.1.3',
        type: 'multiple-choice',
        question: '⏰ When does Hudson come to visit me? 🐱',
        options: ['Before school', 'After school', 'At night', 'During lunch'],
        answer: 'After school',
        explanation: '🌟 Hudson comes to see me after school every day! 🎒'
      },
      {
        id: 'c1.1.4',
        type: 'multiple-choice',
        question: '💰 How much does the bike cost? 🚲',
        options: ['$100', '$200', '$500', '$1000'],
        answer: '$500',
        explanation: '🎯 The bike costs $500! That\'s a lot of cat treats! 💫'
      },
      {
        id: 'c1.1.5',
        type: 'multiple-choice',
        question: '📚 What does Hudson do while watching Mr. Fluffbutt? 📝',
        options: ['Plays games', 'Does homework', 'Takes a nap', 'Watches TV'],
        answer: 'Does homework',
        explanation: '✏️ Hudson does his homework while keeping me company! 📚'
      },
      {
        id: 'c1.1.6',
        type: 'multiple-choice',
        question: '🎵 What does Hudson do that makes Mr. Fluffbutt happy? 🐱',
        options: ['Dances', 'Hums', 'Claps', 'Jumps'],
        answer: 'Hums',
        explanation: '🎵 Hudson hums such nice songs that make me purr! 🎶'
      },
      {
        id: 'c1.1.7',
        type: 'multiple-choice',
        question: '👥 Who owns Mr. Fluffbutt? 🏠',
        options: ['Hudson', 'Miss Meyers', 'Mom', 'Dad'],
        answer: 'Miss Meyers',
        explanation: '🏠 Miss Meyers is my human! Though I own the house, really! 😺'
      },
      {
        id: 'c1.1.8',
        type: 'multiple-choice',
        question: '❓ Is $10 enough to buy the bike? 🤔',
        options: ['Yes', 'No'],
        answer: 'No',
        explanation: '💰 No, Hudson needs much more than $10 for the bike! 🚲'
      },
      {
        id: 'c1.1.9',
        type: 'multiple-choice',
        question: '📅 How many days did Miss Meyers ask Hudson to watch Mr. Fluffbutt? 🐱',
        options: ['3 days', '4 days', '5 days', '6 days'],
        answer: '5 days',
        explanation: '📅 Monday to Friday makes 5 days! Purr-fect counting! 🌟'
      },
      {
        id: 'c1.1.10',
        type: 'multiple-choice',
        question: '🐱 Where does Mr. Fluffbutt like to sit when new people visit? 🪑',
        options: ['Under the bed', 'On his perch', 'By the door', 'On the couch'],
        answer: 'On his perch',
        explanation: '👑 I like to sit on my royal perch and observe my subjects! 🐾'
      }
    ],
    age6to7: [
      {
        id: 'c1.2.1',
        type: 'multiple-choice',
        question: '💰 If Hudson makes $10 each day watching Mr. Fluffbutt, how much will he make in 5 days? 🐱',
        options: ['$40', '$50', '$45', '$55'],
        answer: '$50',
        explanation: '🌟 $10 × 5 days = $50! Purr-fect multiplication! 🧮'
      },
      {
        id: 'c1.2.2',
        type: 'multiple-choice',
        question: '🚲 The bike costs $500. If Hudson has $10 now, how much MORE money does he need? 💵',
        options: ['$490', '$480', '$500', '$400'],
        answer: '$490',
        explanation: '🎯 $500 - $10 = $490! Keep saving, Hudson! 💪'
      },
      {
        id: 'c1.2.3',
        type: 'multiple-choice',
        question: '📅 How many days are there from Monday to Friday? 🤔',
        options: ['3 days', '4 days', '5 days', '6 days'],
        answer: '5 days',
        explanation: '📊 Monday through Friday = 5 days of cat-sitting! 🌟'
      },
      {
        id: 'c1.2.4',
        type: 'multiple-choice',
        question: '⏰ If Hudson spends 1 hour with Mr. Fluffbutt each day, how many hours in 5 days? ⌛',
        options: ['3 hours', '4 hours', '5 hours', '6 hours'],
        answer: '5 hours',
        explanation: '⏰ 1 hour × 5 days = 5 hours with the magnificent Mr. Fluffbutt! 🐱'
      },
      {
        id: 'c1.2.5',
        type: 'multiple-choice',
        question: '💰 If Hudson saves $50 each week, how many weeks of saving will he need for the $500 bike? 🚲',
        options: ['8 weeks', '10 weeks', '12 weeks', '14 weeks'],
        answer: '10 weeks',
        explanation: '🧮 $500 ÷ $50 = 10 weeks! Smart calculating! 📊'
      },
      {
        id: 'c1.2.6',
        type: 'multiple-choice',
        question: '📝 If Hudson does homework for 30 minutes while watching Mr. Fluffbutt, how many minutes in 5 days? ⏱️',
        options: ['100 minutes', '150 minutes', '200 minutes', '250 minutes'],
        answer: '150 minutes',
        explanation: '⏰ 30 minutes × 5 days = 150 minutes of homework time! 📚'
      },
      {
        id: 'c1.2.7',
        type: 'multiple-choice',
        question: '💵 If Hudson gets $10 per day, how much money will he have after 3 days? 💰',
        options: ['$20', '$25', '$30', '$35'],
        answer: '$30',
        explanation: '🎯 $10 × 3 days = $30! Counting like a pro! 🌟'
      },
      {
        id: 'c1.2.8',
        type: 'multiple-choice',
        question: '🐱 If Mr. Fluffbutt takes a 10-minute nap 4 times during Hudson\'s visit, how many minutes does he nap? 😺',
        options: ['30 minutes', '40 minutes', '50 minutes', '60 minutes'],
        answer: '40 minutes',
        explanation: '😴 10 minutes × 4 naps = 40 minutes of beauty rest! 🌙'
      },
      {
        id: 'c1.2.9',
        type: 'multiple-choice',
        question: '📊 If Hudson saves $10 today and $20 tomorrow, how much will he have? 💵',
        options: ['$25', '$30', '$35', '$40'],
        answer: '$30',
        explanation: '💰 $10 + $20 = $30! Adding like a mathematician! ➕'
      },
      {
        id: 'c1.2.10',
        type: 'multiple-choice',
        question: '🎯 If the bike costs $500 and Hudson saves $100, what fraction has he saved? 🚲',
        options: ['1/3', '1/4', '1/5', '1/6'],
        answer: '1/5',
        explanation: '📊 $100 is 1/5 of $500! Fractions are fun! 🎨'
      }
    ],
    age8to9: [
      {
        id: 'c1.3.1',
        type: 'multiple-choice',
        question: '💰 If Hudson makes $10 each day watching Mr. Fluffbutt on weekdays, how much will he make in 3 weeks? 🐱',
        options: ['$100', '$150', '$200', '$250'],
        answer: '$150',
        explanation: '🧮 $10 × 5 days × 3 weeks = $150! Excellent multiplication! 🌟'
      },
      {
        id: 'c1.3.2',
        type: 'multiple-choice',
        question: '🚲 If Hudson has saved $200 for the bike that costs $500, how much more does he need? 💵',
        options: ['$200', '$250', '$300', '$350'],
        answer: '$300',
        explanation: '🎯 $500 - $200 = $300 more needed! Keep saving! 💪'
      },
      {
        id: 'c1.3.3',
        type: 'multiple-choice',
        question: '⏰ If Hudson spends 1 hour and 15 minutes with Mr. Fluffbutt each day, how many hours is that in a 5-day week? ⌛',
        options: ['5 hours', '6 hours', '6.25 hours', '7 hours'],
        answer: '6.25 hours',
        explanation: '⏱️ (75 minutes × 5) ÷ 60 = 6.25 hours! Time calculation master! 🌟'
      },
      {
        id: 'c1.3.4',
        type: 'multiple-choice',
        question: '💵 If Hudson saves $10 each weekday and $5 each weekend day, how much will he save in 2 weeks? 💰',
        options: ['$110', '$120', '$130', '$140'],
        answer: '$120',
        explanation: '🧮 ($10 × 10 weekdays) + ($5 × 4 weekend days) = $120! Smart saving! 💫'
      },
      {
        id: 'c1.3.5',
        type: 'multiple-choice',
        question: '📊 If Hudson has $50 and spends $15 on supplies and $20 on food, how much money does he have left? 🤔',
        options: ['$10', '$15', '$20', '$25'],
        answer: '$15',
        explanation: '💰 $50 - $15 - $20 = $15! Careful budgeting! ✨'
      },
      {
        id: 'c1.3.6',
        type: 'multiple-choice',
        question: '🎯 If Hudson needs $500 for the bike and saves $45 each week, how many complete weeks will it take? 📅',
        options: ['10 weeks', '11 weeks', '12 weeks', '13 weeks'],
        answer: '12 weeks',
        explanation: '🧮 $500 ÷ $45 = 11.11 weeks, so he needs 12 full weeks! 📊'
      },
      {
        id: 'c1.3.7',
        type: 'multiple-choice',
        question: '⏱️ If Hudson spends 45 minutes with Mr. Fluffbutt each weekday, how many total minutes in 2 weeks? ⌛',
        options: ['350 minutes', '400 minutes', '450 minutes', '500 minutes'],
        answer: '450 minutes',
        explanation: '⏰ 45 minutes × 5 days × 2 weeks = 450 minutes! Time flies! 🌟'
      },
      {
        id: 'c1.3.8',
        type: 'multiple-choice',
        question: '💰 If Hudson makes $50 this week but spends $12 on supplies, what\'s his actual savings? 💵',
        options: ['$33', '$38', '$42', '$48'],
        answer: '$38',
        explanation: '🎯 $50 - $12 = $38 saved! Every dollar counts! 💪'
      },
      {
        id: 'c1.3.9',
        type: 'multiple-choice',
        question: '📚 If Hudson does homework for 40 minutes while watching Mr. Fluffbutt each day, how many hours of homework in 2 weeks (weekdays only)? 📝',
        options: ['5.5 hours', '6.5 hours', '6.75 hours', '7 hours'],
        answer: '6.75 hours',
        explanation: '📊 (40 minutes × 10 days) ÷ 60 = 6.75 hours! Study champion! 🌟'
      },
      {
        id: 'c1.3.10',
        type: 'multiple-choice',
        question: '🐱 If Mr. Fluffbutt takes three 15-minute naps during each visit, how many hours does he nap in a 5-day week? 😺',
        options: ['2 hours', '2.5 hours', '3 hours', '3.75 hours'],
        answer: '3.75 hours',
        explanation: '😴 (15 minutes × 3 naps × 5 days) ÷ 60 = 3.75 hours of beauty rest! 🌙'
      }
    ]
  }
}

// Chapter 2 Data
const chapter2: ChapterData = {
  id: 'chapter2',
  title: 'Are You Smarter than Mr. Fluffbutt?',
  subtitle: 'A Big Three Dollar Gamble',
  readStoryLink: '/stories/chapter2',
  theme: themes.chapter2,
  questions: {
    age4to5: [
      {
        id: 'c2.1.1',
        type: 'multiple-choice',
        question: '🐱 How much money does Hudson start with today? 💰',
        options: ['$5', '$10', '$15', '$20'],
        answer: '$10',
        explanation: '🌟 Hudson starts with $10 in his pocket! Purr-fect counting! 🐾'
      },
      {
        id: 'c2.1.2',
        type: 'multiple-choice',
        question: '📝 How much do the flyers cost Hudson? 💵',
        options: ['$2', '$3', '$4', '$5'],
        answer: '$3',
        explanation: '💰 The flyers cost $3! Good remembering! ⭐'
      },
      {
        id: 'c2.1.3',
        type: 'multiple-choice',
        question: '🐱 How much does Mr. Fluffbutt pay Hudson each day? 💰',
        options: ['$5', '$10', '$15', '$20'],
        answer: '$10',
        explanation: '👑 $10 for the honor of my royal presence! Purr-fect! ⭐'
      },
      {
        id: 'c2.1.4',
        type: 'multiple-choice',
        question: '🐜 How much does Hudson make watching the ant farm each day? 💵',
        options: ['$3', '$4', '$5', '$6'],
        answer: '$5',
        explanation: '🌟 $5 for watching those tiny creatures! Good job! 🐾'
      },
      {
        id: 'c2.1.5',
        type: 'multiple-choice',
        question: '📅 How many days does Hudson watch Mr. Fluffbutt? ⏰',
        options: ['3 days', '4 days', '5 days', '6 days'],
        answer: '5 days',
        explanation: '😺 5 wonderful days with me! Nice counting! ⭐'
      },
      {
        id: 'c2.1.6',
        type: 'multiple-choice',
        question: '🐜 How many days does Hudson watch the ant farm? ⏰',
        options: ['2 days', '3 days', '4 days', '5 days'],
        answer: '3 days',
        explanation: '🌟 3 days of ant-watching! Well counted! 💫'
      },
      {
        id: 'c2.1.7',
        type: 'multiple-choice',
        question: '💰 Who pays Hudson more each day - Mr. Fluffbutt or the ant farm? 🤔',
        options: ['Mr. Fluffbutt', 'Ant farm', 'Same amount', 'Neither one'],
        answer: 'Mr. Fluffbutt',
        explanation: '👑 Of course I pay more! I am royalty! ✨'
      },
      {
        id: 'c2.1.8',
        type: 'multiple-choice',
        question: '📝 What does Hudson buy to tell people about his pet sitting? 🤔',
        options: ['Books', 'Cards', 'Flyers', 'Signs'],
        answer: 'Flyers',
        explanation: '🌟 Hudson bought flyers to spread the word! Smart! 💫'
      },
      {
        id: 'c2.1.9',
        type: 'multiple-choice',
        question: '🐱 What animal does Hudson watch first? 💭',
        options: ['Dog', 'Cat', 'Bird', 'Ants'],
        answer: 'Cat',
        explanation: '😺 He watches me, Mr. Fluffbutt, first! Purr-fect! ⭐'
      },
      {
        id: 'c2.1.10',
        type: 'multiple-choice',
        question: '💰 Does Hudson make more money this week than last week? 🤔',
        options: ['Yes', 'No', 'Same amount', 'Not sure'],
        answer: 'Yes',
        explanation: '🌟 Yes! Hudson made more money this week! Way to go! 🎉'
      }
    ],
    age6to7: [
      {
        id: 'c2.2.1',
        type: 'multiple-choice',
        question: '💰 If Mr. Fluffbutt pays $10 per day for 5 days, how much money does Hudson earn? 🐱',
        options: ['$40', '$50', '$60', '$70'],
        answer: '$50',
        explanation: '🧮 $10 × 5 days = $50! Purr-fect multiplication! ⭐'
      },
      {
        id: 'c2.2.2',
        type: 'multiple-choice',
        question: '🐜 If the ant farm pays $5 per day for 3 days, how much money is that? 💵',
        options: ['$10', '$15', '$20', '$25'],
        answer: '$15',
        explanation: '💰 $5 × 3 days = $15! Great calculating! 🌟'
      },
      {
        id: 'c2.2.3',
        type: 'multiple-choice',
        question: '📊 How much money does Hudson make from both jobs together? 💰',
        options: ['$55', '$65', '$75', '$85'],
        answer: '$65',
        explanation: '✨ $50 + $15 = $65! Excellent addition! 🎈'
      },
      {
        id: 'c2.2.4',
        type: 'multiple-choice',
        question: '💵 If Hudson starts with $10 and spends $3 on flyers, how much money is left? 📝',
        options: ['$5', '$7', '$9', '$11'],
        answer: '$7',
        explanation: '🧮 $10 - $3 = $7! Smart subtraction! 🌟'
      },
      {
        id: 'c2.2.5',
        type: 'multiple-choice',
        question: '⏰ If Hudson spends 1 hour at each job, how many hours does he work in 3 days? ⌛',
        options: ['3 hours', '4 hours', '5 hours', '6 hours'],
        answer: '6 hours',
        explanation: '⏱️ 1 hour × 2 jobs × 3 days = 6 hours! Time flies! 🕒'
      },
      {
        id: 'c2.2.6',
        type: 'multiple-choice',
        question: '🐱 How much more does Mr. Fluffbutt pay than the ant farm per day? 💰',
        options: ['$3', '$5', '$7', '$9'],
        answer: '$5',
        explanation: '💫 $10 - $5 = $5 more! Royal wages! 👑'
      },
      {
        id: 'c2.2.7',
        type: 'multiple-choice',
        question: '📊 What\'s Hudson\'s total money after paying for flyers? 💵',
        options: ['$62', '$65', '$67', '$70'],
        answer: '$62',
        explanation: '🎯 $65 - $3 = $62! Perfect calculation! 💫'
      },
      {
        id: 'c2.2.8',
        type: 'multiple-choice',
        question: '🕒 If Hudson works both jobs for 2 days, how much money does he make? 💰',
        options: ['$20', '$25', '$30', '$35'],
        answer: '$30',
        explanation: '🧮 ($10 + $5) × 2 days = $30! Great math! ⭐'
      },
      {
        id: 'c2.2.9',
        type: 'multiple-choice',
        question: '💵 How much does Hudson make in one day from both jobs? 🐱',
        options: ['$10', '$15', '$20', '$25'],
        answer: '$15',
        explanation: '💫 $10 + $5 = $15 per day! Nice addition! 🌟'
      },
      {
        id: 'c2.2.10',
        type: 'multiple-choice',
        question: '📈 How much money does Hudson have at the end of the week? 💰',
        options: ['$62', '$72', '$82', '$92'],
        answer: '$72',
        explanation: '🎯 $10 start + $62 profit = $72! Well done! 🌟'
      }
    ],
    age8to9: [
      {
        id: 'c2.3.1',
        type: 'multiple-choice',
        question: '💰 If Hudson makes $15 daily from both jobs, how much will he make in 2 weeks (working 5 days each week)? 📊',
        options: ['$120', '$150', '$180', '$200'],
        answer: '$150',
        explanation: '🧮 $15 × 5 days × 2 weeks = $150! Excellent multiplication! 🌟'
      },
      {
        id: 'c2.3.2',
        type: 'multiple-choice',
        question: '⏰ If Hudson spends 45 minutes at each job, how many total minutes does he work in one day? ⌛',
        options: ['45 minutes', '60 minutes', '90 minutes', '120 minutes'],
        answer: '90 minutes',
        explanation: '⏱️ 45 minutes × 2 jobs = 90 minutes! Time master! 🕒'
      },
      {
        id: 'c2.3.3',
        type: 'multiple-choice',
        question: '📊 If flyers cost $3 for 10 flyers, how many flyers can Hudson get for $9? 📝',
        options: ['20 flyers', '25 flyers', '30 flyers', '35 flyers'],
        answer: '30 flyers',
        explanation: '🎯 ($9 ÷ $3) × 10 = 30 flyers! Smart calculating! 📈'
      },
      {
        id: 'c2.3.4',
        type: 'multiple-choice',
        question: '💵 If Hudson saves $62 this week and $72 next week, what\'s his total savings? 💰',
        options: ['$124', '$134', '$144', '$154'],
        answer: '$134',
        explanation: '💫 $62 + $72 = $134! Adding like a pro! 🌟'
      },
      {
        id: 'c2.3.5',
        type: 'multiple-choice',
        question: '⏰ How many total hours does Hudson work in 5 days if he spends 2 hours each day? ⌛',
        options: ['8 hours', '10 hours', '12 hours', '14 hours'],
        answer: '10 hours',
        explanation: '🕒 2 hours × 5 days = 10 hours! Time flies! ⭐'
      },
      {
        id: 'c2.3.6',
        type: 'multiple-choice',
        question: '📈 If Hudson\'s expenses are $3 for flyers and $7 for supplies, what\'s his profit from $65 earnings? 💰',
        options: ['$45', '$50', '$55', '$60'],
        answer: '$55',
        explanation: '🧮 $65 - $3 - $7 = $55! Perfect profit calculation! 💫'
      },
      {
        id: 'c2.3.7',
        type: 'multiple-choice',
        question: '⏱️ If Hudson spends 30 minutes traveling between jobs each day, how many hours is that in 4 days? 🚶',
        options: ['1 hour', '2 hours', '3 hours', '4 hours'],
        answer: '2 hours',
        explanation: '🕒 30 minutes × 4 days = 120 minutes = 2 hours! ⭐'
      },
      {
        id: 'c2.3.8',
        type: 'multiple-choice',
        question: '💵 If Hudson makes $15 per day, how much will he make in 3 weeks (working Monday-Friday)? 💰',
        options: ['$185', '$215', '$225', '$235'],
        answer: '$225',
        explanation: '📊 $15 × 5 days × 3 weeks = $225! Multiplication master! 🌟'
      },
      {
        id: 'c2.3.9',
        type: 'multiple-choice',
        question: '📝 If each flyer takes 3 minutes to put up, how many minutes to put up 15 flyers? ⏰',
        options: ['35 minutes', '40 minutes', '45 minutes', '50 minutes'],
        answer: '45 minutes',
        explanation: '⌛ 3 minutes × 15 flyers = 45 minutes! Time management! 🕒'
      },
      {
        id: 'c2.3.10',
        type: 'multiple-choice',
        question: '🧮 If Hudson makes $15 per day for 3 days, then $10 for 2 days, what\'s his total for the week? 💰',
        options: ['$55', '$65', '$75', '$85'],
        answer: '$65',
        explanation: '💫 ($15 × 3) + ($10 × 2) = $45 + $20 = $65! Complex calculation master! 🌟'
      }
    ]
  }
}

// Chapter 3 Data
const chapter3: ChapterData = {
  id: 'chapter3',
  title: 'Are You Smarter than Mr. Fluffbutt?',
  subtitle: 'Let It Roll',
  readStoryLink: '/stories/chapter3',
  theme: themes.chapter3,
  questions: {
    age4to5: [
      {
        id: 'c3.1.1',
        type: 'multiple-choice',
        question: '🐱 If Hudson had $72 last week and spent $10 on supplies, how much money does he have at the start of this week? 💰',
        options: ['$52', '$62', '$72', '$82'],
        answer: '$62',
        explanation: '🌟 $72 - $10 = $62! Great subtraction! 🐾'
      },
      {
        id: 'c3.1.2',
        type: 'multiple-choice',
        question: '🦮 What kind of dog is Edie the furball? 🐕',
        options: ['Big scary dog', 'Small friendly dog', 'Medium quiet dog', 'Huge loud dog'],
        answer: 'Small friendly dog',
        explanation: '🐾 Edie is a small, friendly dog! Perfect for walking! 🌟'
      },
      {
        id: 'c3.1.3',
        type: 'multiple-choice',
        question: '🦜 What does Joseph do that makes Hudson need ear plugs? 🔊',
        options: ['Sings', 'Squawks', 'Whispers', 'Hums'],
        answer: 'Squawks',
        explanation: '🦜 That noisy bird squawks so loud! Ear plugs needed! 👂'
      },
      {
        id: 'c3.1.4',
        type: 'multiple-choice',
        question: '🕷️ What does the tarantula eat? 🐜',
        options: ['Cat food', 'Bird food', 'Crickets', 'Seeds'],
        answer: 'Crickets',
        explanation: '🕷️ The spider eats crickets! Creepy but true! 🐜'
      },
      {
        id: 'c3.1.5',
        type: 'multiple-choice',
        question: '📝 What does Hudson buy to tell people about his pet sitting? 🤔',
        options: ['Books', 'Cards', 'Flyers', 'Signs'],
        answer: 'Flyers',
        explanation: '📄 Hudson uses flyers to find new pets to watch! Smart! 🌟'
      },
      {
        id: 'c3.1.6',
        type: 'multiple-choice',
        question: '🐱 Does Mr. Fluffbutt still let Hudson watch him? 😺',
        options: ['Yes', 'No', 'Maybe', 'Not sure'],
        answer: 'Yes',
        explanation: '😺 Yes, Mr. Fluffbutt still graces Hudson with his presence! 👑'
      },
      {
        id: 'c3.1.7',
        type: 'multiple-choice',
        question: '💰 How much money did Hudson spend on flyers? 💵',
        options: ['$8', '$10', '$12', '$14'],
        answer: '$12',
        explanation: '🛍️ Hudson spent $12 on those paper things! 📝'
      },
      {
        id: 'c3.1.8',
        type: 'multiple-choice',
        question: '💵 How much money did Hudson make from Mr. Fluffbutt? 🐱',
        options: ['$5', '$10', '$15', '$20'],
        answer: '$10',
        explanation: '💰 Mr. Fluffbutt let Hudson earn $10! Royal payment! 👑'
      },
      {
        id: 'c3.1.9',
        type: 'multiple-choice',
        question: '🤔 Did Hudson make more money than he spent this week? 💭',
        options: ['Yes', 'No', 'Same amount', 'Not sure'],
        answer: 'No',
        explanation: '📉 Spent $12 but made $10 - that\'s less! Learning time! 💫'
      },
      {
        id: 'c3.1.10',
        type: 'multiple-choice',
        question: '💰 How much money does Hudson have at the end? 🎯',
        options: ['$50', '$55', '$60', '$65'],
        answer: '$60',
        explanation: '🌟 $62 - $12 + $10 = $60! Good counting! 🐾'
      }
    ],
    age6to7: [
      {
        id: 'c3.2.1',
        type: 'multiple-choice',
        question: '🐱 If Hudson had $72 last week and spent $10 on supplies, how much money does he have at the start of this week? 💰',
        options: ['$52', '$62', '$72', '$82'],
        answer: '$62',
        explanation: '🌟 $72 - $10 = $62! Great subtraction! 🐾'
      },
      {
        id: 'c3.2.2',
        type: 'multiple-choice',
        question: '🦮 If Edie needs walking every day, how many walks in 5 days? 📅',
        options: ['3 walks', '4 walks', '5 walks', '6 walks'],
        answer: '5 walks',
        explanation: '🐕 One walk each day for 5 days = 5 walks! Nice counting! 🌟'
      },
      {
        id: 'c3.2.3',
        type: 'multiple-choice',
        question: '🦜 If Joseph gets fed twice a day, how many feedings in 3 days? 🍽️',
        options: ['3 times', '4 times', '5 times', '6 times'],
        answer: '6 times',
        explanation: '🦜 2 feedings × 3 days = 6 feedings! Good multiplication! ⭐'
      },
      {
        id: 'c3.2.4',
        type: 'multiple-choice',
        question: '⏰ If each animal visit takes 30 minutes, how long for 2 animals? ⌛',
        options: ['30 minutes', '45 minutes', '60 minutes', '90 minutes'],
        answer: '60 minutes',
        explanation: '🕒 30 minutes × 2 = 60 minutes! Time master! ⭐'
      },
      {
        id: 'c3.2.5',
        type: 'multiple-choice',
        question: '🛍️ If ear plugs cost $5 and bandaids cost $7, how much together? 💵',
        options: ['$10', '$12', '$13', '$15'],
        answer: '$12',
        explanation: '💰 $5 + $7 = $12! Good addition! 🌟'
      },
      {
        id: 'c3.2.6',
        type: 'multiple-choice',
        question: '🐱 How many days does Hudson watch Mr. Fluffbutt this week? 📅',
        options: ['1 day', '2 days', '3 days', '4 days'],
        answer: '2 days',
        explanation: '😺 Only 2 days with Mr. Fluffbutt this week! 🐱'
      },
      {
        id: 'c3.2.7',
        type: 'multiple-choice',
        question: '💰 How much did Hudson spend on supplies this week? 💵',
        options: ['$8', '$10', '$12', '$14'],
        answer: '$12',
        explanation: '🛍️ Spent $12 on new flyers! Good tracking! 📝'
      },
      {
        id: 'c3.2.8',
        type: 'multiple-choice',
        question: '💵 How much money did Hudson earn this week? 💰',
        options: ['$5', '$10', '$15', '$20'],
        answer: '$10',
        explanation: '🐱 Made $10 from Mr. Fluffbutt! Keep counting! ⭐'
      },
      {
        id: 'c3.2.9',
        type: 'multiple-choice',
        question: '📊 What\'s Hudson\'s profit or loss this week? 💵',
        options: ['+$2', '$0', '-$2', '-$4'],
        answer: '-$2',
        explanation: '💫 Spent $12, made $10, that\'s a $2 loss! Learning about profit! 📈'
      },
      {
        id: 'c3.2.10',
        type: 'multiple-choice',
        question: '💰 Starting with $62, spending $12, and making $10, how much does Hudson have now? 🎯',
        options: ['$50', '$55', '$60', '$65'],
        answer: '$60',
        explanation: '🧮 $62 - $12 + $10 = $60! Great calculating! ⭐'
      }
    ],
    age8to9: [
      {
        id: 'c3.3.1',
        type: 'multiple-choice',
        question: '💰 What is Hudson\'s starting balance this week? 📊',
        options: ['$52', '$62', '$72', '$82'],
        answer: '$62',
        explanation: '🌟 Starting balance is $62 from previous week! Perfect tracking! 💵'
      },
      {
        id: 'c3.3.2',
        type: 'multiple-choice',
        question: '⏰ If each animal visit takes 30 minutes and travel takes 15 minutes, how long for 3 animals? ⌛',
        options: ['90 mins', '105 mins', '120 mins', '135 mins'],
        answer: '120 mins',
        explanation: '🕒 (30 mins × 3 pets) + (15 mins travel × 2 trips between pets) = 90 + 30 = 120 minutes! Time pro! ⭐'
      },
      {
        id: 'c3.3.3',
        type: 'multiple-choice',
        question: '📊 If flyers cost $12 and Hudson makes $5 per visit, how many visits to break even? 💵',
        options: ['2 visits', '3 visits', '4 visits', '5 visits'],
        answer: '3 visits',
        explanation: '🧮 $12 ÷ $5 = 2.4 visits, so need 3 visits! Smart business! 📈'
      },
      {
        id: 'c3.3.4',
        type: 'multiple-choice',
        question: '⏱️ How many hours in a week if Hudson spends 2 hours daily with animals? 🕒',
        options: ['8 hours', '10 hours', '12 hours', '14 hours'],
        answer: '10 hours',
        explanation: '⏰ 2 hours × 5 days = 10 hours! Time calculation master! ⌛'
      },
      {
        id: 'c3.3.5',
        type: 'multiple-choice',
        question: '💵 If Hudson charges $5 per visit and does 3 visits daily, what\'s his potential daily revenue? 💰',
        options: ['$10', '$15', '$20', '$25'],
        answer: '$15',
        explanation: '💫 $5 × 3 visits = $15 potential daily revenue! 📊'
      },
      {
        id: 'c3.3.6',
        type: 'multiple-choice',
        question: '🐱 If Mr. Fluffbutt pays $5 per visit and Hudson visits twice, what\'s his actual revenue? 💰',
        options: ['$5', '$10', '$15', '$20'],
        answer: '$10',
        explanation: '💵 $5 × 2 visits = $10 actual revenue! Keep tracking! ⭐'
      },
      {
        id: 'c3.3.7',
        type: 'multiple-choice',
        question: '💰 What are Hudson\'s total expenses this week? 📊',
        options: ['$8', '$10', '$12', '$14'],
        answer: '$12',
        explanation: '🛍️ Total expenses = $12 for flyers! Expense tracking! 💵'
      },
      {
        id: 'c3.3.8',
        type: 'multiple-choice',
        question: '💵 What is Hudson\'s total revenue this chapter? 💰',
        options: ['$5', '$10', '$15', '$20'],
        answer: '$10',
        explanation: '📈 Total revenue = $10 from Mr. Fluffbutt! Revenue tracking! 🌟'
      },
      {
        id: 'c3.3.9',
        type: 'multiple-choice',
        question: '📊 Calculate Hudson\'s net profit or loss this chapter (Revenue - Expenses): 💵',
        options: ['+$2', '$0', '-$2', '-$4'],
        answer: '-$2',
        explanation: '🧮 $10 revenue - $12 expenses = -$2 net loss! Business math! 📈'
      },
      {
        id: 'c3.3.10',
        type: 'multiple-choice',
        question: '💰 Calculate Hudson\'s final balance: Starting $62 + Revenue $10 - Expenses $12 = ? 🎯',
        options: ['$50', '$55', '$60', '$65'],
        answer: '$60',
        explanation: '📊 $62 + $10 - $12 = $60! Final balance mastery! 💫'
      }
    ]
  }
}

// Chapter 4 Data
const chapter4: ChapterData = {
  id: 'chapter4',
  title: 'Are You Smarter than Mr. Fluffbutt?',
  subtitle: 'The Worst Week Ever',
  readStoryLink: '/stories/chapter4',
  theme: themes.chapter4,
  questions: {
    age4to5: [
      {
        id: 'c4.1.1',
        type: 'multiple-choice',
        question: '🐱 Hudson starts with $60. His mom gives him $5 for cleaning. How much now? 💰',
        options: ['$55', '$60', '$65', '$70'],
        answer: '$65',
        explanation: '🌟 $60 + $5 = $65! Good adding! 🐾'
      },
      {
        id: 'c4.1.2',
        type: 'multiple-choice',
        question: '🦮 What kind of dog is Drew-bo? 🐕',
        options: ['Husky that listens', 'Husky that doesn\'t listen', 'Small quiet dog', 'Big friendly dog'],
        answer: 'Husky that doesn\'t listen',
        explanation: '🐾 Drew-bo is a husky who has a mind of his own and doesn\'t like to listen! 🌟'
      },
      {
        id: 'c4.1.3',
        type: 'multiple-choice',
        question: '🦜 What does Joseph do that\'s noisy? 🔊',
        options: ['Barks', 'Meows', 'Squawks', 'Whispers'],
        answer: 'Squawks',
        explanation: '🦜 Joseph squawks very loud! Ear plugs needed! 👂'
      },
      {
        id: 'c4.1.4',
        type: 'multiple-choice',
        question: '🐕 What happens when Drew-boo sees a squirrel? 🐿️',
        options: ['Sits quietly', 'Runs away', 'Pulls on leash', 'Takes a nap'],
        answer: 'Pulls on leash',
        explanation: '🌟 Drew-bo pulls on the leash when he sees squirrels! Strong husky! 🐾'
      },
      {
        id: 'c4.1.5',
        type: 'multiple-choice',
        question: '🛍️ What does Hudson buy for his ears? 🦻',
        options: ['Hat', 'Ear plugs', 'Headphones', 'Nothing'],
        answer: 'Ear plugs',
        explanation: '👂 Ear plugs to block Joseph\'s squawking! Smart! ✨'
      },
      {
        id: 'c4.1.6',
        type: 'multiple-choice',
        question: '🎒 What does Hudson carry his supplies in? 👜',
        options: ['Box', 'Bag', 'Backpack', 'Basket'],
        answer: 'Backpack',
        explanation: '🎒 A big backpack for all his pet stuff! Perfect! 💫'
      },
      {
        id: 'c4.1.7',
        type: 'multiple-choice',
        question: '💰 Hudson bought: Bandaids $10, Ear plugs $5, Scoop $30, Cream $20, Backpack $50. Total spent? 💵',
        options: ['$105', '$110', '$115', '$120'],
        answer: '$115',
        explanation: '🛍️ Adding everything = $115! Good counting! 📝'
      },
      {
        id: 'c4.1.8',
        type: 'multiple-choice',
        question: '💵 Hudson made: $25 walking dogs, $80 other pets. Total earned? 🐾',
        options: ['$95', '$100', '$105', '$110'],
        answer: '$105',
        explanation: '💰 $25 + $80 = $105! Nice adding! ⭐'
      },
      {
        id: 'c4.1.9',
        type: 'multiple-choice',
        question: '🤔 Made $105, spent $115. Did Hudson make or lose money? 💭',
        options: ['Made money', 'Lost money', 'Same money', 'Not sure'],
        answer: 'Lost money',
        explanation: '📉 Spent more than he made! Lost $10! 💫'
      },
      {
        id: 'c4.1.10',
        type: 'multiple-choice',
        question: '💰 Started with $60, lost $10. How much money now? 🎯',
        options: ['$40', '$45', '$50', '$55'],
        answer: '$50',
        explanation: '🌟 $60 - $10 = $50! Good subtraction! 🐾'
      }
    ],
    age6to7: [
      {
        id: 'c4.2.1',
        type: 'multiple-choice',
        question: '🐱 Hudson starts with $60. Made $5 from chores. What\'s his total? 💰',
        options: ['$55', '$60', '$65', '$70'],
        answer: '$65',
        explanation: '🌟 $60 + $5 = $65! Great addition! 🐾'
      },
      {
        id: 'c4.2.2',
        type: 'multiple-choice',
        question: '🦮 If Drew-boo needs walking twice daily, how many walks in 3 days? 📅',
        options: ['3 walks', '4 walks', '6 walks', '8 walks'],
        answer: '6 walks',
        explanation: '🐕 2 walks × 3 days = 6 walks! Nice counting! 🌟'
      },
      {
        id: 'c4.2.3',
        type: 'multiple-choice',
        question: '🦮 What happens when Drew-bo sees a squirrel on their walk? 🐿️',
        options: ['Sits quietly', 'Takes a nap', 'Pulls on the leash', 'Runs away'],
        answer: 'Pulls on the leash',
        explanation: '🐕 Drew-bo gets excited and pulls on the leash when he spots squirrels! Strong husky! 🌟'
      },
      {
        id: 'c4.2.4',
        type: 'multiple-choice',
        question: '⏰ If each pet visit takes 30 minutes, how long for 2 pets? ⌛',
        options: ['30 minutes', '45 minutes', '60 minutes', '90 minutes'],
        answer: '60 minutes',
        explanation: '🕒 30 minutes × 2 = 60 minutes! Time master! ⭐'
      },
      {
        id: 'c4.2.5',
        type: 'multiple-choice',
        question: '🦜 What happened when Hudson tried to feed Joseph the bird? 🤔',
        options: ['Joseph sang to him', 'Joseph bit him', 'Joseph flew away', 'Joseph slept'],
        answer: 'Joseph bit him',
        explanation: '🦜 Ouch! Joseph wasn\'t very friendly and bit Hudson during feeding time! 🤕'
      },
      {
        id: 'c4.2.6',
        type: 'multiple-choice',
        question: '🐱 Who might be Hudson\'s new favorite pet? (Though obviously not as amazing as me!) 😺',
        options: ['Edie the bichon', 'Joseph the bird', 'The quiet ant farm', 'Mr. Fluffbutt forever'],
        answer: 'Edie the bichon',
        explanation: '😾 As much as it pains me to admit, Hudson seems quite taken with that fluffy Edie... though I\'m still clearly the most sophisticated! 👑'
      },
      {
        id: 'c4.2.7',
        type: 'multiple-choice',
        question: '💰 Supplies cost: Bandaids $10, Plugs $5, Scoop $30, Cream $20, Pack $50. Total? 💵',
        options: ['$105', '$110', '$115', '$120'],
        answer: '$115',
        explanation: '🛍️ All supplies = $115! Good adding! 📝'
      },
      {
        id: 'c4.2.8',
        type: 'multiple-choice',
        question: '💵 Earnings: Dog walks $25, Pet care $80. Total made? 🐾',
        options: ['$95', '$100', '$105', '$110'],
        answer: '$105',
        explanation: '💰 $25 + $80 = $105! Nice math! ⭐'
      },
      {
        id: 'c4.2.9',
        type: 'multiple-choice',
        question: '🤔 Earned $105, spent $115. What\'s the difference? 💭',
        options: ['-$5', '-$10', '-$15', '-$20'],
        answer: '-$10',
        explanation: '📉 $105 - $115 = -$10! Good subtraction! 💫'
      },
      {
        id: 'c4.2.10',
        type: 'multiple-choice',
        question: '💰 Had $60, lost $10. Final amount? 🎯',
        options: ['$40', '$45', '$50', '$55'],
        answer: '$50',
        explanation: '🌟 $60 - $10 = $50! Perfect math! 🐾'
      }
    ],
    age8to9: [
      {
        id: 'c4.3.1',
        type: 'multiple-choice',
        question: '🐱 Starting cash $60, chore money $5, allowance $10. Total? 💰',
        options: ['$70', '$75', '$80', '$85'],
        answer: '$75',
        explanation: '🌟 $60 + $5 + $10 = $75! Great addition! 🐾'
      },
      {
        id: 'c4.3.2',
        type: 'multiple-choice',
        question: '⏰ Hudson spends 30 minutes with each pet and needs 15 minutes to travel between pets. For 3 pets in a row, how much total time does he need? ⌛',
        options: ['90 mins', '105 mins', '120 mins', '135 mins'],
        answer: '120 mins',
        explanation: '🕒 Let\'s break it down: (30 mins × 3 pets) + (15 mins travel × 2 trips between pets) = 90 + 30 = 120 minutes! Time pro! ⭐'
      },
      {
        id: 'c4.3.3',
        type: 'multiple-choice',
        question: '🦜 If Hudson charges $5 each time he feeds Joseph the bird, and feeds him twice daily for 5 business days, how much money will Hudson earn? 💵',
        options: ['$30', '$40', '$50', '$60'],
        answer: '$50',
        explanation: '💰 $5 per feeding × 2 feedings per day × 5 days = $50 total earnings! Great multiplication! 🦜'
      },
      {
        id: 'c4.3.4',
        type: 'multiple-choice',
        question: '📊 If supplies cost $115, how many $5 walks to break even? 🚶',
        options: ['20 walks', '23 walks', '25 walks', '27 walks'],
        answer: '23 walks',
        explanation: '🧮 $115 ÷ $5 = 23 walks! Smart business math! 📈'
      },
      {
        id: 'c4.3.5',
        type: 'multiple-choice',
        question: '💵 Daily rate for 2 dog walks ($5 each) plus 1 feeding ($10)? 💰',
        options: ['$15', '$20', '$25', '$30'],
        answer: '$20',
        explanation: '💫 ($5 × 2) + $10 = $20! Perfect calculation! ⭐'
      },
      {
        id: 'c4.3.6',
        type: 'multiple-choice',
        question: '🐾 How many total pet visits in 4 days with 3 pets daily? 📅',
        options: ['9 visits', '10 visits', '12 visits', '15 visits'],
        answer: '12 visits',
        explanation: '🔢 3 pets × 4 days = 12 visits! Good multiplication! 🌟'
      },
      {
        id: 'c4.3.7',
        type: 'multiple-choice',
        question: '💰 Expenses: First aid $30, Tools $35, Pack $50. Total spent? 💵',
        options: ['$105', '$110', '$115', '$120'],
        answer: '$115',
        explanation: '🛍️ $30 + $35 + $50 = $115! Expert adding! 📝'
      },
      {
        id: 'c4.3.8',
        type: 'multiple-choice',
        question: '💵 Revenue: Walks $25, Feeding $40, Sitting $40. Total earned? 🐾',
        options: ['$95', '$100', '$105', '$110'],
        answer: '$105',
        explanation: '💰 $25 + $40 + $40 = $105! Revenue master! ⭐'
      },
      {
        id: 'c4.3.9',
        type: 'multiple-choice',
        question: '📊 Revenue $105, Expenses $115. Net profit/loss? 💵',
        options: ['-$5', '-$10', '-$15', '-$20'],
        answer: '-$10',
        explanation: '📉 $105 - $115 = -$10! Business accounting! 💫'
      },
      {
        id: 'c4.3.10',
        type: 'multiple-choice',
        question: '💰 Starting $60, Net loss $10. Final balance? 🎯',
        options: ['$40', '$45', '$50', '$55'],
        answer: '$50',
        explanation: '📊 $60 - $10 = $50! Final balance expert! 🌟'
      }
    ]
  }
}

// Chapter 5 Data
const chapter5: ChapterData = {
  id: 'chapter5',
  title: 'Are You Smarter than Mr. Fluffbutt?',
  subtitle: 'A New Business Strategy',
  readStoryLink: '/stories/chapter5',
  theme: themes.chapter5,
  questions: {
    age4to5: [
      {
        id: 'c5.1.1',
        type: 'multiple-choice',
        question: '🐱 Why is Hudson sad at the start of this chapter? 😢',
        options: ['Lost money last week', 'Crazy animals to care for', 'No bike yet', 'All of these reasons'],
        answer: 'All of these reasons',
        explanation: '🌟 Poor Hudson is dealing with all of these problems! 💫'
      },
      {
        id: 'c5.1.2',
        type: 'multiple-choice',
        question: '🐕 What is Hudson\'s new business plan? 🦮',
        options: ['Husky Walking Service', 'Snake Charmer', 'Parrot Soother', 'Small Dog Walker'],
        answer: 'Small Dog Walker',
        explanation: '🐾 Smart plan! Small dogs are just the right size! 🌟'
      },
      {
        id: 'c5.1.3',
        type: 'multiple-choice',
        question: '🦮 If Hudson makes $5 per dog, how much for walking 3 dogs? 💰',
        options: ['$10', '$15', '$20', '$25'],
        answer: '$15',
        explanation: '🧮 $5 × 3 dogs = $15! Good multiplication! ⭐'
      },
      {
        id: 'c5.1.4',
        type: 'multiple-choice',
        question: '🐕 Which makes more money: 3 small dogs or 1 big dog? 💵',
        options: ['Big dog ($5)', 'Small dogs ($15)', 'Same money', 'Not sure'],
        answer: 'Small dogs ($15)',
        explanation: '💰 3 small dogs at $5 each makes $15! Smart business! 🐾'
      },
      {
        id: 'c5.1.5',
        type: 'multiple-choice',
        question: '🦮 How many small dogs can Hudson walk at once? 🐕',
        options: ['1 dog', '2 dogs', '3 dogs', '4 dogs'],
        answer: '3 dogs',
        explanation: '✨ Hudson can handle 3 small dogs at once! 🌟'
      },
      {
        id: 'c5.1.6',
        type: 'multiple-choice',
        question: '🐕 If Hudson could walk 100 dogs at $5 each (which would be CRAZY!), how much money would that be? 🤪',
        options: ['$5 and a headache', '$50 and tangled leashes', '$500 and very tired legs', 'A million dog treats'],
        answer: '$500 and very tired legs',
        explanation: '🤣 $5 × 100 dogs = $500! But imagine the chaos - it would be like a furry parade with Hudson water-skiing behind them! 🌪️'
      },
      {
        id: 'c5.1.7',
        type: 'multiple-choice',
        question: '💰 How much did Hudson spend on flyers? 💵',
        options: ['$3', '$4', '$5', '$6'],
        answer: '$6',
        explanation: '🛍️ Spent $6 on new small-dog flyers! 📝'
      },
      {
        id: 'c5.1.8',
        type: 'multiple-choice',
        question: '💵 How much did Hudson make today? (Dogs $15, Fluffbutt $10, Feeding $10) 🐾',
        options: ['$25', '$30', '$35', '$40'],
        answer: '$35',
        explanation: '💰 $15 + $10 + $10 = $35! Great earnings! ⭐'
      },
      {
        id: 'c5.1.9',
        type: 'multiple-choice',
        question: '🤔 Made $35, spent $6. What\'s Hudson\'s profit? 💭',
        options: ['$25', '$29', '$31', '$35'],
        answer: '$29',
        explanation: '📈 $35 - $6 = $29 profit! Good business! 💫'
      },
      {
        id: 'c5.1.10',
        type: 'multiple-choice',
        question: '💰 Started with $50, made $29 more. Final amount? 🎯',
        options: ['$69', '$75', '$79', '$85'],
        answer: '$79',
        explanation: '🌟 $50 + $29 = $79! Excellent progress! 🐾'
      }
    ],
    age6to7: [
      {
        id: 'c5.2.1',
        type: 'multiple-choice',
        question: '🐱 Why does Hudson feel discouraged at the start? 😢',
        options: ['Lost money last week', 'Dealing with difficult pets', 'No bike yet', 'All of these reasons'],
        answer: 'All of these reasons',
        explanation: '🌟 Hudson is facing all these challenges! Keep going! 💫'
      },
      {
        id: 'c5.2.2',
        type: 'multiple-choice',
        question: '🐕 What\'s Hudson\'s smart new business idea? 🦮',
        options: ['Husky Walking Service', 'Snake Charmer', 'Parrot Soother', 'Small Dog Walker'],
        answer: 'Small Dog Walker',
        explanation: '🐾 Walking small dogs is perfect for a kid! Smart thinking! 🌟'
      },
      {
        id: 'c5.2.3',
        type: 'multiple-choice',
        question: '🦮 If Hudson makes $5 per dog and walks 4 dogs, how much money? 💰',
        options: ['$15', '$20', '$25', '$30'],
        answer: '$20',
        explanation: '🧮 $5 × 4 dogs = $20! Great multiplication! ⭐'
      },
      {
        id: 'c5.2.4',
        type: 'multiple-choice',
        question: '💵 Walking 3 small dogs ($15) or feeding Joseph ($5)? Which pays more? 🤔',
        options: ['Small dogs', 'Feeding Joseph', 'Same amount', 'Not sure'],
        answer: 'Small dogs',
        explanation: '💰 $15 > $5! Small dogs are better business! 📈'
      },
      {
        id: 'c5.2.5',
        type: 'multiple-choice',
        question: '🐕 If Hudson walks 5 small dogs at $5 each, how much money? 💵',
        options: ['$20', '$25', '$30', '$35'],
        answer: '$25',
        explanation: '🧮 $5 × 5 dogs = $25! Excellent math! ⭐'
      },
      {
        id: 'c5.2.6',
        type: 'multiple-choice',
        question: '🐕 If Hudson could walk 100 dogs at $5 each (which would be CRAZY!), how much money would that be? 🤪',
        options: ['$5 and a headache', '$50 and tangled leashes', '$500 and very tired legs', 'A million dog treats'],
        answer: '$500 and very tired legs',
        explanation: '🤣 $5 × 100 dogs = $500! But imagine the chaos - it would be like a furry parade with Hudson water-skiing behind them! 🌪️'
      },
      {
        id: 'c5.2.7',
        type: 'multiple-choice',
        question: '💰 How much did Hudson spend on flyers today? 💵',
        options: ['$3', '$4', '$5', '$6'],
        answer: '$6',
        explanation: '🛍️ $6 spent on new small-dog flyers! 📝'
      },
      {
        id: 'c5.2.8',
        type: 'multiple-choice',
        question: '💵 How much did Hudson earn? ($15 dogs + $10 Fluffbutt + $10 feeding) 🐾',
        options: ['$25', '$30', '$35', '$40'],
        answer: '$35',
        explanation: '💰 $15 + $10 + $10 = $35! Great earnings! ⭐'
      },
      {
        id: 'c5.2.9',
        type: 'multiple-choice',
        question: '🤔 Earned $35, spent $6 on flyers. What\'s the profit? 💭',
        options: ['$25', '$27', '$29', '$31'],
        answer: '$29',
        explanation: '📈 $35 - $6 = $29 profit! Good business! 💫'
      },
      {
        id: 'c5.2.10',
        type: 'multiple-choice',
        question: '💰 Started at $50, made $29 profit. Final total? 🎯',
        options: ['$69', '$75', '$79', '$85'],
        answer: '$79',
        explanation: '🌟 $50 + $29 = $79! Excellent progress! 🐾'
      }
    ],
    age8to9: [
      {
        id: 'c5.3.1',
        type: 'multiple-choice',
        question: '🐱 What are ALL the reasons Hudson feels discouraged? 😢',
        options: ['Money loss and no bike', 'Difficult pets and no bike', 'Money loss and hard pets', 'All three problems'],
        answer: 'All three problems',
        explanation: '🌟 Hudson faces financial loss, difficult pets, AND no bike yet! 💫'
      },
      {
        id: 'c5.3.2',
        type: 'multiple-choice',
        question: '🐕 Why is Hudson\'s new business plan smarter? 🦮',
        options: ['Less risky pets', 'Higher hourly rate', 'Multiple clients at once', 'All of these reasons'],
        answer: 'All of these reasons',
        explanation: '💡 Safer, more profitable, and efficient! Business genius! 📈'
      },
      {
        id: 'c5.3.3',
        type: 'multiple-choice',
        question: '💵 If Hudson charges $5 per dog and walks 6 dogs per hour, potential hourly rate? 💰',
        options: ['$20', '$25', '$30', '$35'],
        answer: '$30',
        explanation: '🧮 $5 × 6 dogs = $30 per hour! Great calculation! ⭐'
      },
      {
        id: 'c5.3.4',
        type: 'multiple-choice',
        question: '📊 Compare: 3 small dogs ($15) vs. feeding both birds ($10). Difference? 💵',
        options: ['$3', '$5', '$7', '$10'],
        answer: '$5',
        explanation: '💰 $15 - $10 = $5 more with dogs! Smart business! 📈'
      },
      {
        id: 'c5.3.5',
        type: 'multiple-choice',
        question: '🐕 If each small dog pays $5, how many dogs to match one hour with Fluffbutt ($10)? 🤔',
        options: ['1 dog', '2 dogs', '3 dogs', '4 dogs'],
        answer: '2 dogs',
        explanation: '🧮 $10 ÷ $5 = 2 dogs to match Fluffbutt\'s rate! 💫'
      },
      {
        id: 'c5.3.6',
        type: 'multiple-choice',
        question: '📋 What makes Hudson\'s new business plan better than last week\'s? 💡',
        options: ['Less expensive', 'Less dangerous', 'More profitable', 'All of these'],
        answer: 'All of these',
        explanation: '✨ Better in every way! Smart business planning! 📈'
      },
      {
        id: 'c5.3.7',
        type: 'multiple-choice',
        question: '💰 Total expenses this chapter (new flyers)? 💵',
        options: ['$3', '$4', '$5', '$6'],
        answer: '$6',
        explanation: '🛍️ $6 invested in new business flyers! 📝'
      },
      {
        id: 'c5.3.8',
        type: 'multiple-choice',
        question: '💵 Total revenue: Dog walking ($15) + Pet sitting ($10) + Feeding ($10)? 🐾',
        options: ['$30', '$35', '$40', '$45'],
        answer: '$35',
        explanation: '💰 $15 + $10 + $10 = $35 total revenue! ⭐'
      },
      {
        id: 'c5.3.9',
        type: 'multiple-choice',
        question: '📊 Calculate net profit: Revenue $35 - Expenses $6 = ? 💭',
        options: ['$27', '$29', '$31', '$33'],
        answer: '$29',
        explanation: '📈 $35 - $6 = $29 net profit! Business math! 💫'
      },
      {
        id: 'c5.3.10',
        type: 'multiple-choice',
        question: '💰 Calculate final balance: Starting $50 + Profit $29 = ? 🎯',
        options: ['$69', '$75', '$79', '$85'],
        answer: '$79',
        explanation: '📊 $50 + $29 = $79! Excellent progress! 🐾'
      }
    ]
  }
}

// Chapter 6 Data
const chapter6: ChapterData = {
  id: 'chapter6',
  title: 'Are You Smarter than Mr. Fluffbutt?',
  subtitle: 'What\'s an Employee?',
  readStoryLink: '/stories/chapter6',
  theme: themes.chapter6,
  questions: {
    age4to5: [
      {
        id: 'c6.1.1',
        type: 'multiple-choice',
        question: '🐱 What kind of dogs did Mrs. Chen have? 🐕',
        options: ['Corgis', 'Poodles', 'Bulldogs', 'Huskies'],
        answer: 'Corgis',
        explanation: '🌟 That\'s right! Mrs. Chen had four adorable corgi dogs! 🐾'
      },
      {
        id: 'c6.1.2',
        type: 'multiple-choice',
        question: '🐱 How many corgi dogs did Mrs. Chen have? 🐕',
        options: ['4', '2', '3', '5'],
        answer: '4',
        explanation: '🌟 Purr-fect counting! Mrs. Chen had 4 corgis: Dumpling, Noodle, Bao, and Mochi! 🐾'
      },
      {
        id: 'c6.1.3',
        type: 'multiple-choice',
        question: '🐱 Who helped Hudson by walking the corgis? 🚶',
        options: ['Jimmy', 'Mom', 'Dad', 'Mrs. Chen'],
        answer: 'Jimmy',
        explanation: '🌟 Yes! Jimmy helped Hudson by walking the corgis after school! 🐾'
      },
      {
        id: 'c6.1.4',
        type: 'multiple-choice',
        question: '🐱 What did Hudson learn was easier to walk? 🐕',
        options: ['Small dogs', 'Big dogs', 'Cats', 'Birds'],
        answer: 'Small dogs',
        explanation: '🌟 That\'s right! Hudson learned that small dogs were easier to walk! 🐾'
      },
      {
        id: 'c6.1.5',
        type: 'multiple-choice',
        question: '🐱 What is Joseph in the story? 🦜',
        options: ['A cockatoo', 'A dog', 'A cat', 'A fish'],
        answer: 'A cockatoo',
        explanation: '🌟 Purr-fect! Joseph is the cockatoo that Hudson takes care of! 🐾'
      },
      {
        id: 'c6.1.6',
        type: 'multiple-choice',
        question: '🐱 What did Hudson have to pay for this week? 💰',
        options: ['Jimmy\'s help', 'Dog food', 'New leashes', 'Pet toys'],
        answer: 'Jimmy\'s help',
        explanation: '🌟 That\'s right! Hudson had to pay Jimmy for helping walk the corgi dogs! 🐾'
      },
      {
        id: 'c6.1.7',
        type: 'multiple-choice',
        question: '🐱 If the corgi walks made $80 total and Hudson split it evenly with Jimmy, how much did Jimmy get? 💰',
        options: ['$40', '$20', '$60', '$80'],
        answer: '$40',
        explanation: '🌟 That\'s right! Since they split $80 evenly, Jimmy got half, which is $40! 🐾'
      },
      {
        id: 'c6.1.8',
        type: 'multiple-choice',
        question: '🐱 Hudson made $200 from walking dogs and $20 from feeding pets. How much money did he make in total? 💰',
        options: ['$220', '$200', '$180', '$240'],
        answer: '$220',
        explanation: '🌟 That\'s right! $200 + $20 = $220 total earnings! 🐾'
      },
      {
        id: 'c6.1.9',
        type: 'multiple-choice',
        question: '🐱 Hudson made $220 this week and paid Jimmy $40 for helping with the corgis. How much profit did Hudson keep? 💰',
        options: ['$180', '$160', '$200', '$140'],
        answer: '$180',
        explanation: '🌟 Purr-fect! When we subtract Jimmy\'s payment ($40) from Hudson\'s total earnings ($220), Hudson kept $180 as profit! 🐾'
      },
      {
        id: 'c6.1.10',
        type: 'multiple-choice',
        question: '🐱 Hudson started with $79 and made $180 in profit this week. How much money does he have now? 💰',
        options: ['$259', '$239', '$249', '$269'],
        answer: '$259',
        explanation: '🌟 Me-WOW! When we add Hudson\'s starting money ($79) to his profit ($180), he now has $259 in total! That\'s a lot of savings! 🐾'
      }
    ],
    age6to7: [
      {
        id: 'c6.2.1',
        type: 'multiple-choice',
        question: '🐱 What did Mrs. Chen\'s neighbor ask Jimmy for? 💼',
        options: ['His business card', 'His phone number', 'His address', 'His email'],
        answer: 'His business card',
        explanation: '🌟 That\'s right! The neighbor was so impressed with Jimmy\'s dog walking that they asked for his card! 🐾'
      },
      {
        id: 'c6.2.2',
        type: 'multiple-choice',
        question: '🐱 What time did Hudson need to be at Mr. Fluff Butt\'s house? ⏰',
        options: ['3:30', '3:00', '4:00', '2:30'],
        answer: '3:30',
        explanation: '🌟 Exactly! Hudson had to be at Mr. Fluff Butt\'s house at 3:30, which is why he couldn\'t walk the corgis! 🐾'
      },
      {
        id: 'c6.2.3',
        type: 'multiple-choice',
        question: '🐱 If Mrs. Chen paid $20 per day, and Jimmy and Hudson split the money evenly, how much did each person get per day? 💰',
        options: ['$10', '$20', '$15', '$5'],
        answer: '$10',
        explanation: '🌟 Purr-fect math! $20 ÷ 2 = $10 each per day! 🐾'
      },
      {
        id: 'c6.2.4',
        type: 'multiple-choice',
        question: '🐱 How much did Hudson earn each day from walking Edie, Midnight, and Riley? 💰',
        options: ['$15', '$20', '$10', '$25'],
        answer: '$15',
        explanation: '🌟 Great math! Hudson made $60 over 4 days, so $60 ÷ 4 = $15 per day! 🐾'
      },
      {
        id: 'c6.2.5',
        type: 'multiple-choice',
        question: '🐱 If Hudson made $40 from Mr. Fluff Butt in 4 days, how much did he make per visit? 💰',
        options: ['$10', '$15', '$20', '$5'],
        answer: '$10',
        explanation: '🌟 Perfect calculation! $40 ÷ 4 days = $10 per visit to Mr. Fluff Butt! 🐾'
      },
      {
        id: 'c6.2.6',
        type: 'multiple-choice',
        question: '🐱 What was Hudson\'s biggest business expense this week? 💰',
        options: ['Paying Jimmy', 'Buying pet food', 'New leashes', 'Pet toys'],
        answer: 'Paying Jimmy',
        explanation: '🌟 That\'s right! Hudson\'s biggest (and only) expense was paying his employee Jimmy 🐾'
      },
      {
        id: 'c6.2.7',
        type: 'multiple-choice',
        question: '🐱 How much money did Jimmy earn each day from walking the corgis? 💰',
        options: ['$20', '$10', '$15', '$25'],
        answer: '$20',
        explanation: '🌟 Perfect! Jimmy got $80 for 4 days of walking, so that\'s $20 each day! 🐾'
      },
      {
        id: 'c6.2.8',
        type: 'multiple-choice',
        question: '🐱 Calculate Hudson\'s total revenue: Mr. Fluff Butt ($40) + Three dogs ($60) + Corgi crew ($80) + Bird and spider ($40) = ? 💰',
        options: ['$220', '$200', '$180', '$240'],
        answer: '$220',
        explanation: '🌟 Great math! Adding all revenue streams: $40 + $60 + $80 + $40 = $220 total revenue! 🐾'
      },
      {
        id: 'c6.2.9',
        type: 'multiple-choice',
        question: '🐱 Hudson earned $220 this week and paid Jimmy $40. How much money did Hudson get to keep? 💰',
        options: ['$180', '$160', '$200', '$140'],
        answer: '$180',
        explanation: '🌟 Great math! When we subtract Jimmy\'s payment ($40) from the total earnings ($220), Hudson kept $180! 🐾'
      },
      {
        id: 'c6.2.10',
        type: 'multiple-choice',
        question: '🐱 Hudson started with $79 and added $180 in profit. How much money does he have now? 💰',
        options: ['$259', '$240', '$200', '$279'],
        answer: '$259',
        explanation: '🌟 Great adding! $79 + $180 = $259 total savings! 🐾'
      }
    ],
    age8to9: [
      {
        id: 'c6.3.1',
        type: 'multiple-choice',
        question: '📊 What business strategy did Hudson discover works best for his pet-sitting service?',
        options: ['Focusing on small dogs', 'Taking care of multiple pets at once', 'Walking large dogs', 'Only doing house visits'],
        answer: 'Focusing on small dogs',
        explanation: '🌟 Correct! Hudson learned that specializing in small dogs (finding his niche) was the most efficient business strategy! 📈'
      },
      {
        id: 'c6.3.2',
        type: 'multiple-choice',
        question: '💼 What business term did Mom use to describe Hudson\'s focus on small dogs?',
        options: ['Finding his niche', 'Market research', 'Business plan', 'Target market'],
        answer: 'Finding his niche',
        explanation: '🌟 Exactly! A niche is a specialized segment of the market that a business focuses on! 📊'
      },
      {
        id: 'c6.3.3',
        type: 'multiple-choice',
        question: '💰 If Hudson makes $10 from Mr. Fluff Butt and $5 from Joseph and Johnny combined each visit, how much does he make in total from all three pets per visit?',
        options: ['$15', '$20', '$12', '$18'],
        answer: '$15',
        explanation: '🌟 Correct! $10 + $5 = $15 total per visit! 📊'
      },
      {
        id: 'c6.3.4',
        type: 'multiple-choice',
        question: '📈 What was Hudson\'s average daily revenue from all his pet services this week? (Total revenue $220 divided by 4 days)',
        options: ['$55', '$45', '$50', '$60'],
        answer: '$55',
        explanation: '🌟 Right! $220 ÷ 4 days = $55 average daily revenue! 💰'
      },
      {
        id: 'c6.3.5',
        type: 'multiple-choice',
        question: '💼 What business relationship did Dad say Hudson and Jimmy had?',
        options: ['Employer-employee', 'Business partners', 'Contractors', 'Volunteers'],
        answer: 'Employer-employee',
        explanation: '🌟 Correct! When Hudson paid Jimmy to help with the business, Jimmy became Hudson\'s employee! 📊'
      },
      {
        id: 'c6.3.6',
        type: 'multiple-choice',
        question: '📊 What was Hudson\'s largest business expense this week, and how much was it?',
        options: ['Employee wages - $40', 'Pet supplies - $25', 'Marketing costs - $30', 'Transportation - $35'],
        answer: 'Employee wages - $40',
        explanation: '🌟 Correct! Hudson\'s biggest expense was paying Jimmy for walking the corgis! 💰'
      },
      {
        id: 'c6.3.7',
        type: 'multiple-choice',
        question: '💰 If the corgi-walking service earned $80 total and Jimmy received half, how much did Jimmy earn in total? 💵',
        options: ['$40', '$30', '$35', '$45'],
        answer: '$40',
        explanation: '🌟 Perfect! $80 ÷ 2 = $40 for Jimmy\'s total earnings! 📊'
      },
      {
        id: 'c6.3.8',
        type: 'multiple-choice',
        question: '💰 Total weekly revenue: Mr. Fluff Butt ($40) + Dogs ($60) + Corgis ($80) + Pets ($40) = ? 📈',
        options: ['$220', '$200', '$240', '$180'],
        answer: '$220',
        explanation: '🌟 $40 + $60 + $80 + $40 = $220 total revenue! 💰'
      },
      {
        id: 'c6.3.9',
        type: 'multiple-choice',
        question: '💼 Revenue $220, costs (Jimmy\'s wages) $40. Total profit? 💰',
        options: ['$180', '$160', '$200', '$140'],
        answer: '$180',
        explanation: '🌟 Revenue ($220) - Costs ($40) = Profit ($180)! 📊'
      },
      {
        id: 'c6.3.10',
        type: 'multiple-choice',
        question: '📊 If Hudson started with $79 and added $180 in profit, what is his new total savings?',
        options: ['$259', '$249', '$269', '$279'],
        answer: '$259',
        explanation: '🌟 Excellent! Starting money ($79) + Profit ($180) = Total savings ($259)! 💰'
      }
    ]
  }
}

// Chapter 7 Data
const chapter7: ChapterData = {
  id: 'chapter7',
  title: 'Are You Smarter than Mr. Fluffbutt?',
  subtitle: 'The Great Schedule Puzzle',
  readStoryLink: 'https://learnthroughstories.substack.com/',
  theme: themes.chapter7,
  questions: {
    age4to5: [
      {
        id: 'c7.1.1',
        type: 'multiple-choice',
        question: '🐱 Hudson has 3 pet visits in the morning and 2 pet visits in the afternoon. How many pet visits does he have in total? 🐾',
        options: ['5', '4', '6', '3'],
        answer: '5',
        explanation: '🌟 Purr-fect! 3 morning visits + 2 afternoon visits = 5 total pet visits! 🐾'
      },
      {
        id: 'c7.1.2',
        type: 'multiple-choice',
        question: '🐱 Hudson feeds 2 cats and 3 dogs. How many animals does he feed in total? 🐶',
        options: ['5', '4', '6', '3'],
        answer: '5',
        explanation: '🌟 That\'s right! 2 cats + 3 dogs = 5 animals in total! 🐾'
      },
      {
        id: 'c7.1.3',
        type: 'multiple-choice',
        question: '🐱 Hudson has 7 pet visits scheduled but 2 get canceled. How many visits does he have now? 📅',
        options: ['5', '4', '6', '3'],
        answer: '5',
        explanation: '🌟 Great job! 7 visits - 2 canceled visits = 5 visits remaining! 🐾'
      },
      {
        id: 'c7.1.4',
        type: 'multiple-choice',
        question: '🐱 Hudson spends 10 minutes with each pet. If he visits 4 pets, how many minutes does he spend in total? ⏰',
        options: ['40', '30', '50', '20'],
        answer: '40',
        explanation: '🌟 Purr-fect calculation! 10 minutes × 4 pets = 40 minutes total! ⏰'
      },
      {
        id: 'c7.1.5',
        type: 'multiple-choice',
        question: '🐱 Hudson has 8 treats. If he gives 2 treats to each dog, how many dogs can he give treats to? 🦴',
        options: ['4', '3', '5', '2'],
        answer: '4',
        explanation: '🌟 That\'s right! 8 treats ÷ 2 treats per dog = 4 dogs! 🐾'
      },
      {
        id: 'c7.1.6',
        type: 'multiple-choice',
        question: '🐱 Hudson walks 3 dogs in the morning and 3 dogs in the evening. How many dogs does he walk in total? 🐕',
        options: ['6', '5', '7', '4'],
        answer: '6',
        explanation: '🌟 Excellent! 3 dogs in the morning + 3 dogs in the evening = 6 dogs total! 🐾'
      },
      {
        id: 'c7.1.7',
        type: 'multiple-choice',
        question: '🐱 Hudson has 12 pet visits this week. If he does the same number each day for 4 days, how many visits does he do each day? 📆',
        options: ['3', '4', '2', '5'],
        answer: '3',
        explanation: '🌟 Purr-fect division! 12 visits ÷ 4 days = 3 visits each day! 🐾'
      },
      {
        id: 'c7.1.8',
        type: 'multiple-choice',
        question: '🐱 Hudson earns $5 for each pet visit. If he makes 3 visits, how much money does he earn? 💰',
        options: ['$15', '$10', '$20', '$25'],
        answer: '$15',
        explanation: '🌟 Great job! $5 per visit × 3 visits = $15 total! 💰'
      },
      {
        id: 'c7.1.9',
        type: 'multiple-choice',
        question: '🐱 Hudson needs to be at Mr. Fluffbutt\'s house at 3:00. It\'s 2:45 now. How many minutes until he needs to be there? ⏰',
        options: ['15', '10', '20', '30'],
        answer: '15',
        explanation: '🌟 Perfect timing! From 2:45 to 3:00 is 15 minutes! ⏰'
      },
      {
        id: 'c7.1.10',
        type: 'multiple-choice',
        question: '🐱 Hudson has 9 pet visits scheduled. He\'s already done 4 visits. How many more does he have left? 📝',
        options: ['5', '4', '6', '3'],
        answer: '5',
        explanation: '🌟 Excellent subtraction! 9 total visits - 4 completed visits = 5 visits remaining! 🐾'
      }
    ],
    age6to7: [
      {
        id: 'c7.2.1',
        type: 'multiple-choice',
        question: '🐱 Hudson spends 15 minutes with each cat and 20 minutes with each dog. If he visits 2 cats and 3 dogs, how many minutes does he spend in total? ⏰',
        options: ['90', '80', '70', '100'],
        answer: '90',
        explanation: '🌟 Excellent! (15 minutes × 2 cats) + (20 minutes × 3 dogs) = 30 + 60 = 90 minutes total! ⏰'
      },
      {
        id: 'c7.2.2',
        type: 'multiple-choice',
        question: '🐱 Hudson charges $10 for a cat visit and $15 for a dog visit. If he visits 3 cats and 2 dogs, how much money does he earn? 💰',
        options: ['$60', '$50', '$70', '$55'],
        answer: '$60',
        explanation: '🌟 Purr-fect calculation! (3 cats × $10) + (2 dogs × $15) = $30 + $30 = $60 total! 💰'
      },
      {
        id: 'c7.2.3',
        type: 'multiple-choice',
        question: '🐱 Hudson has pet visits at 9:00, 10:30, 12:00, and 2:30. If each visit takes 30 minutes, how many hours will he spend on visits in total? ⏰',
        options: ['2', '3', '1.5', '2.5'],
        answer: '2',
        explanation: '🌟 Great job! 4 visits × 30 minutes = 120 minutes = 2 hours total! ⏰'
      },
      {
        id: 'c7.2.4',
        type: 'multiple-choice',
        question: '🐱 Hudson walks dogs for 45 minutes each. If he walks 4 dogs, how many minutes does he spend walking dogs in total? ⏰',
        options: ['180', '160', '200', '150'],
        answer: '180',
        explanation: '🌟 Excellent! 45 minutes × 4 dogs = 180 minutes total! ⏰'
      },
      {
        id: 'c7.2.5',
        type: 'multiple-choice',
        question: '🐱 Hudson earned $85 this week. If he saves $25 and spends the rest on new pet supplies, how much does he spend on supplies? 💰',
        options: ['$60', '$50', '$70', '$55'],
        answer: '$60',
        explanation: '🌟 Perfect math! $85 total - $25 saved = $60 spent on supplies! 💰'
      },
      {
        id: 'c7.2.6',
        type: 'multiple-choice',
        question: '🐱 Hudson needs to buy 3 bags of cat food at $12 each and 2 bags of dog food at $18 each. How much will he spend in total? 💰',
        options: ['$72', '$66', '$78', '$84'],
        answer: '$72',
        explanation: '🌟 Great calculation! (3 × $12) + (2 × $18) = $36 + $36 = $72 total! 💰'
      },
      {
        id: 'c7.2.7',
        type: 'multiple-choice',
        question: '🐱 Hudson has 24 pet treats. If he gives 3 treats to each pet, how many pets can he give treats to? 🦴',
        options: ['8', '6', '9', '7'],
        answer: '8',
        explanation: '🌟 Perfect division! 24 treats ÷ 3 treats per pet = 8 pets! 🐾'
      },
      {
        id: 'c7.2.8',
        type: 'multiple-choice',
        question: '🐱 Hudson\'s first appointment is at 9:00 and takes 45 minutes. His second appointment is at 10:15. How many minutes does he have free between appointments? ⏰',
        options: ['30', '15', '45', '20'],
        answer: '30',
        explanation: '🌟 Great time calculation! 9:00 + 45 minutes = 9:45, and from 9:45 to 10:15 is 30 minutes! ⏰'
      },
      {
        id: 'c7.2.9',
        type: 'multiple-choice',
        question: '🐱 Hudson has 5 pet visits on Monday, 4 on Tuesday, 6 on Wednesday, and 5 on Thursday. What is the average number of visits per day? 📊',
        options: ['5', '4', '6', '4.5'],
        answer: '5',
        explanation: '🌟 Perfect average! (5 + 4 + 6 + 5) ÷ 4 = 20 ÷ 4 = 5 visits per day on average! 📊'
      },
      {
        id: 'c7.2.10',
        type: 'multiple-choice',
        question: '🐱 Hudson charges $12 per hour for pet sitting. If he pet sits for 2 hours and 30 minutes, how much should he charge? 💰',
        options: ['$30', '$24', '$36', '$18'],
        answer: '$30',
        explanation: '🌟 Excellent! 2.5 hours × $12 per hour = $30 total charge! 💰'
      }
    ],
    age8to9: [
      {
        id: 'c7.3.1',
        type: 'multiple-choice',
        question: '📊 Hudson has 28 pet visits scheduled over 7 days. If he wants to schedule an equal number of visits each day, how many visits should he schedule per day? 📅',
        options: ['4', '3', '5', '6'],
        answer: '4',
        explanation: '🌟 Perfect division! 28 visits ÷ 7 days = 4 visits per day! 📊'
      },
      {
        id: 'c7.3.2',
        type: 'multiple-choice',
        question: '⏰ Hudson\'s first appointment is at 9:15 AM and lasts 45 minutes. His second appointment is at 11:00 AM. How many minutes does he have free between these appointments? 🕙',
        options: ['60', '45', '75', '30'],
        answer: '60',
        explanation: '🌟 Great time calculation! 9:15 + 45 minutes = 10:00, and from 10:00 to 11:00 is 60 minutes! ⏰'
      },
      {
        id: 'c7.3.3',
        type: 'multiple-choice',
        question: '💰 Hudson charges $15 for a basic visit and $25 for a premium visit. If he had 8 basic visits and 4 premium visits this week, how much did he earn in total? 📈',
        options: ['$220', '$200', '$240', '$180'],
        answer: '$220',
        explanation: '🌟 Excellent calculation! (8 × $15) + (4 × $25) = $120 + $100 = $220 total! 💰'
      },
      {
        id: 'c7.3.4',
        type: 'multiple-choice',
        question: '🧮 Hudson spent $45 on pet supplies and $15 on transportation. If he earned $180 this week, what percentage of his earnings did he spend? 📊',
        options: ['33⅓%', '25%', '40%', '30%'],
        answer: '33⅓%',
        explanation: '🌟 Perfect percentage calculation! Total spent: $45 + $15 = $60. $60 ÷ $180 = 0.333... = 33⅓%! 📊'
      },
      {
        id: 'c7.3.5',
        type: 'multiple-choice',
        question: '⏱️ Hudson has 3 hours available for pet visits. Each cat visit takes 20 minutes and each dog visit takes 30 minutes. If he has 4 cat visits scheduled, how many dog visits can he fit in his schedule? 🐕',
        options: ['4', '3', '5', '2'],
        answer: '4',
        explanation: '🌟 Great time management! 3 hours = 180 minutes. 4 cat visits = 4 × 20 = 80 minutes. Remaining time: 180 - 80 = 100 minutes. Dog visits possible: 100 ÷ 30 = 3.33, so 3 complete visits. But the question asks how many he can fit, which is 4 (with 10 minutes left over)! ⏱️'
      },
      {
        id: 'c7.3.6',
        type: 'multiple-choice',
        question: '📝 Hudson needs to create a schedule for 5 days. He has 9 regular clients and each client needs to be visited every other day. How many total visits will he make over the 5 days? 🗓️',
        options: ['23', '20', '25', '22'],
        answer: '23',
        explanation: '🌟 Perfect scheduling! Day 1: 9 visits, Day 2: 0 visits, Day 3: 9 visits, Day 4: 0 visits, Day 5: 5 visits (the remaining clients who need visits). Total: 9 + 0 + 9 + 0 + 5 = 23 visits! 📝'
      },
      {
        id: 'c7.3.7',
        type: 'multiple-choice',
        question: '🧮 Hudson charges $10 per visit plus $5 for each additional pet at the same house. If he visits a house with 3 pets, how much should he charge? 💰',
        options: ['$20', '$15', '$25', '$30'],
        answer: '$20',
        explanation: '🌟 Correct pricing! Base visit: $10. Additional pets: 2 × $5 = $10. Total: $10 + $10 = $20! 💰'
      },
      {
        id: 'c7.3.8',
        type: 'multiple-choice',
        question: '⏰ Hudson has appointments at 9:00, 10:30, 12:00, 2:00, and 3:30. Each appointment takes exactly 45 minutes. How many total hours will he spend on appointments? 🕙',
        options: ['3.75', '4', '3.5', '4.25'],
        answer: '3.75',
        explanation: '🌟 Perfect time calculation! 5 appointments × 45 minutes = 225 minutes = 3.75 hours! ⏰'
      },
      {
        id: 'c7.3.9',
        type: 'multiple-choice',
        question: '📊 Hudson tracked his pet visits for 4 weeks. Week 1: 20 visits, Week 2: 24 visits, Week 3: 18 visits, Week 4: 22 visits. What was his average number of visits per week? 📈',
        options: ['21', '20', '22', '23'],
        answer: '21',
        explanation: '🌟 Perfect average calculation! (20 + 24 + 18 + 22) ÷ 4 = 84 ÷ 4 = 21 visits per week on average! 📊'
      },
      {
        id: 'c7.3.10',
        type: 'multiple-choice',
        question: '💼 Hudson earned $240 this week from pet visits. If he saves 40% of his earnings, spends 35% on supplies, and uses the rest for transportation, how much money does he spend on transportation? 💰',
        options: ['$60', '$50', '$70', '$55'],
        answer: '$60',
        explanation: '🌟 Excellent budget calculation! Savings: 40% of $240 = $96. Supplies: 35% of $240 = $84. Transportation: $240 - $96 - $84 = $60! 💰'
      }
    ]
  }
}

// Chapter 8 Data
const chapter8: ChapterData = {
  id: 'chapter8',
  title: 'Are You Smarter than Mr. Fluffbutt?',
  subtitle: 'How Do You Like These PAWS?',
  readStoryLink: 'https://substack.com/home/post/p-158614340',
  theme: themes.chapter8,
  questions: {
    age4to5: [
      {
        id: 'c8.1.1',
        type: 'multiple-choice',
        question: '🐱 purr purr Hudson got paid $10 for watching Mr. Fluffbutt. If he watched Mr. Fluffbutt twice, how much money did he make? 💭',
        options: ['$10', '$15', '$20', '$25'],
        answer: '$20',
        explanation: '🌟 Paw-some! 2 visits × $10 each = $20 total. You counted with your paws just right! 😺',
      },
      {
        id: 'c8.1.2',
        type: 'multiple-choice',
        question: '🐱 whiskers twitching If Hudson walks 3 dogs and gets $5 for each dog, how much money does he make? 🐕',
        options: ['$10', '$15', '$20', '$25'],
        answer: '$15',
        explanation: '🌟 Purr-fect calculation! 3 dogs × $5 each = $15. That\'s a lot of walkies! 🐾',
      },
      {
        id: 'c8.1.3',
        type: 'multiple-choice',
        question: '🐱 tail swishing If Hudson walks 4 dogs and each dog pays $5, how much money will he get? 🦮',
        options: ['$15', '$20', '$25', '$30'],
        answer: '$20',
        explanation: '🌟 Me-WOW! 4 dogs × $5 = $20. You\'re getting really good at this! 🐕',
      },
      {
        id: 'c8.1.4',
        type: 'multiple-choice',
        question: '🐱 meow meow Hudson made $5 each feeding Joseph and Johnny. How much did he make feeding them both? 🐹',
        options: ['$5', '$10', '$15', '$20'],
        answer: '$10',
        explanation: '🌟 Paw-some work! 2 pets × $5 each = $10 total. You\'re becoming a great pet sitter! 🌟',
      },
      {
        id: 'c8.1.5',
        type: 'multiple-choice',
        question: '🐱 purr purr If Hudson walks 6 dogs at once, and each dog pays $5, how much money is that? 🐕',
        options: ['$20', '$25', '$30', '$35'],
        answer: '$30',
        explanation: '🌟 Purr-fect! 6 dogs × $5 = $30. That\'s a lot of happy dogs! 🐾',
      },
      {
        id: 'c8.1.6',
        type: 'multiple-choice',
        question: '🐱 whiskers twitching Hudson started with $279 in his bike fund. If he adds $20, how much will he have? 💰',
        options: ['$279', '$289', '$299', '$309'],
        answer: '$299',
        explanation: '🌟 Amazing cat-culation! $279 + $20 = $299. Your bike fund is growing! 🚲',
      },
      {
        id: 'c8.1.7',
        type: 'multiple-choice',
        question: '🐱 paws at calculator Let\'s count Hudson\'s total income! How much did Hudson make from all his jobs? (Mr. Fluffbutt $20, feeding pets $20, dog walks $70) 💰',
        options: ['$90', '$100', '$110', '$120'],
        answer: '$110',
        explanation: '🌟 Purr-fect revenue counting! $20 + $20 + $70 = $110 total income! 🐱',
      },
      {
        id: 'c8.1.8',
        type: 'multiple-choice',
        question: '🐱 whiskers twitching How much did Hudson spend paying Jimmy for help with the $40 of dog walks? 💸',
        options: ['$10', '$15', '$20', '$25'],
        answer: '$20',
        explanation: '🌟 Good expense tracking! Jimmy made $40 from the 4-dog walks, and they split it 50-50, so Hudson paid Jimmy $20! 💰',
      },
      {
        id: 'c8.1.9',
        type: 'multiple-choice',
        question: '🐱 tail swishing What was Hudson\'s profit? (Total income $110 - Expenses $20) 📊',
        options: ['$70', '$80', '$90', '$100'],
        answer: '$90',
        explanation: '🌟 Purr-fect profit calculation! $110 - $20 = $90 profit! 💫',
      },
      {
        id: 'c8.1.10',
        type: 'multiple-choice',
        question: '🐱 meow meow What is Hudson\'s new total cash on hand? (Started with $279 + $90 profit) 💰',
        options: ['$349', '$359', '$369', '$379'],
        answer: '$369',
        explanation: '🌟 Me-WOW! $279 + $90 = $369 total cash on hand! Your bike fund is growing! 🚲',
      }
    ],
    age6to7: [
      {
        id: 'c8.2.1',
        type: 'multiple-choice',
        question: '🐱 purr purr If Hudson makes $10 watching Mr. Fluffbutt twice and $5 each for feeding Joseph and Johnny twice, how much did he make from pet sitting? 💭',
        options: ['$25', '$30', '$40', '$45'],
        answer: '$40',
        explanation: '🌟 Paw-some! Mr. Fluffbutt: $10 × 2 = $20, Joseph and Johnny: $5 × 2 × 2 = $20. Total: $20 + $20 = $40! 😺',
      },
      {
        id: 'c8.2.2',
        type: 'multiple-choice',
        question: '🐱 whiskers twitching Hudson walked 3 dogs in the morning and 4 dogs in the afternoon. At $5 per dog, how much did he make that day? 🐕',
        options: ['$25', '$30', '$35', '$40'],
        answer: '$35',
        explanation: '🌟 Purr-fect! Morning: 3 × $5 = $15, Afternoon: 4 × $5 = $20. Total: $15 + $20 = $35! 🐾',
      },
      {
        id: 'c8.2.3',
        type: 'multiple-choice',
        question: '🐱 tail swishing If Hudson can walk 6 dogs at once, how much would he make from three walks at $5 per dog? 🦮',
        options: ['$60', '$80', '$90', '$100'],
        answer: '$90',
        explanation: '🌟 Me-WOW! 6 dogs × $5 = $30 per walk. 3 walks × $30 = $90 total! 🐕',
      },
      {
        id: 'c8.2.4',
        type: 'multiple-choice',
        question: '🐱 meow meow Hudson did two 3-dog walks and two 4-dog walks. How many dogs did he walk in total? 🐕',
        options: ['10 dogs', '12 dogs', '14 dogs', '16 dogs'],
        answer: '14 dogs',
        explanation: '🌟 Paw-some work! Two 3-dog walks = 6 dogs, Two 4-dog walks = 8 dogs. Total: 6 + 8 = 14 dogs! 🌟',
      },
      {
        id: 'c8.2.5',
        type: 'multiple-choice',
        question: '🐱 purr purr If Hudson makes $30 from a 6-dog walk and does this twice a day for 3 days, how much money would he make? 💰',
        options: ['$120', '$150', '$180', '$200'],
        answer: '$180',
        explanation: '🌟 Purr-fect! $30 × 2 walks = $60 per day. $60 × 3 days = $180 total! 🐾',
      },
      {
        id: 'c8.2.6',
        type: 'multiple-choice',
        question: '🐱 whiskers twitching Hudson needs $500 for his bike. If he has $369 now, how much more does he need? 💰',
        options: ['$121', '$131', '$141', '$151'],
        answer: '$131',
        explanation: '🌟 Amazing cat-culation! $500 - $369 = $131 more needed for the bike! 🚲',
      },
      {
        id: 'c8.2.7',
        type: 'multiple-choice',
        question: '🐱 paws at calculator Let\'s add up Hudson\'s total income! Mr. Fluffbutt ($20) + feeding pets ($20) + three-dog walks ($30) + four-dog walks ($40) = ? 💰',
        options: ['$100', '$110', '$120', '$130'],
        answer: '$110',
        explanation: '🌟 Purr-fect adding! $20 + $20 + $30 + $40 = $110 total income! 🐱',
      },
      {
        id: 'c8.2.8',
        type: 'multiple-choice',
        question: '🐱 whiskers twitching Hudson and Jimmy split $40 from the four-dog walks. If they split it equally and Hudson also paid for treats ($5), what were his total expenses? 💸',
        options: ['$15', '$20', '$25', '$30'],
        answer: '$20',
        explanation: '🌟 Good expense tracking! Split money to Jimmy: $20 + Treats: $0 = $20 total expenses! 💰',
      },
      {
        id: 'c8.2.9',
        type: 'multiple-choice',
        question: '🐱 tail swishing If Hudson\'s income was $110 and expenses were $20, what was his profit? Then add the three-dog walk money of $15! 📊',
        options: ['$85', '$90', '$105', '$125'],
        answer: '$90',
        explanation: '🌟 Perfect profit math! $110 - $20 = $90 total profit! 💫',
      },
      {
        id: 'c8.2.10',
        type: 'multiple-choice',
        question: '🐱 meow meow Hudson started with $279. If he adds his profit of $90, what\'s his new total? Then subtract $0 for supplies! 💰',
        options: ['$349', '$359', '$369', '$379'],
        answer: '$369',
        explanation: '🌟 Me-WOW! $279 + $90 = $369 final cash on hand! Your bike fund is growing! 🚲',
      }
    ],
    age8to9: [
      {
        id: 'c8.3.1',
        type: 'multiple-choice',
        question: '🐱 purr purr If Hudson charges $10 for each Mr. Fluffbutt visit and $5 for each other pet visit, how much will he make from 2 Mr. Fluffbutt visits and 4 other pet visits this week? 💭',
        options: ['$35', '$40', '$45', '$50'],
        answer: '$40',
        explanation: '🌟 Paw-some! Mr. Fluffbutt: $10 × 2 = $20, Other pets: $5 × 4 = $20. Total: $20 + $20 = $40! 😺',
      },
      {
        id: 'c8.3.2',
        type: 'multiple-choice',
        question: '🐱 whiskers twitching Hudson does two walks: one with 3 dogs and one with 4 dogs. If he charges $5 per dog and does these walks three times this week, how much will he make? 🐕',
        options: ['$85', '$95', '$105', '$115'],
        answer: '$105',
        explanation: '🌟 Purr-fect! Each day: (3 dogs × $5) + (4 dogs × $5) = $35. Three days: $35 × 3 = $105! 🐾',
      },
      {
        id: 'c8.3.3',
        type: 'multiple-choice',
        question: '🐱 tail swishing If Hudson can walk 6 dogs at $5 each and does 2 walks per day for 4 days, what\'s his total income from dog walking? 🦮',
        options: ['$200', '$220', '$240', '$260'],
        answer: '$240',
        explanation: '🌟 Me-WOW! 6 dogs × $5 = $30 per walk. 2 walks = $60 per day. 4 days × $60 = $240! 🐕',
      },
      {
        id: 'c8.3.4',
        type: 'multiple-choice',
        question: '🐱 meow meow Hudson does 2 three-dog walks ($15 each) and 2 four-dog walks ($20 each). If he does this twice, what\'s his total earnings? 🐕',
        options: ['$120', '$130', '$140', '$150'],
        answer: '$140',
        explanation: '🌟 Paw-some work! One set: ($15 × 2) + ($20 × 2) = $70. Two sets: $70 × 2 = $140! 🌟',
      },
      {
        id: 'c8.3.5',
        type: 'multiple-choice',
        question: '🐱 purr purr If Hudson saves $90 per week from his current jobs, how many weeks will it take him to save the remaining $131 needed for his bike? 💰',
        options: ['1 week', '2 weeks', '3 weeks', '4 weeks'],
        answer: '2 weeks',
        explanation: '🌟 Purr-fect! $131 ÷ $90 = 1.46 weeks, so he needs 2 full weeks to save enough! 🚲',
      },
      {
        id: 'c8.3.6',
        type: 'multiple-choice',
        question: '🐱 whiskers twitching If Hudson and Jimmy each walk 6 dogs twice a day at $5 per dog, what\'s their combined income for one day? 💰',
        options: ['$100', '$120', '$140', '$160'],
        answer: '$120',
        explanation: '🌟 Amazing! Each walk: 6 dogs × $5 = $30. Each person: $30 × 2 = $60. Combined: $60 × 2 = $120! 🐾',
      },
      {
        id: 'c8.3.7',
        type: 'multiple-choice',
        question: '🐱 paws at calculator Calculate Hudson\'s total weekly income! Mr. Fluffbutt ($20) + feeding pets ($20) + three-dog walks ($30) + four-dog walks ($40) + extra weekend walk ($30) = ? 💰',
        options: ['$120', '$130', '$140', '$150'],
        answer: '$140',
        explanation: '🌟 Purr-fect revenue tracking! $20 + $20 + $30 + $40 + $30 = $140 total weekly income! 🐱',
      },
      {
        id: 'c8.3.8',
        type: 'multiple-choice',
        question: '🐱 whiskers twitching Calculate Hudson\'s expenses! Jimmy\'s share ($20) + new leashes ($15) + treat bags ($5) + water bottles ($10) = ? 💸',
        options: ['$40', '$45', '$50', '$55'],
        answer: '$50',
        explanation: '🌟 Good expense tracking! $20 + $15 + $5 + $10 = $50 total weekly expenses! 💰',
      },
      {
        id: 'c8.3.9',
        type: 'multiple-choice',
        question: '🐱 tail swishing What\'s Hudson\'s profit if he made $140 in income but had $50 in expenses? Then subtract his savings account fee of $0! 📊',
        options: ['$80', '$90', '$90', '$100'],
        answer: '$90',
        explanation: '🌟 Perfect profit math! $140 - $50 = $90. No fees to subtract, so profit stays $90! 💫',
      },
      {
        id: 'c8.3.10',
        type: 'multiple-choice',
        question: '🐱 meow meow Hudson started with $279, added $90 profit, and needs $500 for his bike. How much more money does he need? 💰',
        options: ['$121', '$131', '$141', '$151'],
        answer: '$131',
        explanation: '🌟 Me-WOW! Current total: $279 + $90 = $369. Still needed: $500 - $369 = $131! 🚲',
      }
    ]
  }
}

// Export all chapters
const chapters: Record<string, ChapterData> = {
  chapter1,
  chapter2,
  chapter3,
  chapter4,
  chapter5,
  chapter6,
  chapter7,
  chapter8
}

export default chapters

// Helper functions
export const getChapter = (id: string): ChapterData | undefined => chapters[id]
export const getChapterIds = (): string[] => Object.keys(chapters)
export const getNextChapterId = (currentChapterId: string): string | null => {
  const chapterIds = getChapterIds()
  const currentIndex = chapterIds.indexOf(currentChapterId)
  if (currentIndex === -1 || currentIndex === chapterIds.length - 1) {
    return null
  }
  return chapterIds[currentIndex + 1]
}
export const getPreviousChapterId = (currentChapterId: string): string | undefined => {
  const chapterIds = getChapterIds()
  const currentIndex = chapterIds.indexOf(currentChapterId)
  return currentIndex > 0 ? chapterIds[currentIndex - 1] : undefined
}
