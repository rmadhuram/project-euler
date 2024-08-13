// JavaScript Program to print all permutations 
// of a string in sorted order. 
 
/* The following function is needed for the sort method */
function compare (a, b) 
{ 
    return a.charCodeAt(0) - b.charCodeAt(0);
}
 
// This function finds the index of the smallest character 
// which is greater than 'first' and is present in str[l..h] 
function findCeil (str, first, l, h) 
{ 
    // initialize index of ceiling element 
    let ceilIndex = l; 
 
    // Now iterate through rest of the elements and find 
    // the smallest character greater than 'first' 
    for (let i = l+1; i <= h; i++) 
    if (str[i] > first && str[i] < str[ceilIndex]) 
            ceilIndex = i; 
 
    return ceilIndex; 
} 
 
// Print all permutations of str in sorted order 
function sortedPermutations ( str) 
{ 
    // Get size of string 
    let size = str.length; 
 
    // Sort the string in increasing order 
    str = str.split("");
    str.sort(compare);
 
    // Print permutations one by one 
    let isFinished = false; 
    let count = 0
    while ( ! isFinished ) 
    { 
        count++
        // print this permutation 
        console.log(count, str.join("")); 

        if (count == 1000000) break;
 
        // Find the rightmost character which is 
        // smaller than its next character. 
        // Let us call it 'first char' 
        let i; 
        for ( i = size - 2; i >= 0; --i ) 
        if (str[i] < str[i+1]) 
            break; 
 
        // If there is no such character, all are 
        // sorted in decreasing order, means we 
        // just printed the last permutation and we are done. 
        if ( i == -1 ) 
            isFinished = true; 
        else
        { 
            // Find the ceil of 'first char' in 
            // right of first character. 
            // Ceil of a character is the smallest 
            // character greater than it 
            let ceilIndex = findCeil( str, str[i], i + 1, size - 1 ); 
 
            // Swap first and second characters 
            let temp = str[i];
            str[i] = str[ceilIndex];
            str[ceilIndex] = temp;
 
            // Sort the string on right of 'first char'
            str1 = str.slice(i + 1);
            str1.sort();
            str = str.slice(0, i + 1);
            str.push(...str1);
        } 
    }
} 
 
// Driver program to test above function 
let str = "0123456789"; 
sortedPermutations( str ); 