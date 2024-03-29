function merge(intervals: number[][]): number[][] {
    if (intervals.length <= 1) {
        return intervals;
    }

    intervals.sort((a, b) => a[0] - b[0]);

    const mergedIntervals: number[][] = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const currentInterval = intervals[i];
        const lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];

        if (currentInterval[0] <= lastMergedInterval[1]) {
            lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
        } else {
            
            mergedIntervals.push(currentInterval);
        }
    }

    return mergedIntervals;
}
const intervals: number[][] = [[1,3],[2,6],[8,10],[15,18]];
const merged = merge(intervals);
console.log(merged);
