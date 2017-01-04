# ng-random-progress
Angular module to generate a random progress by array data of text or images or even html.

## Install
Put the script tag in your index.html
```html
<script src="ng-random-progress.js"></script>
```

## Usage

Add ngRandomProgress module to your app
```javascript
angular.module('myapp', ['ngRandomProgress']);
```

Initialize the control module in your controller
```javascript
$scope.rndprogress = {};
```

Create your desire html element with random-progress directive atribute
```html
<span random-progress ></span>  
```

Assign ngRandomProgress atributes as you wish
```html
<span rp-data="textarr" rp-control="rndprogress" rp-random="true" rp-time="100"  random-progress ></span>  
```

Call the rndprogress module start or stop methods
```javascript
{{rndprogress.start()}}
```
Or
```html
<a href ng-click="rndprogress.start()" >Start</a>
<a href ng-click="rndprogress.stop()" >Stop</a>
```

## ngRandomProgress atributes
####rp-data:
an array of data type which will appeare as a progress data.

####rp-control:
the control module to start or stope the progress.

####rp-time:
progress time per milliseconds.

####rp-random:
enable or disable random progress.

####rp-append:
append progress date instead of update.

####rp-loopforever:
make the progress run for ever.

## Demo
please open the demo html file to see how it works.


## License
MIT License

Copyright (c) 2017 http://mahmz.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
