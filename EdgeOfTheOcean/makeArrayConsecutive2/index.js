/*
 * makeArrayConsecutive2
 * https://codefights.com/arcade/intro/level-2/bq2XnSr5kbHqpHGJC
 * 
 * Ratiorg got statues of different sizes as a present from CodeMaster for his 
 * birthday, each statue having an non-negative integer size. Since he likes to 
 * make things perfect, he wants to arrange them from smallest to largest so 
 * that each statue will be bigger than the previous one exactly by 1. He may 
 * need some additional statues to be able to accomplish that. Help him figure 
 * out the minimum number of additional statues needed.
 * 
 * Example:
 * For statues = [6, 2, 3, 8], the output should be makeArrayConsecutive2(statues) = 3.
 * Ratiorg needs statues of sizes 4, 5 and 7.
 * 
 * 
 * What needs to be done:
 * compare value at the first index with
 */


makeArrayConsecutive2 = (statues) => {
    //range the table from min to max
    var rang = statues.sort(function(a, b) {
        return (a - b)
    });

    var some = 0;
    //if the table is one element
    if (rang.length - 1 == 0) {
        return 0;

    } else {
        //if the table contain more then one element
        for (i = 0; i <= rang.length - 2; i++) {
            //add the deference of two consecutive position -1 
            //to find the number of missing numbers
            some += (rang[i + 1] - rang[i] - 1);
        }
        return some;
    }
}
console.log(makeArrayConsecutive2([6, 2, 3, 8]));