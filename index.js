var inquirer = require("inquirer");

function chooseDataFunction (salesdata) {
    inquirer
    .prompt({
        type: "list",
        name: "choice",
        choices: ["View sales year to date", "View sales month to date", "View sales quarter to date", "View sales inception to date", "View net amount held by investors", "View break report", "View investor profit"],
        message: "What would you like to see?"
    })
}