export const correctSounds = [
  '/sounds/Correct/correctcat1.mp3',
  '/sounds/Correct/correctcat2.mp3',
  '/sounds/Correct/correctcat3.mp3'
];

export const playCorrectSound = () => {
  const sound = new Audio(correctSounds[Math.floor(Math.random() * correctSounds.length)]);
  sound.volume = 0.5; // 50% volume for correct answer sounds
  sound.play().catch(console.error);
};

export const playButtonPress = () => {
  const sound = new Audio('/sounds/buttonpress.mp3');
  sound.volume = 0.5; // Adding volume control for consistency
  sound.play().catch(console.error);
};

export const playPerfectSound = () => {
  const sound = new Audio('/sounds/perfect.mp3');
  sound.volume = 0.5;
  return sound; // Return the audio object so we can control it
}; 