var chai = require("chai");
var expect = chai.expect;
var path = require("path");
var person = require('./index');



describe("fullName()", function() {
  // given an object, it returns the objects first and last name
  it("provides us with the objects first and last name", function() {
    //adds the sum of firstName and lastName
    var firstName = {
      "firstName": "Steve",
      "lastName": "Young",
    };
    var add = { firstName[0] + lastName[1]};
    var findFullName = entranceLocator(map);
    expect(entrance).to.eql('Steve Young);
  });


/**
 * # test(object, expression)
 *
 * Test and object for expression.
 *
 * @param {Object} object (constructed Assertion)
 * @param {Arguments} chai.Assertion.prototype.assert arguments
 */

module.exports = function (obj, args) {
  var negate = flag(obj, 'negate')
    , expr = args[0];
  return negate ? !expr : expr;
};
