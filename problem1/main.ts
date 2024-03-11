function findDigit(arr: number[]): number | undefined {
    const frequency: { [key: number]: number } = {};
    
    for (const num of arr) {
      frequency[num] = (frequency[num] || 0) + 1;
    }
  
    for (const num in frequency) {
      if (frequency[num] === 1) {
        return parseInt(num, 10);
      }
    }
  
    return undefined;
  }
  
  const inputArray = [1, 1, 3];
  const result = findDigit(inputArray);
  if (result !== undefined) {
    console.log(`The single element that is not repeated is: ${result}`);
  } else {
    console.log('Try Again! No unique element found.');
  }  