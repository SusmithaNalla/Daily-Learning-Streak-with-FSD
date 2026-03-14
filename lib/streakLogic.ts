export const getStreakStats = (history: string[]) => {
  if (history.length === 0) return { currentStreak: 0, totalDays: 0, lastStudied: 'None' };

  // Sort dates descending (newest first)
  const sorted = [...history].sort((a, b) => new Date(b).getTime() - new Date(a).getTime());
  
  const totalDays = sorted.length;
  const lastStudied = sorted[0];

  // Streak Calculation Logic
  let streak = 0;
  let checkDate = new Date(); // Start from today
  checkDate.setHours(0, 0, 0, 0);

  for (let i = 0; i < sorted.length; i++) {
    const entryDate = new Date(sorted[i]);
    entryDate.setHours(0, 0, 0, 0);

    // If the date matches our "checkDate", streak continues
    if (entryDate.getTime() === checkDate.getTime()) {
      streak++;
      checkDate.setDate(checkDate.getDate() - 1); // Move to yesterday
    } else if (entryDate.getTime() > checkDate.getTime()) {
      continue; // Skip duplicates
    } else {
      break; // Gap found, streak broken
    }
  }

  return { currentStreak: streak, totalDays, lastStudied };
};