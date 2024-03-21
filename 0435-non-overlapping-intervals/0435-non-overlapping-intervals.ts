function eraseOverlapIntervals(intervals: number[][]): number {
    if (intervals.length <= 1) {
        return 0;
    }

    intervals.sort((a, b) => a[1] - b[1]);

    let count = 0;
    let end = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        const [start, currentEnd] = intervals[i];
        if (start < end) {
            count++; 
        } else {
            end = currentEnd; 
        }
    }

    return count;
}

const intervals = [[1,2],[2,3],[3,4],[1,3]];
console.log(eraseOverlapIntervals(intervals)); 