angular.module('ngRandomProgress',[]).directive('randomProgress', function($interval) {
		return{	
			restrict: 'AE',
			scope:{
				rpData:'=',
				rpTime:'@',
				rpRandom:'@',
				rpLoopforever:'@',
				rpAppend:'@',
				rpControl:'='
			},
			link: function(scope, element, attrs) {
				if(!scope.rpData){
					throw "ngRandomProgress Error: rpData is Null, please add rpData property and assign an Array of data to it.";
				}
				if(!scope.rpControl){
					throw "ngRandomProgress Error: rpControl is Null, please add rpControl property and assign a control function to it.";
				}
				if(!scope.rpTime){
					throw "ngRandomProgress Error: rpTime is Null, please add rpTime property and assign the interval time to it.";
				}
				var elem = element[0];
				var loaduserstimer;
				scope.start = function(){
					if(scope.rpRandom){
						scope.rpData = shuffle(scope.rpData);
					}
					if(elem.tagName.toLowerCase() !== "img"){
						elem.innerHTML = scope.rpData[0];
					}else{
						elem.src = scope.rpData[0];
					}
					var counter = 1;
					if(loaduserstimer)
					$interval.cancel(loaduserstimer);
					loaduserstimer= $interval(function(){
						if(elem.tagName.toLowerCase() !== "img"){
							if(!scope.rpAppend)
								elem.innerHTML = scope.rpData[counter];
							else
								elem.innerHTML += scope.rpData[counter];
						}else{
							elem.src= scope.rpData[counter];
						}
						counter++;
						if(!scope.rpLoopforever){
							if(counter === scope.rpData.length) {
								counter = 0;
								$interval.cancel(loaduserstimer);
							}
						}else{
							if(counter === scope.rpData.length) {
								counter = 0;
							}
						}
							
					},scope.rpTime);
				}
				
				
				scope.stop = function(){
					$interval.cancel(loaduserstimer);
				}
				
				var shuffle = function(a) {
					var j, x, i;
					for (i = a.length; i; i--) {
						j = Math.floor(Math.random() * i);
						x = a[i - 1];
						a[i - 1] = a[j];
						a[j] = x;
					}
					return a;
				}
								
				scope.rpControl.start = function(){
					scope.start();
				}
				
				scope.rpControl.stop = function(){
					scope.stop();
				}
			
			}
		};
	});