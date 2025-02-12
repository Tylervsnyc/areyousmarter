# Chapter Implementation Guide

## Routing Structure

Each chapter follows this routing structure:

```
/quiz/[id]/                 # Chapter landing page
/quiz/[id]/name             # Name input page
/quiz/[id]/age              # Age selection page
/quiz/[id]/[age-range]      # Quiz page for specific age range
/quiz/[id]/results          # Results page
```

## User Flow

1. User starts at chapter landing page (`/quiz/[id]`)
2. Clicks "Begin Quiz" → Goes to name input (`/quiz/[id]/name`)
3. Enters name → Goes to age selection (`/quiz/[id]/age?name=[name]`)
4. Selects age range → Goes to quiz (`/quiz/[id]/[age-range]?name=[name]`)
5. Completes quiz → Goes to results (`/quiz/[id]/results?name=[name]&score=[score]&type=[age-range]`)

## Implementation Steps

### 1. Create Chapter Landing Page

```tsx
// app/quiz/[id]/page.tsx
import ChapterTemplate from '@/components/ChapterTemplate'
import { getChapter } from '@/app/data/chapters'

export default function ChapterPage({ params }: { params: { id: string } }) {
  const chapter = getChapter(params.id)
  if (!chapter) return null

  return (
    <ChapterTemplate
      title={chapter.title}
      subtitle={chapter.subtitle}
      readStoryLink={chapter.readStoryLink}
      beginQuizLink={`/quiz/${params.id}/name`}
      chapterNumber={parseInt(params.id)}
    />
  )
}
```

### 2. Required Components

- `ChapterTemplate`: Main landing page template
- `NameInputTemplate`: Name input page
- `AgeSelectionTemplate`: Age selection page
- `QuizTemplate`: Quiz interface
- `ResultsTemplate`: Results page

### 3. Required Files for Each Chapter

```
app/quiz/[id]/
├── page.tsx              # Landing page
├── name/
│   └── page.tsx         # Name input
├── age/
│   └── page.tsx         # Age selection
├── 4-5/
│   └── page.tsx         # Quiz for ages 4-5
├── 6-7/
│   └── page.tsx         # Quiz for ages 6-7
├── 8-9/
│   └── page.tsx         # Quiz for ages 8-9
└── results/
    └── page.tsx         # Results page
```

### 4. Data Structure

Questions and chapter data are stored in:
- `app/data/chapters.ts`: Chapter configuration
- Individual quiz files for each age range

## Styling Guidelines

1. Use the cream background color (#FFFDD0)
2. Use the din-round font for titles and buttons
3. Follow the 3D button style for interactive elements
4. Maintain consistent spacing and layout across all pages

## Component Props

### ChapterTemplate
```typescript
interface ChapterTemplateProps {
  title: string
  subtitle: string
  readStoryLink: string
  beginQuizLink: string
  chapterNumber: number
}
```

### QuizTemplate
```typescript
interface QuizTemplateProps {
  questions: QuizQuestion[]
  chapterNumber: string | number
  quizType: 'easy' | 'hard'
}
```

## Adding a New Chapter

1. Add chapter configuration to `app/data/chapters.ts`
2. Create the chapter directory structure
3. Implement quiz questions for each age range
4. Test the complete user flow

## Testing Checklist

- [ ] Verify all routes are working
- [ ] Test responsive design on mobile and desktop
- [ ] Ensure proper state management between pages
- [ ] Verify analytics tracking
- [ ] Test quiz functionality for all age ranges
- [ ] Verify certificate generation for perfect scores 