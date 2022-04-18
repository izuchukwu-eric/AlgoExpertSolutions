// o(n) time / o(n) space
function firstDuplicateValue(array) {

    //initialize a set
    const seen = new Set();
    // loop through all the values in the array
    for (const value of array) {
        if(seen.has(value)){  // check if the value is present in our set
            return value;  // if yes, we return the value
        }
        seen.add(value);   // else we add the value to our set and keep looping
    }

    return -1;   // we return -1 if we can't get any other value
}

// firstDuplicateValue[2, 1, 5, 3, 2, 4];