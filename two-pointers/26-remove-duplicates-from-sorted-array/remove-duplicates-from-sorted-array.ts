function removeDuplicates(nums: number[]): number {
    let i = 0;
    let uniqueNums = new Set<number>();

    for (let num of nums) {
        if (!uniqueNums.has(num)) {
            uniqueNums.add(num);
            nums[i] = num;
            i++;
        }
    }
    return i;
};