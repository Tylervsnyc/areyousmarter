export interface ChapterConfig {
  id: string
  title: string
  subtitle: string
  readStoryLink: string
  quizLink: string
}

export const chapters: ChapterConfig[] = [
  {
    id: '1',
    title: 'Are You Smarter Than Mr. Fluffbutt?',
    subtitle: 'Chapter 1: Help Me Get This Bike!',
    readStoryLink: 'https://learnthroughstories.substack.com/p/help-me-get-this-bike-chapter-1',
    quizLink: '/quiz/1/name'
  },
  {
    id: '2',
    title: 'Are You Smarter Than Mr. Fluffbutt?',
    subtitle: 'Chapter 2: A Big Three Dollar Gamble',
    readStoryLink: 'https://learnthroughstories.substack.com/p/help-me-get-this-bike-chapter-2',
    quizLink: '/quiz/2/name'
  },
  {
    id: '3',
    title: 'Are You Smarter Than Mr. Fluffbutt?',
    subtitle: 'Chapter 3: Let it Roll! Let it Roll!',
    readStoryLink: 'https://substack.com/home/post/p-155624830?source=queue',
    quizLink: '/quiz/3/name'
  }
]

export function getChapter(id: string): ChapterConfig | undefined {
  return chapters.find(chapter => chapter.id === id)
} 