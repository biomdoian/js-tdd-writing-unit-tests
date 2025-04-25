// Your code here
export function pointsForWord(word) {
    let points = 0;
    const vowels = "aeiouAEIOU";
    for (const char of word) {
      if (vowels.includes(char)) {
        points += 1;
      } else {
        points += 2;
      }
    }
    return points;
  }