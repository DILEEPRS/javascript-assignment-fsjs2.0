// 22. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

console.log(`sorted array is ${ages.sort()} max age is ${Math.max(...ages)}, min age is ${Math.min(...ages)}`)

let sum = 0;
for (i = 0; i < ages.length; i++){
 
    sum += ages[i];
    
}
  
let avrageAge = sum / (ages.length)
let maxAge = Math.max(...ages);
let minAge = Math.min(...ages);
console.log(`average age is ${avrageAge}`)

console.log(`range is ${Math.max(...ages)- Math.min(...ages) }`)


let minAverage = Math.abs(minAge - avrageAge);
let maxAverage = Math.abs(maxAge - avrageAge);
console.log(minAverage);
console.log(maxAverage);










