// 18. Write a program which tells the number of days in a month, now consider leap year.


let month = "febuary";

switch (month) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        console.log(`${month} has 31 days`)
        break;
    case "april":
    case "june":
    case "september":
    case "november":
        console.log(`${month} has 30 days`)
        break;
    case "febuary":
        console.log(`${month} has 29 days`)
        break;
    default:
        console.log("invalid month entered");
}
