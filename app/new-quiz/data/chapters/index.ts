import type { ChapterData } from '../../types'

const defaultTheme = {
  pattern: 'dots' as const,
  tone: 'light' as const
}

export const chapters: Record<string, ChapterData> = {
  "chapter1": {
    "id": "chapter1",
    "title": "Are You Smarter Than Mr. Fluffbutt?",
    "subtitle": "The Beginning",
    "readStoryLink": "/stories/chapter1",
    "theme": {
      "pattern": "dots",
      "tone": "light"
    },
    "questions": {
      "age4to5": [
        {
          "id": "c1.1.1",
          "type": "multiple-choice",
          "question": "How much money did Miss Meyers give Hudson for watching me?",
          "options": [
            "$5",
            "$10",
            "$15",
            "$20"
          ],
          "answer": "$10",
          "explanation": "Miss Meyers gave Hudson $10 for being such a good cat-sitter!"
        },
        {
          "id": "c1.1.2",
          "type": "multiple-choice",
          "question": "What color is the beautiful bike Hudson wants?",
          "options": [
            "Blue",
            "Green",
            "Red",
            "Yellow"
          ],
          "answer": "Red",
          "explanation": "It's a shiny red bike! Just like my favorite toy mouse!"
        },
        {
          "id": "c1.1.3",
          "type": "multiple-choice",
          "question": "When does Hudson come to visit me?",
          "options": [
            "Before school",
            "After school",
            "At night",
            "During lunch"
          ],
          "answer": "After school",
          "explanation": "Hudson comes to see me after school every day!"
        },
        {
          "id": "c1.1.4",
          "type": "multiple-choice",
          "question": "How much does the bike cost?",
          "options": [
            "$100",
            "$200",
            "$500",
            "$1000"
          ],
          "answer": "$500",
          "explanation": "The bike costs $500! That is a lot of cat treats!"
        },
        {
          "id": "c1.1.5",
          "type": "multiple-choice",
          "question": "🐱 💰 \udcda What does Hudson do while watching Mr. Fluffbutt? \udcdd",
          "options": [
            "Plays games",
            "Does homework",
            "Takes a nap",
            "Watches TV"
          ],
          "answer": "Does homework",
          "explanation": "🌟 ✏️ Hudson does his homework while keeping me company! 📚"
        },
        {
          "id": "c1.1.6",
          "type": "multiple-choice",
          "question": "🐱 💰 🎵 What does Hudson do that makes Mr. Fluffbutt happy?",
          "options": [
            "Dances",
            "Hums",
            "Claps",
            "Jumps"
          ],
          "answer": "Hums",
          "explanation": "🌟 🎵 Hudson hums such nice songs that make me purr! 🎶"
        },
        {
          "id": "c1.1.7",
          "type": "multiple-choice",
          "question": "🐱 💰 \udc65 Who owns Mr. Fluffbutt? 🏠",
          "options": [
            "Hudson",
            "Miss Meyers",
            "Mom",
            "Dad"
          ],
          "answer": "Miss Meyers",
          "explanation": "🌟 🏠 Miss Meyers is my human! Though I own the house, really! 😺"
        },
        {
          "id": "c1.1.8",
          "type": "multiple-choice",
          "question": "❓ Is $10 enough to buy the bike? 🤔",
          "options": [
            "Yes, exactly enough",
            "No, need much more",
            "Almost enough",
            "Need to check the price"
          ],
          "answer": "No, need much more",
          "explanation": "No, Hudson needs much more than $10 for the bike!"
        },
        {
          "id": "c1.1.9",
          "type": "multiple-choice",
          "question": "🐱 💰 \udcc5 How many days did Miss Meyers ask Hudson to watch Mr. Fluffbutt?",
          "options": [
            "3 days",
            "4 days",
            "5 days",
            "6 days"
          ],
          "answer": "5 days",
          "explanation": "🌟 📅 Monday to Friday makes 5 days! Purr-fect counting!"
        },
        {
          "id": "c1.1.10",
          "type": "multiple-choice",
          "question": "🐱 💰 Where does Mr. Fluffbutt like to sit when new people visit? 🪑",
          "options": [
            "Under the bed",
            "On his perch",
            "By the door",
            "On the couch"
          ],
          "answer": "On his perch",
          "explanation": "🌟 👑 I like to sit on my royal perch and observe my subjects! 🐾"
        }
      ],
      "age6to7": [
        {
          "id": "c1.2.1",
          "type": "multiple-choice",
          "question": "💰 If Hudson makes $10 each day watching Mr. Fluffbutt, how much will he make in 5 days? 🐱",
          "options": [
            "$40",
            "$50",
            "$45",
            "$55"
          ],
          "answer": "$50",
          "explanation": "🌟 $10 × 5 days = $50! Purr-fect multiplication! 🧮"
        },
        {
          "id": "c1.2.2",
          "type": "multiple-choice",
          "question": "🐱 💰 \udeb2 The bike costs $500. If Hudson has $10 now, how much MORE money does he need? \udcb5",
          "options": [
            "$490",
            "$480",
            "$500",
            "$400"
          ],
          "answer": "$490",
          "explanation": "🌟 🎯 $500 - $10 = $490! Keep saving, Hudson! 💪"
        },
        {
          "id": "c1.2.3",
          "type": "multiple-choice",
          "question": "🐱 💰 \udcc5 How many days are there from Monday to Friday? 🤔",
          "options": [
            "3 days",
            "4 days",
            "5 days",
            "6 days"
          ],
          "answer": "5 days",
          "explanation": "🌟 📊 Monday through Friday = 5 days of cat-sitting!"
        },
        {
          "id": "c1.2.4",
          "type": "multiple-choice",
          "question": "🐱 💰 ⏰ If Hudson spends 1 hour with Mr. Fluffbutt each day, how many hours in 5 days? ⌛",
          "options": [
            "3 hours",
            "4 hours",
            "5 hours",
            "6 hours"
          ],
          "answer": "5 hours",
          "explanation": "🌟 ⏰ 1 hour × 5 days = 5 hours with the magnificent Mr. Fluffbutt! 🐱"
        },
        {
          "id": "c1.2.5",
          "type": "multiple-choice",
          "question": "🐱 💰 If Hudson saves $50 each week, how many weeks of saving will he need for the $500 bike? \udeb2",
          "options": [
            "8 weeks",
            "10 weeks",
            "12 weeks",
            "14 weeks"
          ],
          "answer": "10 weeks",
          "explanation": "🌟 🧮 $500 ÷ $50 = 10 weeks! Smart calculating! 📊"
        },
        {
          "id": "c1.2.6",
          "type": "multiple-choice",
          "question": "🐱 💰 \udcdd If Hudson does homework for 30 minutes while watching Mr. Fluffbutt, how many minutes in 5 days? ⏱️",
          "options": [
            "100 minutes",
            "150 minutes",
            "200 minutes",
            "250 minutes"
          ],
          "answer": "150 minutes",
          "explanation": "🌟 ⏰ 30 minutes × 5 days = 150 minutes of homework time! 📚"
        },
        {
          "id": "c1.2.7",
          "type": "multiple-choice",
          "question": "🐱 💰 \udcb5 If Hudson gets $10 per day, how much money will he have after 3 days?",
          "options": [
            "$20",
            "$25",
            "$30",
            "$35"
          ],
          "answer": "$30",
          "explanation": "🌟 🎯 $10 × 3 days = $30! Counting like a pro!"
        },
        {
          "id": "c1.2.8",
          "type": "multiple-choice",
          "question": "🐱 💰 If Mr. Fluffbutt takes a 10-minute nap 4 times during Hudson's visit, how many minutes does he nap? \ude3a",
          "options": [
            "30 minutes",
            "40 minutes",
            "50 minutes",
            "60 minutes"
          ],
          "answer": "40 minutes",
          "explanation": "🌟 😴 10 minutes × 4 naps = 40 minutes of beauty rest! 🌙"
        },
        {
          "id": "c1.2.9",
          "type": "multiple-choice",
          "question": "🐱 💰 �� If Hudson saves $10 today and $20 tomorrow, how much will he have? \udcb5",
          "options": [
            "$25",
            "$30",
            "$35",
            "$40"
          ],
          "answer": "$30",
          "explanation": "🌟 💰 $10 + $20 = $30! Adding like a mathematician! ➕"
        },
        {
          "id": "c1.2.10",
          "type": "multiple-choice",
          "question": "🐱 💰 🎯 If the bike costs $500 and Hudson saves $100, what fraction has he saved? \udeb2",
          "options": [
            "1/3",
            "1/4",
            "1/5",
            "1/6"
          ],
          "answer": "1/5",
          "explanation": "🌟 📊 $100 is 1/5 of $500! Fractions are fun! 🎨"
        }
      ],
      "age8to9": [
        {
          "id": "c1.3.1",
          "type": "multiple-choice",
          "question": "💰 If Hudson makes $10 each day watching Mr. Fluffbutt on weekdays, how much will he make in 3 weeks? 🐱",
          "options": [
            "$100",
            "$150",
            "$200",
            "$250"
          ],
          "answer": "$150",
          "explanation": "🌟 🧮 $10 × 5 days × 3 weeks = $150! Excellent multiplication!"
        },
        {
          "id": "c1.3.2",
          "type": "multiple-choice",
          "question": "🐱 💰 \udeb2 If Hudson has saved $200 for the bike that costs $500, how much more does he need? \udcb5",
          "options": [
            "$200",
            "$250",
            "$300",
            "$350"
          ],
          "answer": "$300",
          "explanation": "🌟 🎯 $500 - $200 = $300 more needed! Keep saving! 💪"
        },
        {
          "id": "c1.3.3",
          "type": "multiple-choice",
          "question": "🐱 💰 ⏰ If Hudson spends 1 hour and 15 minutes with Mr. Fluffbutt each day, how many hours is that in a 5-day week? ⌛",
          "options": [
            "5 hours",
            "6 hours",
            "6.25 hours",
            "7 hours"
          ],
          "answer": "6.25 hours",
          "explanation": "🌟 ⏱️ (75 minutes × 5) ÷ 60 = 6.25 hours! Time calculation master!"
        },
        {
          "id": "c1.3.4",
          "type": "multiple-choice",
          "question": "🐱 💰 \udcb5 If Hudson saves $10 each weekday and $5 each weekend day, how much will he save in 2 weeks?",
          "options": [
            "$110",
            "$120",
            "$130",
            "$140"
          ],
          "answer": "$120",
          "explanation": "🌟 🧮 ($10 × 10 weekdays) + ($5 × 4 weekend days) = $120! Smart saving! 💫"
        },
        {
          "id": "c1.3.5",
          "type": "multiple-choice",
          "question": "🐱 💰 \udcca If Hudson has $50 and spends $15 on supplies and $20 on food, how much money does he have left? 🤔",
          "options": [
            "$10",
            "$15",
            "$20",
            "$25"
          ],
          "answer": "$15",
          "explanation": "🌟 💰 $50 - $15 - $20 = $15! Careful budgeting! ✨"
        },
        {
          "id": "c1.3.6",
          "type": "multiple-choice",
          "question": "🐱 💰 🎯 If Hudson needs $500 for the bike and saves $45 each week, how many complete weeks will it take? \udcc5",
          "options": [
            "10 weeks",
            "11 weeks",
            "12 weeks",
            "13 weeks"
          ],
          "answer": "12 weeks",
          "explanation": "🌟 🧮 $500 ÷ $45 = 11.11 weeks, so he needs 12 full weeks! 📊"
        },
        {
          "id": "c1.3.7",
          "type": "multiple-choice",
          "question": "🐱 💰 ⏱️ If Hudson spends 45 minutes with Mr. Fluffbutt each weekday, how many total minutes in 2 weeks? ⌛",
          "options": [
            "350 minutes",
            "400 minutes",
            "450 minutes",
            "500 minutes"
          ],
          "answer": "450 minutes",
          "explanation": "🌟 ⏰ 45 minutes × 5 days × 2 weeks = 450 minutes! Time flies!"
        },
        {
          "id": "c1.3.8",
          "type": "multiple-choice",
          "question": "🐱 💰 If Hudson makes $50 this week but spends $12 on supplies, what is his actual savings? \udcb5",
          "options": [
            "$33",
            "$38",
            "$42",
            "$48"
          ],
          "answer": "$38",
          "explanation": "🌟 🎯 $50 - $12 = $38 saved! Every dollar counts! 💪"
        },
        {
          "id": "c1.3.9",
          "type": "multiple-choice",
          "question": "🐱 💰 \udcda If Hudson does homework for 40 minutes while watching Mr. Fluffbutt each day, how many hours of homework in 2 weeks (weekdays only)? \udcdd",
          "options": [
            "5.5 hours",
            "6.5 hours",
            "6.75 hours",
            "7 hours"
          ],
          "answer": "6.75 hours",
          "explanation": "🌟 📊 (40 minutes × 10 days) ÷ 60 = 6.75 hours! Study champion!"
        },
        {
          "id": "c1.3.10",
          "type": "multiple-choice",
          "question": "🐱 💰 If Mr. Fluffbutt takes three 15-minute naps during each visit, how many hours does he nap in a 5-day week? \ude3a",
          "options": [
            "2 hours",
            "2.5 hours",
            "3 hours",
            "3.75 hours"
          ],
          "answer": "3.75 hours",
          "explanation": "🌟 😴 (15 minutes × 3 naps × 5 days) ÷ 60 = 3.75 hours of beauty rest! 🌙"
        }
      ]
    }
  },
  "chapter2": {
    "id": "chapter2",
    "title": "Are You Smarter Than Mr. Fluffbutt?",
    "subtitle": "A Big Three Dollar Gamble",
    "readStoryLink": "/stories/chapter2",
    "theme": {
      "pattern": "dots",
      "tone": "light"
    },
    "questions": {
      "age4to5": [
        {
          "id": "c2.1.1",
          "type": "multiple-choice",
          "question": "🐱 How much money does Hudson start with today? 💰",
          "options": [
            "$5",
            "$10",
            "$15",
            "$20"
          ],
          "answer": "$10",
          "explanation": "🌟 Hudson starts with $10 in his pocket! Purr-fect counting! 🐾"
        },
        {
          "id": "c2.1.2",
          "type": "multiple-choice",
          "question": "🐱 💰 \udcdd How much do the flyers cost Hudson? \udcb5",
          "options": [
            "$2",
            "$3",
            "$4",
            "$5"
          ],
          "answer": "$3",
          "explanation": "🌟 💰 The flyers cost $3! Good remembering! ⭐"
        },
        {
          "id": "c2.1.3",
          "type": "multiple-choice",
          "question": "🐱 How much does Mr. Fluffbutt pay Hudson each day? 💰",
          "options": [
            "$5",
            "$10",
            "$15",
            "$20"
          ],
          "answer": "$10",
          "explanation": "🌟 👑 $10 for the honor of my royal presence! Purr-fect! ⭐"
        },
        {
          "id": "c2.1.4",
          "type": "multiple-choice",
          "question": "🐱 💰 \udc1c How much does Hudson make watching the ant farm each day? \udcb5",
          "options": [
            "$3",
            "$4",
            "$5",
            "$6"
          ],
          "answer": "$5",
          "explanation": "🌟 $5 for watching those tiny creatures! Good job! 🐾"
        },
        {
          "id": "c2.1.5",
          "type": "multiple-choice",
          "question": "🐱 💰 \udcc5 How many days does Hudson watch Mr. Fluffbutt? ⏰",
          "options": [
            "3 days",
            "4 days",
            "5 days",
            "6 days"
          ],
          "answer": "5 days",
          "explanation": "🌟 😺 5 wonderful days with me! Nice counting! ⭐"
        },
        {
          "id": "c2.1.6",
          "type": "multiple-choice",
          "question": "🐱 💰 \udc1c How many days does Hudson watch the ant farm? ⏰",
          "options": [
            "2 days",
            "3 days",
            "4 days",
            "5 days"
          ],
          "answer": "3 days",
          "explanation": "🌟 3 days of ant-watching! Well counted! 💫"
        },
        {
          "id": "c2.1.7",
          "type": "multiple-choice",
          "question": "🐱 💰 Who pays Hudson more each day - Mr. Fluffbutt or the ant farm? 🤔",
          "options": [
            "Mr. Fluffbutt",
            "Ant farm",
            "Same amount",
            "Neither one"
          ],
          "answer": "Mr. Fluffbutt",
          "explanation": "🌟 👑 Of course I pay more! I am royalty! ✨"
        },
        {
          "id": "c2.1.8",
          "type": "multiple-choice",
          "question": "🐱 💰 \udcdd What does Hudson buy to tell people about his pet sitting? 🤔",
          "options": [
            "Books",
            "Cards",
            "Flyers",
            "Signs"
          ],
          "answer": "Flyers",
          "explanation": "🌟 Hudson bought flyers to spread the word! Smart! 💫"
        },
        {
          "id": "c2.1.9",
          "type": "multiple-choice",
          "question": "🐱 💰 What animal does Hudson watch first? \udcad",
          "options": [
            "Dog",
            "Cat",
            "Bird",
            "Ants"
          ],
          "answer": "Cat",
          "explanation": "🌟 😺 He watches me, Mr. Fluffbutt, first! Purr-fect! ⭐"
        },
        {
          "id": "c2.1.10",
          "type": "multiple-choice",
          "question": "🐱 💰 Does Hudson make more money this week than last week? 🤔",
          "options": [
            "Yes",
            "No",
            "Same amount",
            "Not sure"
          ],
          "answer": "Yes",
          "explanation": "🌟 Yes! Hudson made more money this week! Way to go! 🎉"
        }
      ],
      "age6to7": [
        {
          "id": "c2.2.1",
          "type": "multiple-choice",
          "question": "💰 If Mr. Fluffbutt pays $10 per day for 5 days, how much money does Hudson earn? 🐱",
          "options": [
            "$40",
            "$50",
            "$60",
            "$70"
          ],
          "answer": "$50",
          "explanation": "🌟 🧮 $10 × 5 days = $50! Purr-fect multiplication! ⭐"
        },
        {
          "id": "c2.2.2",
          "type": "multiple-choice",
          "question": "🐱 💰 \udc1c If the ant farm pays $5 per day for 3 days, how much money is that? \udcb5",
          "options": [
            "$10",
            "$15",
            "$20",
            "$25"
          ],
          "answer": "$15",
          "explanation": "🌟 💰 $5 × 3 days = $15! Great calculating!"
        },
        {
          "id": "c2.2.3",
          "type": "multiple-choice",
          "question": "🐱 💰 \udcca How much money does Hudson make from both jobs together?",
          "options": [
            "$55",
            "$65",
            "$75",
            "$85"
          ],
          "answer": "$65",
          "explanation": "🌟 ✨ $50 + $15 = $65! Excellent addition! 🎈"
        },
        {
          "id": "c2.2.4",
          "type": "multiple-choice",
          "question": "🐱 💰 \udcb5 If Hudson starts with $10 and spends $3 on flyers, how much money is left? \udcdd",
          "options": [
            "$5",
            "$7",
            "$9",
            "$11"
          ],
          "answer": "$7",
          "explanation": "🌟 🧮 $10 - $3 = $7! Smart subtraction!"
        },
        {
          "id": "c2.2.5",
          "type": "multiple-choice",
          "question": "🐱 💰 ⏰ If Hudson spends 1 hour at each job, how many hours does he work in 3 days? ⌛",
          "options": [
            "3 hours",
            "4 hours",
            "5 hours",
            "6 hours"
          ],
          "answer": "6 hours",
          "explanation": "🌟 ⏱️ 1 hour × 2 jobs × 3 days = 6 hours! Time flies! 🕒"
        },
        {
          "id": "c2.2.6",
          "type": "multiple-choice",
          "question": "🐱 How much more does Mr. Fluffbutt pay than the ant farm per day? 💰",
          "options": [
            "$3",
            "$5",
            "$7",
            "$9"
          ],
          "answer": "$5",
          "explanation": "🌟 💫 $10 - $5 = $5 more! Royal wages! 👑"
        },
        {
          "id": "c2.2.7",
          "type": "multiple-choice",
          "question": "🐱 💰 \udcca What's Hudson's total money after paying for flyers? \udcb5",
          "options": [
            "$62",
            "$65",
            "$67",
            "$70"
          ],
          "answer": "$62",
          "explanation": "🌟 🎯 $65 - $3 = $62! Perfect calculation! 💪"
        },
        {
          "id": "c2.2.8",
          "type": "multiple-choice",
          "question": "🐱 💰 \udd52 If Hudson works both jobs for 2 days, how much money does he make?",
          "options": [
            "$20",
            "$25",
            "$30",
            "$35"
          ],
          "answer": "$30",
          "explanation": "🌟 🧮 ($10 + $5) × 2 days = $30! Great math! ⭐"
        },
        {
          "id": "c2.2.9",
          "type": "multiple-choice",
          "question": "🐱 💰 \udcb5 How much does Hudson make in one day from both jobs?",
          "options": [
            "$10",
            "$15",
            "$20",
            "$25"
          ],
          "answer": "$15",
          "explanation": "🌟 💫 $10 + $5 = $15 per day! Nice addition!"
        },
        {
          "id": "c2.2.10",
          "type": "multiple-choice",
          "question": "🐱 💰 \udcc8 How much money does Hudson have at the end of the week?",
          "options": [
            "$62",
            "$72",
            "$82",
            "$92"
          ],
          "answer": "$72",
          "explanation": "🌟 🎯 $10 start + $62 profit = $72! Well done!"
        }
      ],
      "age8to9": [
        {
          "id": "c2.3.1",
          "type": "multiple-choice",
          "question": "🐱 💰 If Hudson makes $15 daily from both jobs, how much will he make in 2 weeks (working 5 days each week)? \udcca",
          "options": [
            "$120",
            "$150",
            "$180",
            "$200"
          ],
          "answer": "$150",
          "explanation": "🌟 🧮 $15 × 5 days × 2 weeks = $150! Excellent multiplication!"
        },
        {
          "id": "c2.3.2",
          "type": "multiple-choice",
          "question": "🐱 💰 ⏰ If Hudson spends 45 minutes at each job, how many total minutes does he work in one day? ⌛",
          "options": [
            "45 minutes",
            "60 minutes",
            "90 minutes",
            "120 minutes"
          ],
          "answer": "90 minutes",
          "explanation": "🌟 ⏱️ 45 minutes × 2 jobs = 90 minutes! Time master! 🕒"
        },
        {
          "id": "c2.3.3",
          "type": "multiple-choice",
          "question": "🐱 💰 \udcca If flyers cost $3 for 10 flyers, how many flyers can Hudson get for $9? \udcdd",
          "options": [
            "20 flyers",
            "25 flyers",
            "30 flyers",
            "35 flyers"
          ],
          "answer": "30 flyers",
          "explanation": "🌟 🎯 ($9 ÷ $3) × 10 = 30 flyers! Smart calculating! 📈"
        },
        {
          "id": "c2.3.4",
          "type": "multiple-choice",
          "question": "🐱 💰 \udcb5 If Hudson saves $62 this week and $72 next week, what is his total savings?",
          "options": [
            "$124",
            "$134",
            "$144",
            "$154"
          ],
          "answer": "$134",
          "explanation": "🌟 💫 $62 + $72 = $134! Adding like a pro!"
        },
        {
          "id": "c2.3.5",
          "type": "multiple-choice",
          "question": "🐱 💰 ⏰ How many total hours does Hudson work in 5 days if he spends 2 hours each day? ⌛",
          "options": [
            "8 hours",
            "10 hours",
            "12 hours",
            "14 hours"
          ],
          "answer": "10 hours",
          "explanation": "🌟 🕒 2 hours × 5 days = 10 hours! Time flies! ⭐"
        },
        {
          "id": "c2.3.6",
          "type": "multiple-choice",
          "question": "🐱 💰 \udcc8 If Hudson has expenses of $3 for flyers and $7 for supplies, what is his profit from $65 earnings?",
          "options": [
            "$45",
            "$50",
            "$55",
            "$60"
          ],
          "answer": "$55",
          "explanation": "🌟 🧮 $65 - $3 - $7 = $55! Perfect profit calculation! 💫"
        },
        {
          "id": "c2.3.7",
          "type": "multiple-choice",
          "question": "🐱 💰 ⏱️ If Hudson spends 30 minutes traveling between jobs each day, how many hours is that in 4 days? \udeb6",
          "options": [
            "1 hour",
            "2 hours",
            "3 hours",
            "4 hours"
          ],
          "answer": "2 hours",
          "explanation": "🌟 🕒 30 minutes × 4 days = 120 minutes = 2 hours! ⭐"
        },
        {
          "id": "c2.3.8",
          "type": "multiple-choice",
          "question": "🐱 💰 \udcb5 If Hudson makes $15 per day, how much will he make in 3 weeks (working Monday-Friday)?",
          "options": [
            "$185",
            "$215",
            "$225",
            "$235"
          ],
          "answer": "$225",
          "explanation": "🌟 📊 $15 × 5 days × 3 weeks = $225! Multiplication master!"
        },
        {
          "id": "c2.3.9",
          "type": "multiple-choice",
          "question": "🐱 💰 \udcdd If each flyer takes 3 minutes to put up, how many minutes to put up 15 flyers? ⏰",
          "options": [
            "35 minutes",
            "40 minutes",
            "45 minutes",
            "50 minutes"
          ],
          "answer": "45 minutes",
          "explanation": "🌟 ⌛ 3 minutes × 15 flyers = 45 minutes! Time management! 🕒"
        },
        {
          "id": "c2.3.10",
          "type": "multiple-choice",
          "question": "🐱 💰 🧮 If Hudson makes $15 per day for 3 days, then $10 for 2 days, what's his total for the week?",
          "options": [
            "$55",
            "$65",
            "$75",
            "$85"
          ],
          "answer": "$65",
          "explanation": "🌟 💫 ($15 × 3) + ($10 × 2) = $45 + $20 = $65! Complex calculation master!"
        }
      ]
    }
  },
  "chapter3": {
    "id": "chapter3",
    "title": "Are You Smarter Than Mr. Fluffbutt?",
    "subtitle": "The Pet-Sitting Empire",
    "readStoryLink": "/stories/chapter3",
    "theme": {
      "pattern": "dots",
      "tone": "light"
    },
    "questions": {
      "age4to5": [
        {
          "id": "c3.1.1",
          "type": "multiple-choice",
          "question": "🐱 If Hudson had $72 last week and spent $10 on supplies, how much money does he have at the start of this week? 💰",
          "options": [
            "$52",
            "$62",
            "$72",
            "$82"
          ],
          "answer": "$62",
          "explanation": "🌟 $72 - $10 = $62! Great subtraction! 🐾"
        },
        {
          "id": "c3.1.2",
          "type": "multiple-choice",
          "question": "🐱 💰 🦮 What kind of dog is Edie the furball? \udc15",
          "options": [
            "Big scary dog",
            "Small friendly dog",
            "Medium quiet dog",
            "Huge loud dog"
          ],
          "answer": "Small friendly dog",
          "explanation": "🌟 🐾 Edie is a small, friendly dog! Perfect for walking!"
        },
        {
          "id": "c3.1.3",
          "type": "multiple-choice",
          "question": "🐱 💰 🦜 What does Joseph do that makes Hudson need ear plugs? \udd0a",
          "options": [
            "Sings",
            "Squawks",
            "Whispers",
            "Hums"
          ],
          "answer": "Squawks",
          "explanation": "🌟 🦜 That noisy bird squawks so loud! Ear plugs needed! 👂"
        },
        {
          "id": "c3.1.4",
          "type": "multiple-choice",
          "question": "🐱 💰 \udd77️ What does the tarantula eat? \udc1c",
          "options": [
            "Cat food",
            "Bird food",
            "Crickets",
            "Seeds"
          ],
          "answer": "Crickets",
          "explanation": "🌟 🕷️ The spider eats crickets! Creepy but true! 🐜"
        },
        {
          "id": "c3.1.5",
          "type": "multiple-choice",
          "question": "🐱 💰 \udcdd What does Hudson buy to tell people about his pet sitting? 🤔",
          "options": [
            "Books",
            "Cards",
            "Flyers",
            "Signs"
          ],
          "answer": "Flyers",
          "explanation": "🌟 📄 Hudson uses flyers to find new pets to watch! Smart!"
        },
        {
          "id": "c3.1.6",
          "type": "multiple-choice",
          "question": "🐱 💰 Does Mr. Fluffbutt still let Hudson watch him? \ude3a",
          "options": [
            "Yes",
            "No",
            "Maybe",
            "Not sure"
          ],
          "answer": "Yes",
          "explanation": "🌟 😺 Yes, Mr. Fluffbutt still graces Hudson with his presence! 👑"
        },
        {
          "id": "c3.1.7",
          "type": "multiple-choice",
          "question": "🐱 💰 How much money did Hudson spend on flyers? \udcb5",
          "options": [
            "$8",
            "$10",
            "$12",
            "$14"
          ],
          "answer": "$12",
          "explanation": "🌟 🛍️ Hudson spent $12 on those paper things! 📝"
        },
        {
          "id": "c3.1.8",
          "type": "multiple-choice",
          "question": "🐱 💰 \udcb5 How much money did Hudson make from Mr. Fluffbutt?",
          "options": [
            "$5",
            "$10",
            "$15",
            "$20"
          ],
          "answer": "$10",
          "explanation": "🌟 💰 Mr. Fluffbutt let Hudson earn $10! Royal payment! 👑"
        },
        {
          "id": "c3.1.9",
          "type": "multiple-choice",
          "question": "🐱 💰 🤔 Did Hudson make more money than he spent this week? \udcad",
          "options": [
            "Yes",
            "No",
            "Same amount",
            "Not sure"
          ],
          "answer": "No",
          "explanation": "🌟 📉 Spent $12 but made $10 - that's less! Learning time! 💫"
        },
        {
          "id": "c3.1.10",
          "type": "multiple-choice",
          "question": "🐱 💰 How much money does Hudson have at the end?",
          "options": [
            "$50",
            "$55",
            "$60",
            "$65"
          ],
          "answer": "$60",
          "explanation": "🌟 $62 - $12 + $10 = $60! Good counting! 🐾"
        }
      ],
      "age6to7": [
        {
          "id": "c3.2.1",
          "type": "multiple-choice",
          "question": "🐱 If Hudson had $72 last week and spent $10 on supplies, how much money does he have at the start of this week? 💰",
          "options": [
            "$52",
            "$62",
            "$72",
            "$82"
          ],
          "answer": "$62",
          "explanation": "🌟 $72 - $10 = $62! Great subtraction! 🐾"
        },
        {
          "id": "c3.2.2",
          "type": "multiple-choice",
          "question": "🐱 💰 🦮 If Edie needs walking every day, how many walks in 5 days? \udcc5",
          "options": [
            "3 walks",
            "4 walks",
            "5 walks",
            "6 walks"
          ],
          "answer": "5 walks",
          "explanation": "🌟 🐕 One walk each day for 5 days = 5 walks! Nice counting!"
        },
        {
          "id": "c3.2.3",
          "type": "multiple-choice",
          "question": "🐱 💰 🦜 If Joseph gets fed twice a day, how many feedings in 3 days? 🍽️",
          "options": [
            "3 times",
            "4 times",
            "5 times",
            "6 times"
          ],
          "answer": "6 times",
          "explanation": "🌟 🦜 2 feedings × 3 days = 6 feedings! Good multiplication! ⭐"
        },
        {
          "id": "c3.2.4",
          "type": "multiple-choice",
          "question": "🐱 💰 ⏰ If each animal visit takes 30 minutes, how long for 2 animals? ⌛",
          "options": [
            "30 minutes",
            "45 minutes",
            "60 minutes",
            "90 minutes"
          ],
          "answer": "60 minutes",
          "explanation": "🌟 🕒 30 minutes × 2 = 60 minutes! Time master! ⭐"
        },
        {
          "id": "c3.2.5",
          "type": "multiple-choice",
          "question": "🐱 💰 \udecd️ If ear plugs cost $5 and bandaids cost $7, how much together? \udcb5",
          "options": [
            "$10",
            "$12",
            "$13",
            "$15"
          ],
          "answer": "$12",
          "explanation": "🌟 💰 $5 + $7 = $12! Good addition!"
        },
        {
          "id": "c3.2.6",
          "type": "multiple-choice",
          "question": "🐱 💰 How many days does Hudson watch Mr. Fluffbutt this week? \udcc5",
          "options": [
            "1 day",
            "2 days",
            "3 days",
            "4 days"
          ],
          "answer": "2 days",
          "explanation": "🌟 😺 Only 2 days with Mr. Fluffbutt this week! 🐱"
        },
        {
          "id": "c3.2.7",
          "type": "multiple-choice",
          "question": "🐱 💰 How much did Hudson spend on supplies this week? \udcb5",
          "options": [
            "$8",
            "$10",
            "$12",
            "$14"
          ],
          "answer": "$12",
          "explanation": "🌟 🛍️ Spent $12 on new flyers! Good tracking! 📝"
        },
        {
          "id": "c3.2.8",
          "type": "multiple-choice",
          "question": "🐱 💰 \udcb5 How much money did Hudson earn this week?",
          "options": [
            "$5",
            "$10",
            "$15",
            "$20"
          ],
          "answer": "$10",
          "explanation": "🌟 🐱 Made $10 from Mr. Fluffbutt! Keep counting! ⭐"
        },
        {
          "id": "c3.2.9",
          "type": "multiple-choice",
          "question": "🐱 💰 \udcca What's Hudson's profit or loss this week? \udcb5",
          "options": [
            "+$2",
            "$0",
            "-$2",
            "-$4"
          ],
          "answer": "-$2",
          "explanation": "🌟 💫 Spent $12, made $10, that's a $2 loss! Learning about profit! 📈"
        },
        {
          "id": "c3.2.10",
          "type": "multiple-choice",
          "question": "🐱 💰 Starting with $62, spending $12, and making $10, how much does Hudson have now? 🎯",
          "options": [
            "$50",
            "$55",
            "$60",
            "$65"
          ],
          "answer": "$60",
          "explanation": "🌟 🧮 $62 - $12 + $10 = $60! Great calculating! ⭐"
        }
      ],
      "age8to9": [
        {
          "id": "c3.3.1",
          "type": "multiple-choice",
          "question": "🐱 💰 What is Hudson's starting balance this week? \udcca",
          "options": [
            "$52",
            "$62",
            "$72",
            "$82"
          ],
          "answer": "$62",
          "explanation": "🌟 Starting balance is $62 from previous week! Perfect tracking! 💵"
        },
        {
          "id": "c3.3.2",
          "type": "multiple-choice",
          "question": "🐱 💰 ⏰ If each animal visit takes 30 minutes and travel takes 15 minutes, how long for 3 animals? ⌛",
          "options": [
            "90 minutes",
            "105 minutes",
            "120 minutes",
            "135 minutes"
          ],
          "answer": "120 minutes",
          "explanation": "🌟 🕒 (30 mins × 3 pets) + (15 mins travel × 2 trips between pets) = 90 + 30 = 120 minutes! Time management! ⭐"
        },
        {
          "id": "c3.3.3",
          "type": "multiple-choice",
          "question": "🐱 💰 \udcca If flyers cost $12 and Hudson makes $5 per visit, how many visits to break even? \udcb5",
          "options": [
            "2 visits",
            "3 visits",
            "4 visits",
            "5 visits"
          ],
          "answer": "3 visits",
          "explanation": "🌟 🧮 $12 ÷ $5 = 2.4 visits, so need 3 visits! Smart business! 📈"
        },
        {
          "id": "c3.3.4",
          "type": "multiple-choice",
          "question": "🐱 💰 ⏰ How many hours in a week if Hudson spends 2 hours daily with animals? \udd52",
          "options": [
            "8 hours",
            "10 hours",
            "12 hours",
            "14 hours"
          ],
          "answer": "10 hours",
          "explanation": "🌟 ⏰ 2 hours × 5 days = 10 hours! Time calculation master! ⌛"
        },
        {
          "id": "c3.3.5",
          "type": "multiple-choice",
          "question": "🐱 💰 \udcb5 If Hudson charges $5 per visit and does 3 visits daily, what's his potential daily revenue?",
          "options": [
            "$10",
            "$15",
            "$20",
            "$25"
          ],
          "answer": "$15",
          "explanation": "🌟 💫 $5 × 3 visits = $15 potential daily revenue! 📊"
        },
        {
          "id": "c3.3.6",
          "type": "multiple-choice",
          "question": "🐱 If Mr. Fluffbutt pays $5 per visit and Hudson visits twice, what's his actual revenue? 💰",
          "options": [
            "$5",
            "$10",
            "$15",
            "$20"
          ],
          "answer": "$10",
          "explanation": "🌟 💵 $5 × 2 visits = $10 actual revenue! Keep tracking! ⭐"
        },
        {
          "id": "c3.3.7",
          "type": "multiple-choice",
          "question": "🐱 💰 What are Hudson's total expenses this week? \udcca",
          "options": [
            "$8",
            "$10",
            "$12",
            "$14"
          ],
          "answer": "$12",
          "explanation": "🌟 🛍️ Total expenses = $12 for flyers! Expense tracking! 💵"
        },
        {
          "id": "c3.3.8",
          "type": "multiple-choice",
          "question": "🐱 💰 \udcb5 What is Hudson's total revenue this chapter?",
          "options": [
            "$5",
            "$10",
            "$15",
            "$20"
          ],
          "answer": "$10",
          "explanation": "🌟 📈 Total revenue = $10 from Mr. Fluffbutt! Revenue tracking!"
        },
        {
          "id": "c3.3.9",
          "type": "multiple-choice",
          "question": "🐱 💰 \udcca Calculate Hudson's net profit or loss this chapter (Revenue - Expenses): \udcb5",
          "options": [
            "+$2",
            "$0",
            "-$2",
            "-$4"
          ],
          "answer": "-$2",
          "explanation": "🌟 🧮 $10 revenue - $12 expenses = -$2 net loss! Business math! 📈"
        },
        {
          "id": "c3.3.10",
          "type": "multiple-choice",
          "question": "🐱 💰 Calculate Hudson's final balance: Starting $62 + Revenue $10 - Expenses $12 = ? 🎯",
          "options": [
            "$50",
            "$55",
            "$60",
            "$65"
          ],
          "answer": "$60",
          "explanation": "🌟 📊 $62 + $10 - $12 = $60! Final balance mastery! 💫"
        }
      ]
    }
  },
  "chapter4": {
    "id": "chapter4",
    "title": "Are You Smarter Than Mr. Fluffbutt?",
    "subtitle": "Time Management",
    "readStoryLink": "/stories/chapter4",
    "theme": {
      "pattern": "dots",
      "tone": "light"
    },
    "questions": {
      "age4to5": [
        {
          "id": "c4.1.1",
          "type": "multiple-choice",
          "question": "🐱 Hudson starts with $60. His mom gives him $5 for cleaning. How much now? 💰",
          "options": [
            "$55",
            "$60",
            "$65",
            "$70"
          ],
          "answer": "$65",
          "explanation": "🌟 $60 + $5 = $65! Good adding! 🐾"
        },
        {
          "id": "c4.1.2",
          "type": "multiple-choice",
          "question": "🐱 💰 🦮 What kind of dog is Drew-bo? \udc15",
          "options": [
            "Husky that listens",
            "Husky that doesn't listen",
            "Small quiet dog",
            "Big friendly dog"
          ],
          "answer": "Husky that doesn't listen",
          "explanation": "🌟 🐾 Drew-bo is a husky who has a mind of his own and doesn't like to listen!"
        },
        {
          "id": "c4.1.3",
          "type": "multiple-choice",
          "question": "🐱 💰 🦜 What does Joseph do that's noisy? \udd0a",
          "options": [
            "Barks",
            "Meows",
            "Squawks",
            "Whispers"
          ],
          "answer": "Squawks",
          "explanation": "🌟 🦜 Joseph squawks very loud! Ear plugs needed! 👂"
        },
        {
          "id": "c4.1.4",
          "type": "multiple-choice",
          "question": "🐱 💰 \udc15 What happens when Drew-bo sees a squirrel? \udc3f️",
          "options": [
            "Sits quietly",
            "Runs away",
            "Pulls on leash",
            "Takes a nap"
          ],
          "answer": "Pulls on leash",
          "explanation": "🌟 Drew-bo pulls on the leash when he sees squirrels! Strong husky! 🐾"
        },
        {
          "id": "c4.1.5",
          "type": "multiple-choice",
          "question": "🐱 💰 \udecd️ What does Hudson buy for his ears? 🦻",
          "options": [
            "Hat",
            "Ear plugs",
            "Headphones",
            "Nothing"
          ],
          "answer": "Ear plugs",
          "explanation": "🌟 👂 Ear plugs to block Joseph's squawking! Smart! ✨"
        },
        {
          "id": "c4.1.6",
          "type": "multiple-choice",
          "question": "🐱 💰 🎒 What does Hudson carry his supplies in? \udc5c",
          "options": [
            "Box",
            "Bag",
            "Backpack",
            "Basket"
          ],
          "answer": "Backpack",
          "explanation": "🌟 🎒 A big backpack for all his pet stuff! Perfect! 💫"
        },
        {
          "id": "c4.1.7",
          "type": "multiple-choice",
          "question": "🐱 💰 Hudson bought: Bandaids $10, Ear plugs $5, Scoop $30, Cream $20, Backpack $50. Total spent? \udcb5",
          "options": [
            "$105",
            "$110",
            "$115",
            "$120"
          ],
          "answer": "$115",
          "explanation": "🌟 🛍️ Adding everything = $115! Good counting! 📝"
        },
        {
          "id": "c4.1.8",
          "type": "multiple-choice",
          "question": "🐱 💰 \udcb5 Hudson made: $25 walking dogs, $80 other pets. Total earned? \udc3e",
          "options": [
            "$95",
            "$100",
            "$105",
            "$110"
          ],
          "answer": "$105",
          "explanation": "🌟 💰 $25 + $80 = $105! Nice adding! ⭐"
        },
        {
          "id": "c4.1.9",
          "type": "multiple-choice",
          "question": "🐱 💰 🤔 Made $105, spent $115. Did Hudson make or lose money? \udcad",
          "options": [
            "Made money",
            "Lost money",
            "Same money",
            "Not sure"
          ],
          "answer": "Lost money",
          "explanation": "🌟 📉 Spent more than he made! Lost $10! 💫"
        },
        {
          "id": "c4.1.10",
          "type": "multiple-choice",
          "question": "🐱 💰 Started with $60, lost $10. How much money now? 🎯",
          "options": [
            "$40",
            "$45",
            "$50",
            "$55"
          ],
          "answer": "$50",
          "explanation": "🌟 $60 - $10 = $50! Good subtraction! 🐾"
        }
      ],
      "age6to7": [
        {
          "id": "c4.2.1",
          "type": "multiple-choice",
          "question": "🐱 Hudson starts with $60. Made $5 from chores. What's his total? 💰",
          "options": [
            "$55",
            "$60",
            "$65",
            "$70"
          ],
          "answer": "$65",
          "explanation": "🌟 $60 + $5 = $65! Great addition! 🐾"
        },
        {
          "id": "c4.2.2",
          "type": "multiple-choice",
          "question": "🐱 💰 🦮 If Drew-boo needs walking twice daily, how many walks in 3 days? \udcc5",
          "options": [
            "3 walks",
            "4 walks",
            "6 walks",
            "8 walks"
          ],
          "answer": "6 walks",
          "explanation": "🌟 🐕 2 walks × 3 days = 6 walks! Nice counting!"
        },
        {
          "id": "c4.2.3",
          "type": "multiple-choice",
          "question": "🐱 💰 🦮 What happens when Drew-bo sees a squirrel on their walk? \udc3f️",
          "options": [
            "Sits quietly",
            "Takes a nap",
            "Pulls on the leash",
            "Runs away"
          ],
          "answer": "Pulls on the leash",
          "explanation": "🌟 🐕 Drew-bo gets excited and pulls on the leash when he spots squirrels! Strong husky!"
        },
        {
          "id": "c4.2.4",
          "type": "multiple-choice",
          "question": "🐱 💰 ⏰ If each pet visit takes 30 minutes, how long for 2 pets? ⌛",
          "options": [
            "30 minutes",
            "45 minutes",
            "60 minutes",
            "90 minutes"
          ],
          "answer": "60 minutes",
          "explanation": "🌟 🕒 30 minutes × 2 = 60 minutes! Time master! ⭐"
        },
        {
          "id": "c4.2.5",
          "type": "multiple-choice",
          "question": "🐱 💰 🦜 What happened when Hudson tried to feed Joseph the bird? 🤔",
          "options": [
            "Joseph sang to him",
            "Joseph bit him",
            "Joseph flew away",
            "Joseph slept"
          ],
          "answer": "Joseph bit him",
          "explanation": "🌟 🦜 Ouch! Joseph wasn't very friendly and bit Hudson during feeding time! 🤕"
        },
        {
          "id": "c4.2.6",
          "type": "multiple-choice",
          "question": "🐱 💰 Who might be Hudson's new favorite pet? (Though obviously not as amazing as me!) \ude3a",
          "options": [
            "Edie the bichon",
            "Joseph the bird",
            "The quiet ant farm",
            "Mr. Fluffbutt forever"
          ],
          "answer": "Edie the bichon",
          "explanation": "🌟 😾 As much as it pains me to admit, Hudson seems quite taken with that fluffy Edie... though I'm still clearly the most sophisticated! 👑"
        },
        {
          "id": "c4.2.7",
          "type": "multiple-choice",
          "question": "🐱 💰 Supplies cost: Bandaids $10, Plugs $5, Scoop $30, Cream $20, Pack $50. Total? \udcb5",
          "options": [
            "$105",
            "$110",
            "$115",
            "$120"
          ],
          "answer": "$115",
          "explanation": "🌟 🛍️ All supplies = $115! Good adding! 📝"
        },
        {
          "id": "c4.2.8",
          "type": "multiple-choice",
          "question": "🐱 💰 \udcb5 Earnings: Dog walks $25, Pet care $80. Total made? \udc3e",
          "options": [
            "$95",
            "$100",
            "$105",
            "$110"
          ],
          "answer": "$105",
          "explanation": "🌟 💰 $25 + $80 = $105! Nice math! ⭐"
        },
        {
          "id": "c4.2.9",
          "type": "multiple-choice",
          "question": "🐱 💰 🤔 Earned $105, spent $115. What's the difference? \udcad",
          "options": [
            "-$5",
            "-$10",
            "-$15",
            "-$20"
          ],
          "answer": "-$10",
          "explanation": "🌟 📉 $105 - $115 = -$10! Good subtraction! 💫"
        },
        {
          "id": "c4.2.10",
          "type": "multiple-choice",
          "question": "🐱 💰 Had $60, lost $10. Final amount? 🎯",
          "options": [
            "$40",
            "$45",
            "$50",
            "$55"
          ],
          "answer": "$50",
          "explanation": "🌟 $60 - $10 = $50! Perfect math! 🐾"
        }
      ],
      "age8to9": [
        {
          "id": "c4.3.1",
          "type": "multiple-choice",
          "question": "🐱 Starting cash $60, chore money $5, allowance $10. Total? 💰",
          "options": [
            "$70",
            "$75",
            "$80",
            "$85"
          ],
          "answer": "$75",
          "explanation": "🌟 $60 + $5 + $10 = $75! Great addition! 🐾"
        },
        {
          "id": "c4.3.2",
          "type": "multiple-choice",
          "question": "🐱 💰 ⏰ Hudson spends 30 minutes with each pet and needs 15 minutes to travel between pets. For 3 pets in a row, how much total time does he need? ⌛",
          "options": [
            "90 mins",
            "105 mins",
            "120 mins",
            "135 mins"
          ],
          "answer": "120 mins",
          "explanation": "🌟 🕒 Let's break it down: (30 mins × 3 pets) + (15 mins travel × 2 trips between pets) = 90 + 30 = 120 minutes! Time pro! ⭐"
        },
        {
          "id": "c4.3.3",
          "type": "multiple-choice",
          "question": "🐱 💰 \udcca Weekly income: Mon $50, Tue $45, Wed $55, Thu $40, Fri $60. Average daily? \udcb5",
          "options": [
            "$45",
            "$50",
            "$55",
            "$60"
          ],
          "answer": "$50",
          "explanation": "🌟 💰 ($50 + $45 + $55 + $40 + $60) ÷ 5 = $250 ÷ 5 = $50 average! Math whiz! 📈"
        },
        {
          "id": "c4.3.4",
          "type": "multiple-choice",
          "question": "🐱 💰 \udc3e 4 pets, 2 visits each, 5 days. Total weekly visits? \udcc5",
          "options": [
            "30 visits",
            "35 visits",
            "40 visits",
            "45 visits"
          ],
          "answer": "40 visits",
          "explanation": "🌟 🔢 4 pets × 2 visits × 5 days = 40 visits! Perfect multiplication!"
        },
        {
          "id": "c4.3.5",
          "type": "multiple-choice",
          "question": "🐱 💰 \udcb5 If each visit earns $5, weekly earnings from 40 visits?",
          "options": [
            "$180",
            "$190",
            "$200",
            "$210"
          ],
          "answer": "$200",
          "explanation": "🌟 💫 40 visits × $5 = $200! Revenue expert! ⭐"
        },
        {
          "id": "c4.3.6",
          "type": "multiple-choice",
          "question": "🐱 💰 \udcca Weekly expenses: Food $50, Supplies $30, Transport $20. Total? \udcb5",
          "options": [
            "$90",
            "$100",
            "$110",
            "$120"
          ],
          "answer": "$100",
          "explanation": "🌟 🛍️ $50 + $30 + $20 = $100! Expert accounting! 📝"
        },
        {
          "id": "c4.3.7",
          "type": "multiple-choice",
          "question": "🐱 💰 Revenue $200, Expenses $100. Weekly profit? \udcb5",
          "options": [
            "$80",
            "$90",
            "$100",
            "$110"
          ],
          "answer": "$100",
          "explanation": "🌟 📈 $200 - $100 = $100 profit! Business master! 💫"
        },
        {
          "id": "c4.3.8",
          "type": "multiple-choice",
          "question": "🐱 💰 ⏰ Time management: 230 mins daily schedule = how many hours? \udd52",
          "options": [
            "3.5 hours",
            "3.75 hours",
            "3.83 hours",
            "4 hours"
          ],
          "answer": "3.83 hours",
          "explanation": "🌟 🕒 230 minutes ÷ 60 = 3.83 hours! Time conversion pro! ⌛"
        },
        {
          "id": "c4.3.9",
          "type": "multiple-choice",
          "question": "🐱 💰 \udcca Monthly projection: Weekly profit $100 × 4 weeks = ? \udcb5",
          "options": [
            "$350",
            "$375",
            "$400",
            "$425"
          ],
          "answer": "$400",
          "explanation": "🌟 💰 $100 × 4 = $400 monthly profit! Financial planning expert! 📈"
        },
        {
          "id": "c4.3.10",
          "type": "multiple-choice",
          "question": "🐱 💰 🎯 Started $80, added monthly profit $400. Final balance?",
          "options": [
            "$450",
            "$475",
            "$480",
            "$500"
          ],
          "answer": "$480",
          "explanation": "🌟 $80 + $400 = $480! Final calculation master! 💫"
        }
      ]
    }
  },
  "chapter5": {
    "id": "chapter5",
    "title": "Are You Smarter Than Mr. Fluffbutt?",
    "subtitle": "The Final Challenge",
    "readStoryLink": "https://learnthroughstories.substack.com",
    "theme": {
      "pattern": "dots",
      "tone": "light"
    },
    "questions": {
      "age4to5": [
        {
          "id": "c5.1.1",
          "type": "multiple-choice",
          "question": "🐱 Hudson has $50. He earns $10 from chores. Total now? 💰",
          "options": [
            "$50",
            "$55",
            "$60",
            "$65"
          ],
          "answer": "$60",
          "explanation": "🌟 $50 + $10 = $60! Great adding! 🐾"
        },
        {
          "id": "c5.1.2",
          "type": "multiple-choice",
          "question": "🐱 💰 🦮 How many pets does Hudson take care of now? \udc3e",
          "options": [
            "2 pets",
            "3 pets",
            "4 pets",
            "5 pets"
          ],
          "answer": "4 pets",
          "explanation": "🌟 🐾 Drew-bo, Joseph, Edie, and me! That's 4!"
        },
        {
          "id": "c5.1.3",
          "type": "multiple-choice",
          "question": "🐱 💰 🦜 What does Joseph like to eat? 🍽️",
          "options": [
            "Dog food",
            "Bird seed",
            "Cat food",
            "Fish food"
          ],
          "answer": "Bird seed",
          "explanation": "🌟 🦜 Joseph loves his bird seed! Yummy!"
        },
        {
          "id": "c5.1.4",
          "type": "multiple-choice",
          "question": "🐱 💰 \udc15 What does Edie like to do? 🎾",
          "options": [
            "Sleep",
            "Play fetch",
            "Swim",
            "Dance"
          ],
          "answer": "Play fetch",
          "explanation": "🌟 🎾 Edie loves playing fetch! Such energy! 🐾"
        },
        {
          "id": "c5.1.5",
          "type": "multiple-choice",
          "question": "🐱 💰 🎒 What's in Hudson's backpack? \udc5c",
          "options": [
            "Just toys",
            "Just food",
            "Pet supplies",
            "Books"
          ],
          "answer": "Pet supplies",
          "explanation": "🌟 🎒 All the supplies needed for pet care! Smart! ✨"
        },
        {
          "id": "c5.1.6",
          "type": "multiple-choice",
          "question": "🐱 💰 Hudson spends: Food $20, Toys $15, Treats $10. Total? \udcb5",
          "options": [
            "$35",
            "$40",
            "$45",
            "$50"
          ],
          "answer": "$45",
          "explanation": "🌟 🛍️ $20 + $15 + $10 = $45! Good adding! 📝"
        },
        {
          "id": "c5.1.7",
          "type": "multiple-choice",
          "question": "🐱 💰 \udcb5 Hudson earns: Walks $30, Feeding $20. Total? \udc3e",
          "options": [
            "$40",
            "$45",
            "$50",
            "$55"
          ],
          "answer": "$50",
          "explanation": "🌟 💰 $30 + $20 = $50! Nice adding! ⭐"
        },
        {
          "id": "c5.1.8",
          "type": "multiple-choice",
          "question": "🐱 💰 🤔 Made $50, spent $45. Did Hudson save money? \udcad",
          "options": [
            "Yes",
            "No",
            "Same money",
            "Not sure"
          ],
          "answer": "Yes",
          "explanation": "🌟 📈 Spent less than earned! Saved $5! 💫"
        },
        {
          "id": "c5.1.9",
          "type": "multiple-choice",
          "question": "🐱 💰 Started with $60, saved $5. How much now? 🎯",
          "options": [
            "$60",
            "$65",
            "$70",
            "$75"
          ],
          "answer": "$65",
          "explanation": "🌟 $60 + $5 = $65! Good addition! 🐾"
        },
        {
          "id": "c5.1.10",
          "type": "multiple-choice",
          "question": "🐱 💰 \udc3e How many happy pets? Count them! \udd22",
          "options": [
            "2 pets",
            "3 pets",
            "4 pets",
            "5 pets"
          ],
          "answer": "4 pets",
          "explanation": "🌟 Me, Drew-bo, Joseph, and Edie = 4 happy pets! 🐾"
        }
      ],
      "age6to7": [
        {
          "id": "c5.2.1",
          "type": "multiple-choice",
          "question": "🐱 Hudson starts with $50, earns $10 from chores, $5 allowance. Total? 💰",
          "options": [
            "$60",
            "$65",
            "$70",
            "$75"
          ],
          "answer": "$65",
          "explanation": "🌟 $50 + $10 + $5 = $65! Great addition! 🐾"
        },
        {
          "id": "c5.2.2",
          "type": "multiple-choice",
          "question": "🐱 💰 🦮 If each pet needs 2 visits daily, how many total visits for 4 pets? \udcc5",
          "options": [
            "4 visits",
            "6 visits",
            "8 visits",
            "10 visits"
          ],
          "answer": "8 visits",
          "explanation": "🌟 🐕 2 visits × 4 pets = 8 visits! Nice counting!"
        },
        {
          "id": "c5.2.3",
          "type": "multiple-choice",
          "question": "🐱 💰 ⏰ Each visit takes 20 minutes. Time for 8 visits? ⌛",
          "options": [
            "120 mins",
            "140 mins",
            "160 mins",
            "180 mins"
          ],
          "answer": "160 mins",
          "explanation": "🌟 🕒 20 minutes × 8 visits = 160 minutes! Time master! ⭐"
        },
        {
          "id": "c5.2.4",
          "type": "multiple-choice",
          "question": "🐱 💰 🦜 If Joseph eats 3 scoops of seed twice daily, how many scoops per day? 🥄",
          "options": [
            "3 scoops",
            "4 scoops",
            "5 scoops",
            "6 scoops"
          ],
          "answer": "6 scoops",
          "explanation": "🌟 🦜 3 scoops × 2 times = 6 scoops daily! Good multiplication!"
        },
        {
          "id": "c5.2.5",
          "type": "multiple-choice",
          "question": "🐱 💰 \udc15 If Edie gets 2 treats per visit, how many treats for 3 visits? 🦴",
          "options": [
            "4 treats",
            "5 treats",
            "6 treats",
            "7 treats"
          ],
          "answer": "6 treats",
          "explanation": "🌟 🦴 2 treats × 3 visits = 6 treats! Perfect math! ⭐"
        },
        {
          "id": "c5.2.6",
          "type": "multiple-choice",
          "question": "🐱 💰 Weekly expenses: Food $20, Toys $15, Treats $10. Total? \udcb5",
          "options": [
            "$35",
            "$40",
            "$45",
            "$50"
          ],
          "answer": "$45",
          "explanation": "🌟 🛍️ $20 + $15 + $10 = $45! Expert adding! 📝"
        },
        {
          "id": "c5.2.7",
          "type": "multiple-choice",
          "question": "🐱 💰 \udcb5 Weekly earnings: Walks $30, Feeding $20. Total? \udc3e",
          "options": [
            "$40",
            "$45",
            "$50",
            "$55"
          ],
          "answer": "$50",
          "explanation": "🌟 💰 $30 + $20 = $50! Revenue master! ⭐"
        },
        {
          "id": "c5.2.8",
          "type": "multiple-choice",
          "question": "🐱 💰 🤔 Weekly profit? (Earned $50, spent $45) \udcad",
          "options": [
            "$0",
            "$5",
            "$10",
            "$15"
          ],
          "answer": "$5",
          "explanation": "🌟 📈 $50 - $45 = $5 profit! Business whiz! 💫"
        },
        {
          "id": "c5.2.9",
          "type": "multiple-choice",
          "question": "🐱 💰 Started with $65, added $5 profit. Final amount? 🎯",
          "options": [
            "$65",
            "$70",
            "$75",
            "$80"
          ],
          "answer": "$70",
          "explanation": "🌟 $65 + $5 = $70! Perfect addition! 🐾"
        },
        {
          "id": "c5.2.10",
          "type": "multiple-choice",
          "question": "🐱 💰 \udcca How many total pet visits in 2 days (8 visits per day)? \udcc5",
          "options": [
            "12 visits",
            "14 visits",
            "16 visits",
            "18 visits"
          ],
          "answer": "16 visits",
          "explanation": "🌟 🔢 8 visits × 2 days = 16 total visits! Math pro! ⭐"
        }
      ],
      "age8to9": [
        {
          "id": "c5.3.1",
          "type": "multiple-choice",
          "question": "🐱 💰 Initial $50, chores $10, allowance $5, bonus $15. Total? \udcb5",
          "options": [
            "$75",
            "$80",
            "$85",
            "$90"
          ],
          "answer": "$80",
          "explanation": "🌟 $50 + $10 + $5 + $15 = $80! Expert addition! 🐾"
        },
        {
          "id": "c5.3.2",
          "type": "multiple-choice",
          "question": "🐱 💰 ⏰ 8 visits daily, 20 mins each, plus 10 mins travel between. Total time? ⌛",
          "options": [
            "210 mins",
            "220 mins",
            "230 mins",
            "240 mins"
          ],
          "answer": "230 mins",
          "explanation": "🌟 🕒 (20 mins × 8 visits) + (10 mins × 7 travels) = 160 + 70 = 230 minutes! Time genius! ⭐"
        },
        {
          "id": "c5.3.3",
          "type": "multiple-choice",
          "question": "🐱 💰 \udcca Weekly income: Mon $50, Tue $45, Wed $55, Thu $40, Fri $60. Average daily? \udcb5",
          "options": [
            "$45",
            "$50",
            "$55",
            "$60"
          ],
          "answer": "$50",
          "explanation": "🌟 💰 ($50 + $45 + $55 + $40 + $60) ÷ 5 = $250 ÷ 5 = $50 average! Math whiz! 📈"
        },
        {
          "id": "c5.3.4",
          "type": "multiple-choice",
          "question": "🐱 💰 \udc3e 4 pets, 2 visits each, 5 days. Total weekly visits? \udcc5",
          "options": [
            "30 visits",
            "35 visits",
            "40 visits",
            "45 visits"
          ],
          "answer": "40 visits",
          "explanation": "🌟 🔢 4 pets × 2 visits × 5 days = 40 visits! Perfect multiplication!"
        },
        {
          "id": "c5.3.5",
          "type": "multiple-choice",
          "question": "🐱 💰 \udcb5 If each visit earns $5, weekly earnings from 40 visits?",
          "options": [
            "$180",
            "$190",
            "$200",
            "$210"
          ],
          "answer": "$200",
          "explanation": "🌟 💫 40 visits × $5 = $200! Revenue expert! ⭐"
        },
        {
          "id": "c5.3.6",
          "type": "multiple-choice",
          "question": "🐱 💰 \udcca Weekly expenses: Food $50, Supplies $30, Transport $20. Total? \udcb5",
          "options": [
            "$90",
            "$100",
            "$110",
            "$120"
          ],
          "answer": "$100",
          "explanation": "🌟 🛍️ $50 + $30 + $20 = $100! Expert accounting! 📝"
        },
        {
          "id": "c5.3.7",
          "type": "multiple-choice",
          "question": "🐱 💰 Revenue $200, Expenses $100. Weekly profit? \udcb5",
          "options": [
            "$80",
            "$90",
            "$100",
            "$110"
          ],
          "answer": "$100",
          "explanation": "🌟 📈 $200 - $100 = $100 profit! Business master! 💫"
        },
        {
          "id": "c5.3.8",
          "type": "multiple-choice",
          "question": "🐱 💰 ⏰ Time management: 230 mins daily schedule = how many hours? \udd52",
          "options": [
            "3.5 hours",
            "3.75 hours",
            "3.83 hours",
            "4 hours"
          ],
          "answer": "3.83 hours",
          "explanation": "🌟 🕒 230 minutes ÷ 60 = 3.83 hours! Time conversion pro! ⌛"
        },
        {
          "id": "c5.3.9",
          "type": "multiple-choice",
          "question": "🐱 💰 \udcca Monthly projection: Weekly profit $100 × 4 weeks = ? \udcb5",
          "options": [
            "$350",
            "$375",
            "$400",
            "$425"
          ],
          "answer": "$400",
          "explanation": "🌟 💰 $100 × 4 = $400 monthly profit! Financial planning expert! 📈"
        },
        {
          "id": "c5.3.10",
          "type": "multiple-choice",
          "question": "🐱 💰 🎯 Started $80, added monthly profit $400. Final balance?",
          "options": [
            "$450",
            "$475",
            "$480",
            "$500"
          ],
          "answer": "$480",
          "explanation": "🌟 $80 + $400 = $480! Final calculation master! 💫"
        }
      ]
    }
  }
}

