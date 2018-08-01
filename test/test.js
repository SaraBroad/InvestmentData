var expect = require("chai").expect;
var should = require("chai").should();
var mocha = require("mocha");
// var Moment = require('moment');
// const MomentRange = require('moment-range');
// const moment = MomentRange.extendMoment(Moment);
var salesSummaryForBroker = require("../calculator/salessummary")

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
