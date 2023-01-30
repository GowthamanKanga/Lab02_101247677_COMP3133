var calculator = require("../app/calculator.js");
var assert = require("chai").assert;
const { expect } = require("chai");

describe("calculator.js", () => {
    // Addition
    it("add(5, 2) expected result 7 PASS", () => {
        assert.equal(calculator.add(5, 2), 7);
        expect(calculator.add(5, 2)).to.equal(7);
    });
    it("add(5,2) expected result 8 FAIL", () => {
        assert.equal(calculator.add(5, 2), 8);
        expect(calculator.add(5, 2)).to.not.equal(8);
    });

    // Subtraction    
    it("sub(5, 2) expected result 3 PASS", () => {
        assert.equal(calculator.sub(5, 2), 3);
        expect(calculator.sub(5, 2)).to.equal(3);
    });
    it("sub(5,2) expected result 5 FAIL", () => {
        assert.equal(calculator.sub(5, 2), 2);
        expect(calculator.sub(5, 2)).to.not.equal(2);
    });
    
    // Multiplication
    it("mul(5, 2) expected result 10 PASS", () => {
        assert.equal(calculator.mul(5, 2), 10);
        expect(calculator.mul(5, 2)).to.equal(10);
    });
    it("mul(5,2) expected result 12 FAIL", () => {
        assert.equal(calculator.mul(5, 2), 12);
        expect(calculator.mul(5, 2)).to.not.equal(12);
    });

    // Division
    it("div(10, 2) expected result 5 PASS", () => {
        assert.equal(calculator.div(10, 2), 5);
        expect(calculator.div(10, 2)).to.equal(5);
    });
    it("div(10,2) expected result 2 FAIL", () => {
        assert.equal(calculator.div(10, 2), 2);
        expect(calculator.div(10, 2)).to.not.equal(2);
    });
});
