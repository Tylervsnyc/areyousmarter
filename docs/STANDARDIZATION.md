# Chapter Standardization Process

## Overview
This document outlines the process of standardizing chapter implementations across the application.

## Current Issues
1. Inconsistent Route Parameters
   - Some routes use `[chapter]`
   - Others use `[id]`
   - Causing Next.js routing conflicts

2. Inconsistent Data Structure
   - Chapters 1-3: JSON format
   - Chapter 4: Different implementation
   - Split implementation in routing logic

## Implementation Plan

### Phase 1: Route Standardization
- [ ] Update all dynamic routes to use `[id]`
- [ ] Set up redirects for backward compatibility
- [ ] Test all routes after standardization

### Phase 2: Data Structure Standardization
- [ ] Convert Chapter 4 to JSON format
- [ ] Ensure consistent chapter data structure
- [ ] Update chapter loading logic
- [ ] Test all chapters with new structure

### Phase 3: Testing & Verification
- [ ] Test all routes
- [ ] Verify all chapters load correctly
- [ ] Check all quiz functionality
- [ ] Verify score tracking
- [ ] Test navigation between chapters

## Rollback Plan
If issues arise, we can roll back changes using:
```bash
git checkout main
git branch -D feature/standardize-chapters
git pull origin main
```

## Testing Instructions
1. Run development server: `npm run dev`
2. Test each chapter's flow:
   - Landing page
   - Name input
   - Age selection
   - Quiz questions
   - Results page
3. Verify all analytics and tracking
4. Test on multiple devices/browsers

## Notes
- Keep track of any issues in this document
- Document any unexpected behavior
- Note any necessary follow-up tasks

## Route Parameter Standardization

### Current Status
- Most routes use `[id]` as the dynamic parameter
- Some components use `chapterNumber` prop internally
- Chapter data structure uses `id` as identifier

### Required Changes

1. Route Parameters
- [x] Main chapter routes use `[id]`
- [x] Quiz routes use `[id]`
- [x] Documentation uses `[id]`

2. Component Props
- [ ] Update ChapterTemplate to use `id` instead of `chapterNumber`
- [ ] Update QuizTemplate to use `id` instead of `chapterNumber`
- [ ] Update ResultsTemplate to use `id` instead of `chapterNumber`
- [ ] Update NameInputTemplate to use `id` instead of `chapterNumber`

3. Data Structure
- [x] Chapter data uses `id` as identifier
- [ ] Standardize all chapter JSON files to use `id`

4. Testing Steps
- [ ] Test all routes with `[id]` parameter
- [ ] Verify navigation between chapters works
- [ ] Check analytics tracking with new parameter
- [ ] Validate all templates render correctly

5. Rollback Plan
```bash
# If changes cause issues, revert the standardization commits
git reset --hard HEAD~1
git push origin feature/standardize-chapters -f
```

### Implementation Order
1. Update component interfaces
2. Modify component implementations
3. Update route handlers
4. Test all changes
5. Deploy with backwards compatibility

### Backwards Compatibility
- Implement redirects from old routes to new routes
- Keep legacy support for analytics events
- Maintain old prop names temporarily with deprecation warnings 