var fs = require('fs');
var csv = require('fast-csv');

//parse Data.csv file


var dataArray = [];

//first I tried this and I can get the 
var stream = fs.createReadStream("../Data.csv")
csv.fromStream(stream, {headers : ["txn_date", "txn_type", "txn_shares", "txn_price", "fund", "investor", "sales_rep"]})
.on('data', function(data){
   console.log(data);
    // console.log(dataArray); 
})
.on('end', function(data){
   console.log("Read finished");
});


var salesSummaryForBroker = function(data, sales_rep) {

return "";
};

salesSummaryForBroker();



module.exports = salesSummaryForBroker;