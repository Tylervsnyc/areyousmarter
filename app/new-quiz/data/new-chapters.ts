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

// Chapter themes - using the correct Theme interface
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
        question: '🤔 If Hudson makes $50 this week but spends $12 on supplies, what\'s his actual savings? 💵',
        options: ['$33', '$38', '$42', '$48'],
        answer: '$38',
        explanation: '🎯 $50 - $12 = $38 saved! Every dollar counts! 💪',
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
        question: '💵 If Hudson gets $10 per day, how much money will he have after 3 days? 💰',
        options: ['$20', '$25', '$30', '$35'],
        answer: '$30',
        explanation: '🎯 $10 × 3 days = $30! Counting like a pro! 🌟'
      },
      {
        id: 'c2.2.8',
        type: 'multiple-choice',
        question: '🐱 If Mr. Fluffbutt takes a 10-minute nap 4 times during Hudson\'s visit, how many minutes does he nap? 😺',
        options: ['30 minutes', '40 minutes', '50 minutes', '60 minutes'],
        answer: '40 minutes',
        explanation: '😴 10 minutes × 4 naps = 40 minutes of beauty rest! 🌙'
      },
      {
        id: 'c2.2.9',
        type: 'multiple-choice',
        question: '📊 If Hudson saves $10 today and $20 tomorrow, how much will he have? 💵',
        options: ['$25', '$30', '$35', '$40'],
        answer: '$30',
        explanation: '💰 $10 + $20 = $30! Adding like a mathematician! ➕'
      },
      {
        id: 'c2.2.10',
        type: 'multiple-choice',
        question: '🎯 If the bike costs $500 and Hudson saves $100, what fraction has he saved? 🚲',
        options: ['1/3', '1/4', '1/5', '1/6'],
        answer: '1/5',
        explanation: '📊 $100 is 1/5 of $500! Fractions are fun! 🎨'
      }
    ],
    age8to9: [
      {
        id: 'c2.3.1',
        type: 'multiple-choice',
        question: '💰 If Hudson makes $10 each day watching Mr. Fluffbutt on weekdays, how much will he make in 3 weeks? 🐱',
        options: ['$100', '$150', '$200', '$250'],
        answer: '$150',
        explanation: '🧮 $10 × 5 days × 3 weeks = $150! Excellent multiplication! 🌟'
      },
      {
        id: 'c2.3.2',
        type: 'multiple-choice',
        question: '🚲 If Hudson has saved $200 for the bike that costs $500, how much more does he need? 💵',
        options: ['$200', '$250', '$300', '$350'],
        answer: '$300',
        explanation: '🎯 $500 - $200 = $300 more needed! Keep saving! 💪'
      },
      {
        id: 'c2.3.3',
        type: 'multiple-choice',
        question: '⏰ If Hudson spends 1 hour and 15 minutes with Mr. Fluffbutt each day, how many hours is that in a 5-day week? ⌛',
        options: ['5 hours', '6 hours', '6.25 hours', '7 hours'],
        answer: '6.25 hours',
        explanation: '⏱️ (75 minutes × 5) ÷ 60 = 6.25 hours! Time calculation master! 🌟'
      },
      {
        id: 'c2.3.4',
        type: 'multiple-choice',
        question: '💵 If Hudson saves $10 each weekday and $5 each weekend day, how much will he save in 2 weeks? 💰',
        options: ['$110', '$120', '$130', '$140'],
        answer: '$120',
        explanation: '🧮 ($10 × 10 weekdays) + ($5 × 4 weekend days) = $120! Smart saving! 💫'
      },
      {
        id: 'c2.3.5',
        type: 'multiple-choice',
        question: '📊 If Hudson has $50 and spends $15 on supplies and $20 on food, how much money does he have left? 🤔',
        options: ['$10', '$15', '$20', '$25'],
        answer: '$15',
        explanation: '💰 $50 - $15 - $20 = $15! Careful budgeting! ✨'
      },
      {
        id: 'c2.3.6',
        type: 'multiple-choice',
        question: '🎯 If Hudson needs $500 for the bike and saves $45 each week, how many complete weeks will it take? 📅',
        options: ['10 weeks', '11 weeks', '12 weeks', '13 weeks'],
        answer: '12 weeks',
        explanation: '🧮 $500 ÷ $45 = 11.11 weeks, so he needs 12 full weeks! 📊'
      },
      {
        id: 'c2.3.7',
        type: 'multiple-choice',
        question: '⏱️ If Hudson spends 45 minutes with Mr. Fluffbutt each weekday, how many total minutes in 2 weeks? ⌛',
        options: ['350 minutes', '400 minutes', '450 minutes', '500 minutes'],
        answer: '450 minutes',
        explanation: '⏰ 45 minutes × 5 days × 2 weeks = 450 minutes! Time flies! 🌟'
      },
      {
        id: 'c2.3.8',
        type: 'multiple-choice',
        question: '🤔 If Hudson makes $50 this week but spends $12 on supplies, what\'s his actual savings? 💵',
        options: ['$33', '$38', '$42', '$48'],
        answer: '$38',
        explanation: '🎯 $50 - $12 = $38 saved! Every dollar counts! 💪',
      },
      {
        id: 'c2.3.9',
        type: 'multiple-choice',
        question: '📚 If Hudson does homework for 40 minutes while watching Mr. Fluffbutt each day, how many hours of homework in 2 weeks (weekdays only)? 📝',
        options: ['5.5 hours', '6.5 hours', '6.75 hours', '7 hours'],
        answer: '6.75 hours',
        explanation: '📊 (40 minutes × 10 days) ÷ 60 = 6.75 hours! Study champion! 🌟'
      },
      {
        id: 'c2.3.10',
        type: 'multiple-choice',
        question: '🐱 If Mr. Fluffbutt takes three 15-minute naps during each visit, how many hours does he nap in a 5-day week? 😺',
        options: ['2 hours', '2.5 hours', '3 hours', '3.75 hours'],
        answer: '3.75 hours',
        explanation: '😴 (15 minutes × 3 naps × 5 days) ÷ 60 = 3.75 hours of beauty rest! 🌙'
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
        question: '🐱 How much money did Miss Meyers give Hudson for watching me? 💰',
        options: ['$5', '$10', '$15', '$20'],
        answer: '$10',
        explanation: '🌟 Miss Meyers gave Hudson $10 for being such a good cat-sitter! 🐾'
      },
      {
        id: 'c3.1.2',
        type: 'multiple-choice',
        question: '🎨 What color is the beautiful bike Hudson wants? 🚲',
        options: ['Blue', 'Green', 'Red', 'Yellow'],
        answer: 'Red',
        explanation: '🌈 It\'s a shiny red bike! Just like my favorite toy mouse! 🐾'
      },
      {
        id: 'c3.1.3',
        type: 'multiple-choice',
        question: '⏰ When does Hudson come to visit me? 🐱',
        options: ['Before school', 'After school', 'At night', 'During lunch'],
        answer: 'After school',
        explanation: '🌟 Hudson comes to see me after school every day! 🎒'
      },
      {
        id: 'c3.1.4',
        type: 'multiple-choice',
        question: '💰 How much does the bike cost? 🚲',
        options: ['$100', '$200', '$500', '$1000'],
        answer: '$500',
        explanation: '🎯 The bike costs $500! That\'s a lot of cat treats! 💫'
      },
      {
        id: 'c3.1.5',
        type: 'multiple-choice',
        question: '📚 What does Hudson do while watching Mr. Fluffbutt? 📝',
        options: ['Plays games', 'Does homework', 'Takes a nap', 'Watches TV'],
        answer: 'Does homework',
        explanation: '✏️ Hudson does his homework while keeping me company! 📚'
      },
      {
        id: 'c3.1.6',
        type: 'multiple-choice',
        question: '🎵 What does Hudson do that makes Mr. Fluffbutt happy? 🐱',
        options: ['Dances', 'Hums', 'Claps', 'Jumps'],
        answer: 'Hums',
        explanation: '🎵 Hudson hums such nice songs that make me purr! 🎶'
      },
      {
        id: 'c3.1.7',
        type: 'multiple-choice',
        question: '👥 Who owns Mr. Fluffbutt? 🏠',
        options: ['Hudson', 'Miss Meyers', 'Mom', 'Dad'],
        answer: 'Miss Meyers',
        explanation: '🏠 Miss Meyers is my human! Though I own the house, really! 😺'
      },
      {
        id: 'c3.1.8',
        type: 'multiple-choice',
        question: '❓ Is $10 enough to buy the bike? 🤔',
        options: ['Yes', 'No'],
        answer: 'No',
        explanation: '💰 No, Hudson needs much more than $10 for the bike! 🚲'
      },
      {
        id: 'c3.1.9',
        type: 'multiple-choice',
        question: '📅 How many days did Miss Meyers ask Hudson to watch Mr. Fluffbutt? 🐱',
        options: ['3 days', '4 days', '5 days', '6 days'],
        answer: '5 days',
        explanation: '📅 Monday to Friday makes 5 days! Purr-fect counting! 🌟'
      },
      {
        id: 'c3.1.10',
        type: 'multiple-choice',
        question: '🐱 Where does Mr. Fluffbutt like to sit when new people visit? 🪑',
        options: ['Under the bed', 'On his perch', 'By the door', 'On the couch'],
        answer: 'On his perch',
        explanation: '👑 I like to sit on my royal perch and observe my subjects! 🐾'
      }
    ],
    age6to7: [
      {
        id: 'c3.2.1',
        type: 'multiple-choice',
        question: '💰 If Hudson makes $10 each day watching Mr. Fluffbutt, how much will he make in 5 days? 🐱',
        options: ['$40', '$50', '$45', '$55'],
        answer: '$50',
        explanation: '🌟 $10 × 5 days = $50! Purr-fect multiplication! 🧮'
      },
      {
        id: 'c3.2.2',
        type: 'multiple-choice',
        question: '🚲 The bike costs $500. If Hudson has $10 now, how much MORE money does he need? 💵',
        options: ['$490', '$480', '$500', '$400'],
        answer: '$490',
        explanation: '🎯 $500 - $10 = $490! Keep saving, Hudson! 💪'
      },
      {
        id: 'c3.2.3',
        type: 'multiple-choice',
        question: '📅 How many days are there from Monday to Friday? 🤔',
        options: ['3 days', '4 days', '5 days', '6 days'],
        answer: '5 days',
        explanation: '📊 Monday through Friday = 5 days of cat-sitting! 🌟'
      },
      {
        id: 'c3.2.4',
        type: 'multiple-choice',
        question: '⏰ If Hudson spends 1 hour with Mr. Fluffbutt each day, how many hours in 5 days? ⌛',
        options: ['3 hours', '4 hours', '5 hours', '6 hours'],
        answer: '5 hours',
        explanation: '⏰ 1 hour × 5 days = 5 hours with the magnificent Mr. Fluffbutt! 🐱'
      },
      {
        id: 'c3.2.5',
        type: 'multiple-choice',
        question: '💰 If Hudson saves $50 each week, how many weeks of saving will he need for the $500 bike? 🚲',
        options: ['8 weeks', '10 weeks', '12 weeks', '14 weeks'],
        answer: '10 weeks',
        explanation: '🧮 $500 ÷ $50 = 10 weeks! Smart calculating! 📊'
      },
      {
        id: 'c3.2.6',
        type: 'multiple-choice',
        question: '📝 If Hudson does homework for 30 minutes while watching Mr. Fluffbutt, how many minutes in 5 days? ⏱️',
        options: ['100 minutes', '150 minutes', '200 minutes', '250 minutes'],
        answer: '150 minutes',
        explanation: '⏰ 30 minutes × 5 days = 150 minutes of homework time! 📚'
      },
      {
        id: 'c3.2.8',
        type: 'multiple-choice',
        question: '🐱 If Mr. Fluffbutt takes a 10-minute nap 4 times during Hudson\'s visit, how many minutes does he nap? 😺',
        options: ['30 minutes', '40 minutes', '50 minutes', '60 minutes'],
        answer: '40 minutes',
        explanation: '😴 10 minutes × 4 naps = 40 minutes of beauty rest! 🌙'
      },
      {
        id: 'c3.2.9',
        type: 'multiple-choice',
        question: '📊 If Hudson saves $10 today and $20 tomorrow, how much will he have? 💵',
        options: ['$25', '$30', '$35', '$40'],
        answer: '$30',
        explanation: '💰 $10 + $20 = $30! Adding like a mathematician! ➕'
      },
      {
        id: 'c3.2.10',
        type: 'multiple-choice',
        question: '🎯 If the bike costs $500 and Hudson saves $100, what fraction has he saved? 🚲',
        options: ['1/3', '1/4', '1/5', '1/6'],
        answer: '1/5',
        explanation: '📊 $100 is 1/5 of $500! Fractions are fun! 🎨'
      }
    ],
    age8to9: [
      {
        id: 'c3.3.1',
        type: 'multiple-choice',
        question: '💰 If Hudson makes $10 each day watching Mr. Fluffbutt on weekdays, how much will he make in 3 weeks? 🐱',
        options: ['$100', '$150', '$200', '$250'],
        answer: '$150',
        explanation: '🧮 $10 × 5 days × 3 weeks = $150! Excellent multiplication! 🌟'
      },
      {
        id: 'c3.3.2',
        type: 'multiple-choice',
        question: '🚲 If Hudson has saved $200 for the bike that costs $500, how much more does he need? 💵',
        options: ['$200', '$250', '$300', '$350'],
        answer: '$300',
        explanation: '🎯 $500 - $200 = $300 more needed! Keep saving! 💪'
      },
      {
        id: 'c3.3.3',
        type: 'multiple-choice',
        question: '⏰ If Hudson spends 1 hour and 15 minutes with Mr. Fluffbutt each day, how many hours is that in a 5-day week? ⌛',
        options: ['5 hours', '6 hours', '6.25 hours', '7 hours'],
        answer: '6.25 hours',
        explanation: '⏱️ (75 minutes × 5) ÷ 60 = 6.25 hours! Time calculation master! 🌟'
      },
      {
        id: 'c3.3.4',
        type: 'multiple-choice',
        question: '💵 If Hudson saves $10 each weekday and $5 each weekend day, how much will he save in 2 weeks? 💰',
        options: ['$110', '$120', '$130', '$140'],
        answer: '$120',
        explanation: '🧮 ($10 × 10 weekdays) + ($5 × 4 weekend days) = $120! Smart saving! 💫'
      },
      {
        id: 'c3.3.5',
        type: 'multiple-choice',
        question: '📊 If Hudson has $50 and spends $15 on supplies and $20 on food, how much money does he have left? 🤔',
        options: ['$10', '$15', '$20', '$25'],
        answer: '$15',
        explanation: '💰 $50 - $15 - $20 = $15! Careful budgeting! ✨'
      },
      {
        id: 'c3.3.6',
        type: 'multiple-choice',
        question: '🎯 If Hudson needs $500 for the bike and saves $45 each week, how many complete weeks will it take? 📅',
        options: ['10 weeks', '11 weeks', '12 weeks', '13 weeks'],
        answer: '12 weeks',
        explanation: '🧮 $500 ÷ $45 = 11.11 weeks, so he needs 12 full weeks! 📊'
      },
      {
        id: 'c3.3.7',
        type: 'multiple-choice',
        question: '⏱️ If Hudson spends 45 minutes with Mr. Fluffbutt each weekday, how many total minutes in 2 weeks? ⌛',
        options: ['350 minutes', '400 minutes', '450 minutes', '500 minutes'],
        answer: '450 minutes',
        explanation: '⏰ 45 minutes × 5 days × 2 weeks = 450 minutes! Time flies! 🌟'
      },
      {
        id: 'c3.3.8',
        type: 'multiple-choice',
        question: '🤔 If Hudson makes $50 this week but spends $12 on supplies, what\'s his actual savings? 💵',
        options: ['$33', '$38', '$42', '$48'],
        answer: '$38',
        explanation: '🎯 $50 - $12 = $38 saved! Every dollar counts! 💪',
      },
      {
        id: 'c3.3.9',
        type: 'multiple-choice',
        question: '📚 If Hudson does homework for 40 minutes while watching Mr. Fluffbutt each day, how many hours of homework in 2 weeks (weekdays only)? 📝',
        options: ['5.5 hours', '6.5 hours', '6.75 hours', '7 hours'],
        answer: '6.75 hours',
        explanation: '📊 (40 minutes × 10 days) ÷ 60 = 6.75 hours! Study champion! 🌟'
      },
      {
        id: 'c3.3.10',
        type: 'multiple-choice',
        question: '🐱 If Mr. Fluffbutt takes three 15-minute naps during each visit, how many hours does he nap in a 5-day week? 😺',
        options: ['2 hours', '2.5 hours', '3 hours', '3.75 hours'],
        answer: '3.75 hours',
        explanation: '😴 (15 minutes × 3 naps × 5 days) ÷ 60 = 3.75 hours of beauty rest! 🌙'
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
        question: '🐱 How much money did Miss Meyers give Hudson for watching me? 💰',
        options: ['$5', '$10', '$15', '$20'],
        answer: '$10',
        explanation: '🌟 Miss Meyers gave Hudson $10 for being such a good cat-sitter! 🐾'
      },
      {
        id: 'c4.1.2',
        type: 'multiple-choice',
        question: '🎨 What color is the beautiful bike Hudson wants? 🚲',
        options: ['Blue', 'Green', 'Red', 'Yellow'],
        answer: 'Red',
        explanation: '🌈 It\'s a shiny red bike! Just like my favorite toy mouse! 🐾'
      },
      {
        id: 'c4.1.3',
        type: 'multiple-choice',
        question: '⏰ When does Hudson come to visit me? 🐱',
        options: ['Before school', 'After school', 'At night', 'During lunch'],
        answer: 'After school',
        explanation: '🌟 Hudson comes to see me after school every day! 🎒'
      },
      {
        id: 'c4.1.4',
        type: 'multiple-choice',
        question: '💰 How much does the bike cost? 🚲',
        options: ['$100', '$200', '$500', '$1000'],
        answer: '$500',
        explanation: '🎯 The bike costs $500! That\'s a lot of cat treats! 💫'
      },
      {
        id: 'c4.1.5',
        type: 'multiple-choice',
        question: '📚 What does Hudson do while watching Mr. Fluffbutt? 📝',
        options: ['Plays games', 'Does homework', 'Takes a nap', 'Watches TV'],
        answer: 'Does homework',
        explanation: '✏️ Hudson does his homework while keeping me company! 📚'
      },
      {
        id: 'c4.1.6',
        type: 'multiple-choice',
        question: '🎵 What does Hudson do that makes Mr. Fluffbutt happy? 🐱',
        options: ['Dances', 'Hums', 'Claps', 'Jumps'],
        answer: 'Hums',
        explanation: '🎵 Hudson hums such nice songs that make me purr! 🎶'
      },
      {
        id: 'c4.1.7',
        type: 'multiple-choice',
        question: '👥 Who owns Mr. Fluffbutt? 🏠',
        options: ['Hudson', 'Miss Meyers', 'Mom', 'Dad'],
        answer: 'Miss Meyers',
        explanation: '🏠 Miss Meyers is my human! Though I own the house, really! 😺'
      },
      {
        id: 'c4.1.8',
        type: 'multiple-choice',
        question: '❓ Is $10 enough to buy the bike? 🤔',
        options: ['Yes', 'No'],
        answer: 'No',
        explanation: '💰 No, Hudson needs much more than $10 for the bike! 🚲'
      },
      {
        id: 'c4.1.9',
        type: 'multiple-choice',
        question: '📅 How many days did Miss Meyers ask Hudson to watch Mr. Fluffbutt? 🐱',
        options: ['3 days', '4 days', '5 days', '6 days'],
        answer: '5 days',
        explanation: '📅 Monday to Friday makes 5 days! Purr-fect counting! 🌟'
      },
      {
        id: 'c4.1.10',
        type: 'multiple-choice',
        question: '🐱 Where does Mr. Fluffbutt like to sit when new people visit? 🪑',
        options: ['Under the bed', 'On his perch', 'By the door', 'On the couch'],
        answer: 'On his perch',
        explanation: '👑 I like to sit on my royal perch and observe my subjects! 🐾'
      }
    ],
    age6to7: [
      {
        id: 'c4.2.1',
        type: 'multiple-choice',
        question: '💰 If Hudson makes $10 each day watching Mr. Fluffbutt, how much will he make in 5 days? 🐱',
        options: ['$40', '$50', '$45', '$55'],
        answer: '$50',
        explanation: '🌟 $10 × 5 days = $50! Purr-fect multiplication! 🧮'
      },
      {
        id: 'c4.2.2',
        type: 'multiple-choice',
        question: '🚲 The bike costs $500. If Hudson has $10 now, how much MORE money does he need? 💵',
        options: ['$490', '$480', '$500', '$400'],
        answer: '$490',
        explanation: '🎯 $500 - $10 = $490! Keep saving, Hudson! 💪'
      },
      {
        id: 'c4.2.3',
        type: 'multiple-choice',
        question: '📅 How many days are there from Monday to Friday? 🤔',
        options: ['3 days', '4 days', '5 days', '6 days'],
        answer: '5 days',
        explanation: '📊 Monday through Friday = 5 days of cat-sitting! 🌟'
      },
      {
        id: 'c4.2.4',
        type: 'multiple-choice',
        question: '⏰ If Hudson spends 1 hour with Mr. Fluffbutt each day, how many hours in 5 days? ⌛',
        options: ['3 hours', '4 hours', '5 hours', '6 hours'],
        answer: '5 hours',
        explanation: '⏰ 1 hour × 5 days = 5 hours with the magnificent Mr. Fluffbutt! 🐱'
      },
      {
        id: 'c4.2.5',
        type: 'multiple-choice',
        question: '💰 If Hudson saves $50 each week, how many weeks of saving will he need for the $500 bike? 🚲',
        options: ['8 weeks', '10 weeks', '12 weeks', '14 weeks'],
        answer: '10 weeks',
        explanation: '🧮 $500 ÷ $50 = 10 weeks! Smart calculating! 📊'
      },
      {
        id: 'c4.2.6',
        type: 'multiple-choice',
        question: '📝 If Hudson does homework for 30 minutes while watching Mr. Fluffbutt, how many minutes in 5 days? ⏱️',
        options: ['100 minutes', '150 minutes', '200 minutes', '250 minutes'],
        answer: '150 minutes',
        explanation: '⏰ 30 minutes × 5 days = 150 minutes of homework time! 📚'
      },
      {
        id: 'c4.2.7',
        type: 'multiple-choice',
        question: '💵 If Hudson gets $10 per day, how much money will he have after 3 days? 💰',
        options: ['$20', '$25', '$30', '$35'],
        answer: '$30',
        explanation: '🎯 $10 × 3 days = $30! Counting like a pro! 🌟'
      },
      {
        id: 'c4.2.8',
        type: 'multiple-choice',
        question: '🐱 If Mr. Fluffbutt takes a 10-minute nap 4 times during Hudson\'s visit, how many minutes does he nap? 😺',
        options: ['30 minutes', '40 minutes', '50 minutes', '60 minutes'],
        answer: '40 minutes',
        explanation: '😴 10 minutes × 4 naps = 40 minutes of beauty rest! 🌙'
      },
      {
        id: 'c4.2.9',
        type: 'multiple-choice',
        question: '📊 If Hudson saves $10 today and $20 tomorrow, how much will he have? 💵',
        options: ['$25', '$30', '$35', '$40'],
        answer: '$30',
        explanation: '💰 $10 + $20 = $30! Adding like a mathematician! ➕'
      },
      {
        id: 'c4.2.10',
        type: 'multiple-choice',
        question: '🎯 If the bike costs $500 and Hudson saves $100, what fraction has he saved? 🚲',
        options: ['1/3', '1/4', '1/5', '1/6'],
        answer: '1/5',
        explanation: '📊 $100 is 1/5 of $500! Fractions are fun! 🎨'
      }
    ],
    age8to9: [
      {
        id: 'c4.3.1',
        type: 'multiple-choice',
        question: '💰 If Hudson makes $10 each day watching Mr. Fluffbutt on weekdays, how much will he make in 3 weeks? 🐱',
        options: ['$100', '$150', '$200', '$250'],
        answer: '$150',
        explanation: '🧮 $10 × 5 days × 3 weeks = $150! Excellent multiplication! 🌟'
      },
      {
        id: 'c4.3.2',
        type: 'multiple-choice',
        question: '🚲 If Hudson has saved $200 for the bike that costs $500, how much more does he need? 💵',
        options: ['$200', '$250', '$300', '$350'],
        answer: '$300',
        explanation: '🎯 $500 - $200 = $300 more needed! Keep saving! 💪'
      },
      {
        id: 'c4.3.3',
        type: 'multiple-choice',
        question: '⏰ If Hudson spends 1 hour and 15 minutes with Mr. Fluffbutt each day, how many hours is that in a 5-day week? ⌛',
        options: ['5 hours', '6 hours', '6.25 hours', '7 hours'],
        answer: '6.25 hours',
        explanation: '⏱️ (75 minutes × 5) ÷ 60 = 6.25 hours! Time calculation master! 🌟'
      },
      {
        id: 'c4.3.4',
        type: 'multiple-choice',
        question: '💵 If Hudson saves $10 each weekday and $5 each weekend day, how much will he save in 2 weeks? 💰',
        options: ['$110', '$120', '$130', '$140'],
        answer: '$120',
        explanation: '🧮 ($10 × 10 weekdays) + ($5 × 4 weekend days) = $120! Smart saving! 💫'
      },
      {
        id: 'c4.3.5',
        type: 'multiple-choice',
        question: '📊 If Hudson has $50 and spends $15 on supplies and $20 on food, how much money does he have left? 🤔',
        options: ['$10', '$15', '$20', '$25'],
        answer: '$15',
        explanation: '💰 $50 - $15 - $20 = $15! Careful budgeting! ✨'
      },
      {
        id: 'c4.3.6',
        type: 'multiple-choice',
        question: '🎯 If Hudson needs $500 for the bike and saves $45 each week, how many complete weeks will it take? 📅',
        options: ['10 weeks', '11 weeks', '12 weeks', '13 weeks'],
        answer: '12 weeks',
        explanation: '🧮 $500 ÷ $45 = 11.11 weeks, so he needs 12 full weeks! 📊'
      },
      {
        id: 'c4.3.7',
        type: 'multiple-choice',
        question: '⏱️ If Hudson spends 45 minutes with Mr. Fluffbutt each weekday, how many total minutes in 2 weeks? ⌛',
        options: ['350 minutes', '400 minutes', '450 minutes', '500 minutes'],
        answer: '450 minutes',
        explanation: '⏰ 45 minutes × 5 days × 2 weeks = 450 minutes! Time flies! 🌟'
      },
      {
        id: 'c4.3.8',
        type: 'multiple-choice',
        question: '🤔 If Hudson makes $50 this week but spends $12 on supplies, what\'s his actual savings? 💵',
        options: ['$33', '$38', '$42', '$48'],
        answer: '$38',
        explanation: '🎯 $50 - $12 = $38 saved! Every dollar counts! 💪',
      },
      {
        id: 'c4.3.9',
        type: 'multiple-choice',
        question: '📚 If Hudson does homework for 40 minutes while watching Mr. Fluffbutt each day, how many hours of homework in 2 weeks (weekdays only)? 📝',
        options: ['5.5 hours', '6.5 hours', '6.75 hours', '7 hours'],
        answer: '6.75 hours',
        explanation: '📊 (40 minutes × 10 days) ÷ 60 = 6.75 hours! Study champion! 🌟'
      },
      {
        id: 'c4.3.10',
        type: 'multiple-choice',
        question: '🐱 If Mr. Fluffbutt takes three 15-minute naps during each visit, how many hours does he nap in a 5-day week? 😺',
        options: ['2 hours', '2.5 hours', '3 hours', '3.75 hours'],
        answer: '3.75 hours',
        explanation: '😴 (15 minutes × 3 naps × 5 days) ÷ 60 = 3.75 hours of beauty rest! 🌙'
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
        explanation: '🌟 $50 + $29 = $79! Excellent progress! 🐾'
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
  chapter5
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