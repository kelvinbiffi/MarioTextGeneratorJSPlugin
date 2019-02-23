# Mario Text Generator JS Plugin

MarioTextGeneratorJSPlugin is a JavaScript plugin for generate text paragraths and sentences with Mario World words.

## Installation

[CDNScript](https://cdn.jsdelivr.net/gh/kelvinbiffi/MarioTextGeneratorJSPlugin/dist/MarioIpsum.js)

or 

Clone the repository and download de Script

## Usage

This first snippet is aleady executed by the MIpsum Plugin
```javascript
var mis = [].slice.call(document.querySelectorAll('[data-mario]'));
mis.forEach(function (mie) {
  var marioIpsum = new MIpsum;
  marioIpsum.element = mie;
  marioIpsum.createText();
});
```

Parameters values:
 * TYPE: PARAGRAPH or SENTENCE
 * LENGTH: LENGTH OF THE PARAGRAPH or SENTENSE YOU WANT
 * MODE: SHORT, MEDIUM or LONG (MODE is optional to deffine whether text would be shortest or longest, default value is set as MEDIUM)

The pattern is TYPE LENGTH MODE, see the below example to know more or access the link [Text Generator](https://kelvinbiffi.github.io/MarioTextGeneratorJSPlugin/)
 
To use for specifics element using javascript, follow the below pattern
```javascript
// Interval to wait Plugin exists
var waitMIpsum = setInterval(function () {
  if (MIpsum) {
    clearInterval(waitMIpsum);
    
    // Usege to specific element
    var marioIpsum = new MIpsum;
    marioIpsum.element = document.querySelector('selector of element');
    marioIpsum.createText('PARAGRAPH', 3, 'MEDIUM');
  }
}, 100);
```

To use for specifics element using html only, follow the below pattern
```html
<!--Interval to wait Plugin exists-->
<textarea data-mario="SENTENCE|3|LONG"></textarea>
<!-- OR -->
<div data-mario="PARAGRAPH|3|SHORT"></div>
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.