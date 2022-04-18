// o(n) time / 0(1) space
function isPalindrome(string) {
    let leftPointer = 0;
    let rightPointer = string.length - 1;
    while (leftPointer < rightPointer) {
        if(string[leftPointer] !== string[rightPointer]) {
            return false;
        } 
        leftPointer++;
        rightPointer--;
    }

    return true;
}

isPalindrome("abcdcba");