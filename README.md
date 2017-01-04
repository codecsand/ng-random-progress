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

Initialize the control module in your controller and create an array.
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