export const getChapter = (id: string): ChapterData | undefined => {
  try {
    // Validate id
    if (!id || typeof id !== 'string') {
      console.error('Invalid chapter ID:', id)
      return undefined
    }

    const chapter = chapters[id]
    
    // Validate chapter exists
    if (!chapter) {
      console.error('Chapter not found:', id)
      return undefined
    }

    // Validate chapter structure
    if (!chapter.id || !chapter.title || !chapter.subtitle || !chapter.readStoryLink || !chapter.theme || !chapter.questions) {
      console.error('Invalid chapter structure:', id)
      return undefined
    }

    // Validate questions exist for all age groups
    const ageGroups = ['age4to5', 'age6to7', 'age8to9'] as const
    for (const ageGroup of ageGroups) {
      if (!Array.isArray(chapter.questions[ageGroup]) || chapter.questions[ageGroup].length !== 10) {
        console.error(`Invalid questions for ${ageGroup} in chapter:`, id)
        return undefined
      }
    }

    return chapter
  } catch (error) {
    console.error('Error getting chapter:', error)
    return undefined
  }
}

export const getNextChapterId = (currentId: string): string | undefined => {
  const chapterIds = Object.keys(chapters)
  const currentIndex = chapterIds.indexOf(currentId)
  return currentIndex < chapterIds.length - 1 ? chapterIds[currentIndex + 1] : undefined
}