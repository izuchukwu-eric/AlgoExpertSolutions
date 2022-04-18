function longestPalindromicSubstring(string) {
    let longest = '';
    for (let i = 0; i < string.length; i++) {
        for(let j = i; j < string.length; j++) {
            const subString = string.slice(i, j + 1);
            if(subString.length > longest.length && isPalindrome(subString)) {
                longest = subString;
            }
            console.log(subString);
        }
    }

    return longest;
}
// longestPalindromicSubstring("abaxyzzyxf");

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

// string = "abaxyzzyxf"