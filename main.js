#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //dollar
let myPin = 1234;
console.log("Welcome to Suzana's - ATM Machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrwaMethod",
                message: "select a withdrawal method",
                type: "list",
                choices: ["Fast cash", "Enter amount"]
            }
        ]);
        if (withdrawAns.withdrwaMethod === "Fast cash") {
            let fastCashAns = await inquirer.prompt([
                {
                    name: "fastCash",
                    message: "Select a fast cash option:",
                    type: "list",
                    choices: ['500', '1000', '2000', '5000', '10000', '50000']
                }
            ]);
            if (fastCashAns.fastCash > myBalance) {
                console.log("Insufficient Balance");
            }
            else {
                myBalance -= fastCashAns.fastCash;
                console.log(fastCashAns.fastCash, 'Withdraw Successfully');
                console.log("Your remaining balance is:", myBalance);
            }
        }
        else if (withdrawAns.withdrwaMethod === "Enter amount") {
            let mountAns = await inquirer.prompt([
                {
                    name: "amount",
                    message: "enter your amount",
                    type: "number"
                }
            ]);
            if (mountAns.amount > myBalance) {
                console.log("Insufficient Balance");
            }
            myBalance -= mountAns.amount;
            console.log("your remaining balance is:" + myBalance);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log("your balance is: " + myBalance);
    }
}
else {
    console.log("Incorrect pin number");
}
