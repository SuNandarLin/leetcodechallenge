function removeDuplicates(nums: number[]): number {
    let k = 0;
    let i = 0;
    let uniqueNums = new Set<number>();

    while (i < nums.length) {
        console.log(uniqueNums, uniqueNums.has(nums[i]));
        if (!uniqueNums.has(nums[i])) {
            uniqueNums.add(nums[i]);
        } else {
            nums.splice(i, 1);
            i--;
        }
        i++;
    }
    return uniqueNums.size;
};