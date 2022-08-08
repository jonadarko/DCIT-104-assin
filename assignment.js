// STUDENTS ID : 10977123
//write a funtion that takes in a number and returns the average of all the even numbers from 1 to that number (inclusive)
//example: evenAverage(10) should return 5

function EvenAverage(limit) {
    let average = 0;
    for (let i = 1; i <= limit; i++) {
        if (i % 2 === 0) {
            let currentnum = array[i];
            average += currentnum;
        }
    }
    average = average / array.length
    return average;
}




// write a funtion that produce sum of all prime numbers less than a given number//
sum = 0;

function SumOfPrime() {
    for (let factor = 2; factor < Number; factor++)
        if (number % factor === 0) {
            sum += k;
        }
    return sum;
}