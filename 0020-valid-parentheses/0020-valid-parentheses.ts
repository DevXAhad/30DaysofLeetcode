function isValid(s: string): boolean {
    const stack: string[] = [];

    const bracketsMap: { [key: string]: string } = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            const lastBracket = stack.pop();
            if (lastBracket === undefined || bracketsMap[lastBracket] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

const inputString = "{[()]}";
console.log(`Is "${inputString}" valid? ${isValid(inputString)}`);

const invalidString = "{[()}";
console.log(`Is "${invalidString}" valid? ${isValid(invalidString)}`); 