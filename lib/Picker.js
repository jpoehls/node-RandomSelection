(function(undefined) {
  'use strict';

  // Node.js usage:
  //
  // var Picker = require('RandomSelection').Picker;
  // var greetingPicker = new Picker(['hello', 'hi', 'howdy']);
  // var greeting = greetingPicker.pick();

  // Our namespace. Exported members will be attached to this.
  var ns;

  // Set our namespace based on whether we are running in Node.js or the browser.
  if (typeof module !== 'undefined' && module.exports) {
    // We are running in Node.
    ns = module.exports;
  }
  else {
    // We are running in the browser.
    // `this` is the `window`.
    // Use window.RandomSelection as our namespace.
    ns = this.RandomSelection = {};
  }

  // Gets a shallow copy of the given array.
  function clone(arr) {
  	var newArr = [];
  	for (var i=0; i<arr.length; i++) {
  		newArr.push(arr[i]);
  	}
  	return newArr;
  }

  // Gets a random option until all options have been returns. Then cycles again.
  function pick() {
    if (this._remainingOptions.length === 0) {
      this._remainingOptions = clone(this._originalOptions);
    }

    var index = Math.floor(Math.random() * this._remainingOptions.length);
    return this._remainingOptions.splice(index, 1)[0];
  }

  // Export our Picker object.
  ns.Picker = function(arrayOfOptions) {
    this._originalOptions = arrayOfOptions;
    this._remainingOptions = [];
  };

  ns.Picker.prototype = {
    pick: pick
  };

}).call(this);
