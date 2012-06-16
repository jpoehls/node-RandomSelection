RandomSelection
===============

This is an NPM package that knows how to select a random item out of a group of options such that the selection isn't a duplicated until all items have been selected.

## Installation

    npm install RandomSelection

## Testing

Once the package is installed, you can run the unit tests using NPM.

    npm test RandomSelection

## Node Usage

```javascript
var Picker = require('RandomSelection').Picker;

var greetingPicker = new Picker([ 'hello', 'hi', 'howdy' ]);
var randomGreeting = greetingPicker.pick(); // Will return one of the options above.
```

## Browser Usage

#### HTML

```html
<script src="path/to/Picker.js"></script>
```

#### JavaScript

```javascript
var Picker = new RandomSelection.Picker();

var greetingPicker = new Picker([ 'hello', 'hi', 'howdy' ]);
var randomGreeting = greetingPicker.pick(); // Will return one of the options above.
```

## License

Copyright (c) 2012 Joshua Poehls

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
