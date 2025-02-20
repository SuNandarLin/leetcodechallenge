function maxArea(height: number[]): number {
    let max = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        let containerHeight = Math.min(height[left], height[right]);
        let containerWidth = right - left;
        let area = containerHeight * containerWidth;

        max = Math.max(area, max);
        if (height[left] < height[right]) {
            left++; // when left is low, try with another left, by increase
        } else {
            right--; //when right is low, try with another right, by decrease
        }
    }
    return max;
};