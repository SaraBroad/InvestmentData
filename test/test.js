var expect = require("chai").expect;
var mocha = require("mocha");
// var Moment = require('moment');
// const MomentRange = require('moment-range');
// const moment = MomentRange.extendMoment(Moment);
var salesSummaryForBroker = require("../calculator/salessummary")

// // const monthToDate = function (month, shares, price) {
// //     ...
// //     }

// var currentDate = moment().format("MM/DD/YY");
// var currentMonth = moment().format("M");
// var year = 2018;

// // const start = moment('2011-04-15', 'YYYY-MM-DD');
// // const end   = moment('2011-11-27', 'YYYY-MM-DD');
// // const range = moment.range(start, end);

// // const date = moment('01-01-18', 'DD-MM-YY');
// // const range = date.range(date, currentDate)

// // console.log("range: " + range);

// console.log("Current month: " + currentMonth);


// function timeToDate(time, shares, price) {
//     // var startDate = moment("010118", "MM/DD/YY").fromNow();
//     // console.log ("Start Date:" + startDate)
//     var startOfYear = "01/01/18"
//     var broker = "John Doe & Assoc. A Professional Corporation";
//     var shares = 0;
//     var price = 0;
//     var transType;
//     var amountSoldThisYear = 0;
//     var numSellTransactionsThisYear;

//     //do while loop?
//     // for (var i = 0; i < numSellTransactions; i++) {
//     //     amountSold = numSellTransactions[i]
//     // }

//     if (transType === "SELL") {
//         for (var i = 0; i < numSellTransactionsThisYear; i++) {

//             amountSoldThisYear = shares * price;
//         }   
//     }
//     return amountSoldThisYear;

// }
// yearToDate();

// function monthToDate(month, shares, price) {


// }

// // monthToDate();

// function quarterToDate (quarter, shares, price) {
//     //quarter starts in June


// }

// function inceptionToDate (date, shares, price) {
//     //amount sold from inception to date is the amount sold from the time it was purchased
//     // first purchase date for both is 1/2/18
//     // if the dates were different, it would need to take in a variable to allow for date differentiation
//     // do something via database like where: date = data.trx_date
//     // more complex - allow for input to search date of inception
// }




describe("SalesSummaryForBroker", function(){
    it("will return a sales summary for a broker that exists", function(){
    expect(
        salesSummaryForBroker('Daryl \"Moose\" Johnston')).to.
        equal('Broker: Moose\nYear to date: 24964.0563\nMonth to date: 14964.08\nQuarter to date: 14964.08\nInception to date: 24964.0563')
    });
});

