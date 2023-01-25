

// 12. Create a human readable time format using the Date time object
// - YYYY-MM-DD HH:mm
// - DD-MM-YYYY HH:mm
// - DD/MM/YYYY HH:mm





let d = new Date()


console.log(`${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`);
console.log(`${d.getDate()}-${d.getFullYear()}-${d.getMonth()+1} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`);
console.log(`${d.getDate()}/${d.getFullYear()}/${d.getMonth()+1} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`);
 
