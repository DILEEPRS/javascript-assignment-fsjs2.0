// 27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).


for (i = 0; i < 100; i++) {

    let flag = true;
 for (j = 2; j < i; j++) {

   if(i % j == 0){
     flag = false;
     break;
   } 
  
 }

 if(i > 1 && flag == true  ){

    console.log(i)
}

}




