function twoSum(numbers: number[], target: number): number[] {
    const n = numbers.length;

    for (let i = 0; i < n; i++) { // each number of numbers
        for (let j = i + 1; j < n; j++) { // add up all numbers coming next indexes of array
            if ((numbers[i] + numbers[j]) === target) {
                return [i + 1, j + 1];
            }
        }
    }
};