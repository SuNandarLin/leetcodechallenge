function threeSum(nums: number[]): number[][] {
    let results: number[][] = [];
    nums.sort((a, b) => (a - b)); // Sort the array

    for (let i = 0; i < nums.length; i++) {
        // if the previous index is same one, skips
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                results.push([nums[i], nums[left], nums[right]]);

                //If next left is same number, just skip. 
                //If next right is same number, just skip.
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return results;
};