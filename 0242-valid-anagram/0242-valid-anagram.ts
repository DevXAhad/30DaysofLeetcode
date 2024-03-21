function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    const charFreqS: Record<string, number> = {};
    const charFreqT: Record<string, number> = {};

    for (let char of s) {
        charFreqS[char] = (charFreqS[char] || 0) + 1;
    }

    for (let char of t) {
        charFreqT[char] = (charFreqT[char] || 0) + 1;
    }

    for (let char in charFreqS) {
        if (charFreqS[char] !== charFreqT[char]) {
            return false;
        }
    }

    return true;
}

const s = "anagram";
const t = "nagaram";
console.log(isAnagram(s, t)); 