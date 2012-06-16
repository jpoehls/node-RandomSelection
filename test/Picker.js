if (typeof require === 'function') {
  var assert = require('assert');
  var Picker = require('../src/Picker.js').Picker;
}

if (typeof assert === 'undefined') {
  assert = {
    equal: function(actual, expected, msg) {
      if (actual !== expected) {
        throw new Error(msg);
      }
    },

    notEqual: function(actual, expected, msg) {
      if (actual === expected) {
        throw new Error(msg);
      }
    }
  };
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
