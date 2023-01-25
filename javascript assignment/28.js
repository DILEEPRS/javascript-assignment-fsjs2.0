// 28. Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***
	
// 	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//     *****

let string = "";
for (var i = 0; i < 3; i++) {
    
 string += "*";
 
 console.log(string);

}



let string1 = "";

for (let j = 0; j < 3; j++) {

   for(let k = 0; k < 3; k++) {
  
    string1 += "*";

   }
   string1 += "\n";



}
console.log(string1);


let n = 3;
let string3 = "";
// External loop
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 1; j <= n - i; j++) {
    string3 += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    string3 += "*";
  }
  string3 += "\n";
}
console.log(string3);