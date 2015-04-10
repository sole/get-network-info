# get-network-info

Small module to get information about the currently connected network with Firefox OS.

So far it just returns the info I am interested in, in a way that is convenient *for me*. It is not pulling in all the fields that I could, so if you want to dig in and help adding extra fields I'll appreciate it. This is very early stages work and it's not complete AT ALL, but I wanted to stop copying and pasting snippets of code all the time between projects that needed to know what my IP address was.

**IMPORTANT:** You will need to have the `wifi-manage` permission in your app manifest or this won't work.

## Usage

```javascript
var getNetworkInfo = require('get-network-info');

var info = getNetworkInfo();
// info will be either an Object or false

```

I'm using those nice nifty functions from ES6. Wait no, it's now called ESNext. Or ES2015. Or... well, you get the point.

What I want to highlight is that when using this module with Browserify it works even if the node environment I'm using doesn't support fat arrows by itself, which Firefox OS does *indeed* support, so it's all good.
