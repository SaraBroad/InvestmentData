var fs = require('fs');
var csv = require('fast-csv');

//parse Data.csv file


function readFile() {

    //first I tried this and I can get the 
    var stream = fs.createReadStream("../Data.csv")
    csv.fromStream(stream, [{ headers: ["txn_date", "txn_type", "txn_shares", "txn_price", "fund", "investor", "sales_rep"]}])
        .on('data', function (data) {
            // console.log(data)
            salesSummaryForBroker(data);
        })
        .on('end', function (data) {
            console.log("Read finished");
        });
}

var salesSummaryForBroker = function (data, sales_rep) {
    console.log(data);
    var yearlyTotal = 0;
    var monthTotal = 0;
    var quarterTotal = 0;
    var inceptionTotal = 0;

    if (data[6] === "John Q. Public") {
            console.log("John's yearly total")

    }
    return ""
};

readFile();



module.exports = salesSummaryForBroker;
