var fs = require('fs');
// var csv = require('csv');
// var parse = require('csv-parse');
// var async = require('async');
var csv = require('fast-csv');

fs.createReadStream("../Data.csv")
.pipe(csv())
.on('data', function(data){
    console.log(data);
})
.on('end', function(data){
    console.log("Read finished");
});


var salesSummaryForBroker = function(sales_rep) {

//function

return "";
};

module.exports = salesSummaryForBroker;