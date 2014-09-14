var chai = require("chai");
var expect = chai.expect;
var path = require("path");
var gimmeFullName = require('./index1');


//@ param object which includes the properties first name and lastname
//@return: return person's first and last name
//
//


describe("gimmeFullName()", function() {
  // given an object, it returns the objects first and last name
  it("provides us with the objects first and last name", function() {
    //adds the sum of firstName and lastName
    var person = {
      "firstName": "Steve",
      "lastName": "Young",
    };


/**
 * # test(object, expression)
 *
 * Test and object for expression.
 *
 * @param {Object} object (constructed Assertion)
 * @param {Arguments} chai.Assertion.prototype.assert arguments
 */


