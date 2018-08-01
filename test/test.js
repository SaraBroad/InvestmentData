var expect = require("chai").expect;
var should = require("chai").should();
var mocha = require("mocha");
// var Moment = require('moment');
// const MomentRange = require('moment-range');
// const moment = MomentRange.extendMoment(Moment);
var salesSummaryForBroker = require("../calculator/salessummary")
var investorSummary = require("../calculator/investorprofit")
var assetsUnderManagement = require("../calculator/assetsundermanagement")

describe("SalesSummaryForBroker", function () {
    it("will return a sales summary for a broker that exists", function () {
        expect(
            salesSummaryForBroker('Daryl \"Moose\" Johnston')).to.
            equal('Broker: Moose\nYear to date: 24964.0563\nMonth to date: 14964.08\nQuarter to date: 14964.08\nInception to date: 24964.0563')
    });
});

describe("SalesSummaryForBroker", function () {
    it("will return results only for rep queried", function () {
        expect(salesSummaryForBroker("John Q. Public")).to.
            equal("John Q. Public")
    });
});

describe("InvestorSummary", function(){
    it("will return a profit summary for an investor that exists", function () {
        expect(investorSummary('Joe Smith')).to.
            equal('Joe Smith\nInvestor Summary for stocks: 4964.096')
    });
});

describe("InvestorSummary", function(){
    it("will return a profit summary for an investor that exists for one type of fund", function () {
        expect(investorSummary('John Doe & Association')).to.
            equal('John Doe & Association\nInvestor Summary for stocks: -3.75 bonds: -63')
    });
})

describe("AssetsUnderManagement", function(){
    it("will return the amount of assets under management at the end of the year", function(){
        expect(assetsUnderManagement('Daryl \"Moose\" Johnston')).to.
            equal("negative number with facts given")
    });
});




