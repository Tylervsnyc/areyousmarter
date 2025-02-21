import type { ChapterData, Theme } from '../types'

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

// Export all chapters
const chapters: Record<string, ChapterData> = {
  chapter1
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