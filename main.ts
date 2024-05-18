import inquirer from 'inquirer';

const currency: any = {
    USD: 1,
    EUR: 0.92,
    INR: 83.30,
    PKR:278.50
};

let userAnswer =await inquirer.prompt(
[
    {
        name: "from",
        message: "enter from currency",
        type: "list",
        choices: ["USD", "EUR", "INR", "PKR"]
    },
    {
        name: "to",
        message: "enter to currency",
        type: "list",
        choices: ["USD", "EUR", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "enter your amount",
        type: "number"
    }
]

);
 let fromAmount = currency[userAnswer.from];
 let toAmount = currency[userAnswer.to];
 let amount = userAnswer.amount
 let baseAmount = amount / fromAmount
 let convertedAmount = baseAmount * toAmount
 console.log(convertedAmount);

 
 