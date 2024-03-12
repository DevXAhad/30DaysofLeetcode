function isPalindrome(x: number): boolean {
    if (x < 0) { //specifies that negative nums aint palindromes
      return false; 
    }
  
    const numStr = x.toString(); 
    const length = numStr.length;
  
    // Compare characters from the beginning and end of the string
    for (let i = 0; i < Math.floor(length / 2); i++) {
      if (numStr[i] !== numStr[length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  
  const num1 = 121;
  const num2 = -121;
  const num3 = 101;

  console.log(isPalindrome(num1));
  console.log(isPalindrome(num2)); 
  console.log(isPalindrome(num3));  