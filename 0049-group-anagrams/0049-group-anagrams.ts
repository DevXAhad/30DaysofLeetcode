function groupAnagrams(strs: string[]): string[][] {
      const anagramsMap: { [sortedWord: string]: string[] } = {};

    for (const word of strs) {
        const sortedWord = word.split('').sort().join('');
        if (!anagramsMap[sortedWord]) {
            anagramsMap[sortedWord] = [];
        }
        anagramsMap[sortedWord].push(word);
    }

    const result: string[][] = [];
    for (const key in anagramsMap) {
        result.push(anagramsMap[key]);
    }

    return result; 
};
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));