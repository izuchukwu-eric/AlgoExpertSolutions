// Solution using hashtable ---- o(n) time / o(n) space
function twoNumberSum(array, targetSum){
    //initailize our hashtable
    const nums = {};

    for(const num of array){
        const potentailMatch = targetSum - num;
        if(potentailMatch in nums){
            return [potentailMatch, num];
        } else {
            nums[num] = true;
        }
    }

    return [];
}


// solution using two for loops --- o(n^2) time / O(1) space
function twoNumberSum(array, targetSum){
    for(let i = 0; i < array.length -1; i++){
        const firstNum = array[i];
        for(let j = 0; j < array.length; j++){
            const secondNum = array[j];
            if(firstNum + secondNum === targetSum){
                return [firstNum, secondNum];
            }
        }
    }

    return [];
}


// solution by sorting the array  ---- o(nlog(n)) time / o(1) space
function twoNumberSum(array, targetSum){
    // sort our array
    array.sort((a, b) => a - b);
    // set left to the first number on our sorted array and right to the last number on the array
    let left = 0;
    let right = array.length - 1;

    while(left < right) {
        const currentSum = array[left] + array[right];
          if(currentSum === targetSum){
              return [array[left], array[right]];
          } else if(currentSum < targetSum) {
              left++;
          } else if (currentSum > targetSum) {
              right--;
          }
    }

    return [];
}


// array = [3, 5, -4, 8, 11, 1, -1, 6]
// targetSum = 10