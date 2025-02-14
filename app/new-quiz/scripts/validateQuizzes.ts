import { chapters } from '../data/chapters';
import { validateQuizStructure } from '../utils/validation';

const validateQuizzes = () => {
  try {
    console.log('Starting quiz structure validation...\n');
    
    const errors = validateQuizStructure(chapters);
    
    if (errors.length === 0) {
      console.log('✅ Quiz structure validation passed! No errors found.');
      process.exit(0);
    } else {
      console.error('❌ Quiz structure validation failed!\n');
      errors.forEach(({ chapter, error }) => {
        console.error(`Chapter ${chapter}: ${error}`);
      });
      process.exit(1);
    }
  } catch (error) {
    console.error('❌ Fatal error during validation:', error);
    process.exit(1);
  }
};

validateQuizzes(); 