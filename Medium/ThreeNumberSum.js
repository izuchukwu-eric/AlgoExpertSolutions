// solution using sort --- o(n^2) time / 0(n) space
function threeNumberSum(array, targetSum){
    // sort our array
    array.sort((a, b) => a + b);   // arranges our array in assending order
    //initialize an empty array
    const triplets = [];
    for(let i = 0; i < array.length - 2; i++){
       let leftPointer = i + 1;  // next index after i
       let rightPointer = array.length - 1; // last index in the array
       while (leftPointer < rightPointer) {
           const currentSum = array[i] + array[leftPointer] + array[rightPointer];
           if(currentSum === targetSum) {
               triplets.push([array[i], array[leftPointer], array[rightPointer]]);
               leftPointer++;
               rightPointer--;
           } else if (currentSum < targetSum){
               leftPointer++;
           } else if (currentSum > targetSum) {
               rightPointer--;
           }
       }
    }

    return triplets;
}

// array = [12, 3, 1, 2, -6, 5, -8, 6]
// targetSum = 0