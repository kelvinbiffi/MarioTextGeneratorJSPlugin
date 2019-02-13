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

To use for specifics element follow the below pattern
```javascript
// Interval to wait Plugin exists
var waitMIpsum = setInterval(function () {
  if (MIpsum) {
    clearInterval(waitMIpsum);
    
    // Usege to specific element
    var marioIpsum = new MIpsum;
    marioIpsum.element = document.querySelector('selector of element');
    marioIpsum.createText('PARAGRAPH', 3);
  }
}, 100);
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.