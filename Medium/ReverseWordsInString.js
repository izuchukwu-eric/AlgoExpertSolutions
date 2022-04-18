// o(n) time / 0(n) space
function reverseWordsInString(string) {
    //initailize an array
    const words = [];
    let startOfWord = 0;   // initialize startofword to zero

    for(idx = 0; idx < string.length; idx++) {
        const character = string[idx];  // set the current index to a variable

        // check if character is a space, if it is we know we found a word 
        if(character === ' ') {
            words.push(string.slice(startOfWord, idx));  //then add it to the words array.
            startOfWord = idx; //then update our startofword

        } else if (string[startOfWord] === ' '){ // check is the new startofword is a space, if yes
            words.push(' ');    //  we add the space to the words array
            startOfWord = idx;   // then update our startofword
        }
    }
    // handles the last word
    words.push(string.slice(startOfWord));

    reverseList(words); // we reverse the list
    return words.join('');  // we create a string out of the reversed words
}

// to reverse our string
function reverseList(list) {
    let start = 0;
    let end = list.length - 1;
    while (start < end) {
        const temp = list[start];
        list[start] = list[end];
        list[end] = temp;
        start++;
        end--;
    }
}

// reverseWordsInString("AlgoExpert is the best!");