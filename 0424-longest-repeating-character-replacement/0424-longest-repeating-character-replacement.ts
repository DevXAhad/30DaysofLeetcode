function characterReplacement(s: string, k: number): number {
    let maxCount = 0;
    let maxLength = 0;
    let charCounts: { [char: string]: number } = {};
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        let currentChar = s[right];
        charCounts[currentChar] = (charCounts[currentChar] || 0) + 1;
        maxCount = Math.max(maxCount, charCounts[currentChar]);

        while (right - left + 1 - maxCount > k) {
            let leftChar = s[left];
            charCounts[leftChar] = (charCounts[leftChar] || 0) - 1;
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}
console.log(characterReplacement("ABAB", 2)); 