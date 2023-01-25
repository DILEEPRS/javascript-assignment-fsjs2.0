// 20. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of your shopping cart if it has not been already added
//     - remove 'Honey'
//     - modify Tea to 'Green Tea'


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
  
    if (shoppingCart.includes("Meat") && shoppingCart.includes("Sugar")){
  
      console.log(shoppingCart);

    }
   else { shoppingCart.pop("Honey");
          shoppingCart.unshift("Meat");
          shoppingCart.push("sugar");
          shoppingCart[3] = "green tea";
          console.log(shoppingCart);
        
}
 
