// Support running the tests in a browser where we won't have `require`.
if (typeof require === 'function') {
  // We are running in Node.
  var assert = require('chai').assert;
  var Picker = require('../lib/Picker.js').Picker;
}
else {
  // We are running in the browser.
  var assert = chai.assert;
  var Picker = RandomSelection.Picker;
}

describe('pick()', function() {
  it('should pick a random option until all options have been returned', function() {
    // arrange
    var picker = new Picker([
      'one',
      'two',
      'three'
      ]);

    var picked = [];
    var pick;

    // act, assert
    for (var i=0; i<3; i++) {
      pick = picker.pick();
      
      // Ensure the item hasn't already been picked.
      assert.equal(picked.indexOf(pick), -1, 'Expected option to not have already been picked.');
      
      picked.push(pick);
    }

    // All options should be picked now.
    // The next pick should be a duplicate since we are cycling again.
    var pick = picker.pick();
    assert.notEqual(picked.indexOf(pick), -1, 'Expected option to have been picked already.');
  });
});
