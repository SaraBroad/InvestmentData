var inquirer = require("inquirer");
var salessummary = require("./calculator/salessummary")

function chooseDataFunction (salesdata) {
    inquirer
    .prompt({
        type: "list",
        name: "choice",
        choices: ["Provide", "View net amount held by investors", "View break report", "View investor profit"],
        message: "What would you like to see?"
    })
    .then(function(val){
        switch(val.choice) {
        
        }
    })
}