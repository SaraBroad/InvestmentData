var fs = require('fs');
var csv = require('csvtojson')



//parse Data.csv file
// function readFile() {

//     //first I tried this and I can get the 
//     var stream = fs.createReadStream("../Data.csv")
//     csv.fromStream(stream, { headers: ["txn_date", "txn_type", "txn_shares", "txn_price", "fund", "investor", "sales_rep"]})
//         .on('data', function (data) {
//             console.log(data);
//             salesSummaryForBroker(data);
//         })
//         .on('end', function (data) {
//             console.log("Read finished");
//         });
// }

function readFile() {

    const csvFilePath = '../Data.csv'

    csv()
        .fromFile("../Data.csv")
        .then((jsonObj) => {
            console.log(jsonObj);
            salesSummaryForBroker(jsonObj);
        })
}

// Async / await usage
// const jsonArray=await csv().fromFile("../Data.csv");



var salesSummaryForBroker = function (jsonObj, sales_rep) {
  
//    console.log(sales_rep)
    return ""
};

readFile();



module.exports = salesSummaryForBroker;
