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
        explanation: '🎯 $65 - $3 = $62! Perfect calculation! 💪'
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
        options: ['90 minutes', '105 minutes', '120 minutes', '135 minutes'],
        answer: '120 minutes',
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
        question: '⏰ How many hours in a week if Hudson spends 2 hours daily with animals? 🕒',
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
        question: '🐕 What happens when Drew-bo sees a squirrel? 🐿️',
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
        question: '💰 Starting $62, Net loss $10. Final balance? 🎯',
        options: ['$40', '$45', '$50', '$55'],
        answer: '$50',
        explanation: '📊 $62 - $10 = $50! Final balance expert! 🌟'
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
        explanation: '🌟 $50 + $29 = $79! Enough for the bike! Congratulations! 🚲'
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
        question: '🐱 How much money has Hudson saved so far? 💰',
        options: ['$50', '$60', '$70', '$79'],
        answer: '$79',
        explanation: '🌟 Hudson has saved $79 from all his hard work! Purr-fect counting! 🐾'
      },
      {
        id: 'c6.1.2',
        type: 'multiple-choice',
        question: '🚲 How much more money does Hudson need for the bike? 💵',
        options: ['$421', '$431', '$441', '$451'],
        answer: '$421',
        explanation: '🎯 $500 - $79 = $421 more needed! Keep going! 💪'
      },
      {
        id: 'c6.1.3',
        type: 'multiple-choice',
        question: '🐕 How many small dogs can Hudson walk at once now? 🦮',
        options: ['2 dogs', '3 dogs', '4 dogs', '5 dogs'],
        answer: '4 dogs',
        explanation: '🌟 Hudson can now handle 4 small dogs at once! Such progress! 🐾'
      },
      {
        id: 'c6.1.4',
        type: 'multiple-choice',
        question: '💰 If Hudson makes $5 per dog, how much for walking 4 dogs? 🐕',
        options: ['$15', '$20', '$25', '$30'],
        answer: '$20',
        explanation: '🧮 $5 × 4 dogs = $20! Excellent multiplication! ⭐'
      },
      {
        id: 'c6.1.5',
        type: 'multiple-choice',
        question: '⏰ How long does Hudson spend with each dog? ⌛',
        options: ['15 minutes', '20 minutes', '25 minutes', '30 minutes'],
        answer: '20 minutes',
        explanation: '🕒 Each dog gets 20 minutes of Hudson\'s time! Perfect scheduling! ⭐'
      },
      {
        id: 'c6.1.6',
        type: 'multiple-choice',
        question: '📅 How many days per week does Hudson walk dogs? 🗓️',
        options: ['3 days', '4 days', '5 days', '6 days'],
        answer: '5 days',
        explanation: '📆 Hudson walks dogs Monday through Friday = 5 days! 🌟'
      },
      {
        id: 'c6.1.7',
        type: 'multiple-choice',
        question: '🐱 Who still gets special treatment from Hudson? 😺',
        options: ['Drew-bo', 'Joseph', 'Edie', 'Mr. Fluffbutt'],
        answer: 'Mr. Fluffbutt',
        explanation: '👑 Of course I still get the royal treatment! I am the star! ⭐'
      },
      {
        id: 'c6.1.8',
        type: 'multiple-choice',
        question: '💵 How much does Hudson make from walking dogs in one day? 💰',
        options: ['$15', '$20', '$25', '$30'],
        answer: '$20',
        explanation: '💫 $5 × 4 dogs = $20 per day! Great business! 🐾'
      },
      {
        id: 'c6.1.9',
        type: 'multiple-choice',
        question: '🎯 If Hudson makes $20 per day, how much in 5 days? 💭',
        options: ['$80', '$90', '$100', '$110'],
        answer: '$100',
        explanation: '🧮 $20 × 5 days = $100! Amazing progress! 💫'
      },
      {
        id: 'c6.1.10',
        type: 'multiple-choice',
        question: '💰 Starting with $79, adding $100, what\'s the total? 🎯',
        options: ['$169', '$179', '$189', '$199'],
        answer: '$179',
        explanation: '🌟 $79 + $100 = $179! Getting closer to that bike! 🚲'
      }
    ],
    age6to7: [
      {
        id: 'c6.2.1',
        type: 'multiple-choice',
        question: '💰 If Hudson has $79 saved and makes $100 this week, how much total? 🎯',
        options: ['$169', '$179', '$189', '$199'],
        answer: '$179',
        explanation: '🧮 $79 + $100 = $179! Great addition! 💫'
      },
      {
        id: 'c6.2.2',
        type: 'multiple-choice',
        question: '🚲 The bike costs $500. If Hudson has $179, how much more needed? 💵',
        options: ['$311', '$321', '$331', '$341'],
        answer: '$321',
        explanation: '🎯 $500 - $179 = $321! Keep saving! 💪'
      },
      {
        id: 'c6.2.3',
        type: 'multiple-choice',
        question: '⏰ If each dog walk takes 20 minutes, how long for 4 dogs? ⌛',
        options: ['60 minutes', '70 minutes', '80 minutes', '90 minutes'],
        answer: '80 minutes',
        explanation: '🕒 20 minutes × 4 dogs = 80 minutes! Time master! ⭐'
      },
      {
        id: 'c6.2.4',
        type: 'multiple-choice',
        question: '📊 If Hudson makes $20 daily walking dogs, how much in 2 weeks? 💰',
        options: ['$180', '$190', '$200', '$210'],
        answer: '$200',
        explanation: '💫 $20 × 5 days × 2 weeks = $200! Excellent calculation! 📈'
      },
      {
        id: 'c6.2.5',
        type: 'multiple-choice',
        question: '🐕 Walking 4 dogs twice daily at $5 each, total earnings? 💵',
        options: ['$30', '$35', '$40', '$45'],
        answer: '$40',
        explanation: '🧮 $5 × 4 dogs × 2 times = $40! Smart business! ⭐'
      },
      {
        id: 'c6.2.6',
        type: 'multiple-choice',
        question: '⏱️ Total minutes walking dogs in 5 days? (80 mins/day) ⌛',
        options: ['380 minutes', '400 minutes', '420 minutes', '440 minutes'],
        answer: '400 minutes',
        explanation: '⏰ 80 minutes × 5 days = 400 minutes! Time tracking pro! 🌟'
      },
      {
        id: 'c6.2.7',
        type: 'multiple-choice',
        question: '💰 Weekly income: Dogs ($100) + Fluffbutt ($20) + Allowance ($10) = ? 💵',
        options: ['$120', '$130', '$140', '$150'],
        answer: '$130',
        explanation: '🎯 $100 + $20 + $10 = $130! Adding master! ⭐'
      },
      {
        id: 'c6.2.8',
        type: 'multiple-choice',
        question: '📊 If Hudson saves $130 weekly, how many weeks to reach $500? 🤔',
        options: ['3 weeks', '4 weeks', '5 weeks', '6 weeks'],
        answer: '4 weeks',
        explanation: '🧮 $500 ÷ $130 ≈ 3.85, so 4 weeks needed! Smart planning! 📈'
      },
      {
        id: 'c6.2.9',
        type: 'multiple-choice',
        question: '🐕 If one dog cancels, daily earnings drop by how much? (2 walks) 💵',
        options: ['$5', '$10', '$15', '$20'],
        answer: '$10',
        explanation: '💰 $5 × 2 walks = $10 less per day! Good calculation! 🌟'
      },
      {
        id: 'c6.2.10',
        type: 'multiple-choice',
        question: '💭 After 2 weeks ($260), plus current savings ($179), total? 🎯',
        options: ['$429', '$439', '$449', '$459'],
        answer: '$439',
        explanation: '🌟 $260 + $179 = $439! Almost there! 🚲'
      }
    ],
    age8to9: [
      {
        id: 'c6.3.1',
        type: 'multiple-choice',
        question: '📊 Calculate: Starting balance ($179) + 2 weeks income ($260) = ? 💰',
        options: ['$429', '$439', '$449', '$459'],
        answer: '$439',
        explanation: '🧮 $179 + $260 = $439! Expert addition! 💫'
      },
      {
        id: 'c6.3.2',
        type: 'multiple-choice',
        question: '⏰ Convert 400 minutes of weekly dog walking to hours: 💭',
        options: ['6.5 hours', '6.67 hours', '6.75 hours', '7 hours'],
        answer: '6.67 hours',
        explanation: '🕒 400 ÷ 60 = 6.67 hours! Time conversion master! ⭐'
      },
      {
        id: 'c6.3.3',
        type: 'multiple-choice',
        question: '💵 Daily earnings $40 ÷ 1.33 hours = hourly rate? 💰',
        options: ['$25/hr', '$30/hr', '$35/hr', '$40/hr'],
        answer: '$30/hr',
        explanation: '📊 $40 ÷ 1.33 hours = $30 per hour! Business math! 💫'
      },
      {
        id: 'c6.3.4',
        type: 'multiple-choice',
        question: '🎯 How much more needed for $500 bike if Hudson has $439? 💵',
        options: ['$51', '$61', '$71', '$81'],
        answer: '$61',
        explanation: '🧮 $500 - $439 = $61! Almost there! 🚲'
      },
      {
        id: 'c6.3.5',
        type: 'multiple-choice',
        question: '📊 With $130 weekly income, how many days to earn remaining $61? 💭',
        options: ['2 days', '3 days', '4 days', '5 days'],
        answer: '3 days',
        explanation: '💰 $130 ÷ 5 = $26 daily, so 3 days needed! Smart planning! 📈'
      },
      {
        id: 'c6.3.6',
        type: 'multiple-choice',
        question: '⏱️ If Hudson walks 4 dogs twice daily, total dogs walked in 2 weeks? 🐕',
        options: ['70 dogs', '80 dogs', '90 dogs', '100 dogs'],
        answer: '80 dogs',
        explanation: '🧮 4 dogs × 2 times × 5 days × 2 weeks = 80 dogs! Amazing! 🌟'
      },
      {
        id: 'c6.3.7',
        type: 'multiple-choice',
        question: '💵 Calculate monthly income potential: $130 weekly × 4 weeks = ? 💰',
        options: ['$490', '$510', '$520', '$540'],
        answer: '$520',
        explanation: '📊 $130 × 4 = $520 monthly potential! Business expert! 💫'
      },
      {
        id: 'c6.3.8',
        type: 'multiple-choice',
        question: '🕒 Monthly time: 400 mins weekly × 4 weeks = ? (in hours) ⏰',
        options: ['24 hours', '26.67 hours', '28 hours', '30 hours'],
        answer: '26.67 hours',
        explanation: '⏱️ (400 × 4) ÷ 60 = 26.67 hours! Time management pro! ⭐'
      },
      {
        id: 'c6.3.9',
        type: 'multiple-choice',
        question: '📊 Calculate net profit: Revenue $35 - Expenses $6 = ? 💭',
        options: ['$27', '$29', '$31', '$33'],
        answer: '$29',
        explanation: '📈 $35 - $6 = $29 net profit! Business math! 💫'
      },
      {
        id: 'c6.3.10',
        type: 'multiple-choice',
        question: '🎯 Final calculation: $439 saved + 3 days income ($78) = ? 💵',
        options: ['$507', '$517', '$527', '$537'],
        answer: '$517',
        explanation: '🌟 $439 + $78 = $517! Enough for the bike! Congratulations! 🚲'
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
  chapter6
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