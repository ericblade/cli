
		(function() {
			// Initialize font scaling for resolution independence.
			var screenTypes = %SCREENTYPES%;
			var defaultType = {name: 'standard', pxPerRem: 16, width: window.innerWidth, height: window.innerHeight, aspectRatioName: 'standard', base: true};
			if(screenTypes.length===0) {
				screenTypes.push(defaultType);
			}
			var height = window.innerHeight,
				width = window.innerWidth;
			var scrObj = screenTypes[screenTypes.length - 1];
			if(height > width) {
				width = height;
			}
			for(var i=screenTypes.length-1; i>=0; i--) {
				if(width <= screenTypes[i].width) {
					scrObj = screenTypes[i];
				}
			}
			document.documentElement.style.fontSize = scrObj.pxPerRem + 'px';

			window.onload = function() { setTimeout(function() {
				if(typeof App === 'undefined') {
					// Add script nodes, loading the chunks sequentially.
					var count = 0;
					var appendScripts = function(js) {
						if(js.length>0) {
							var src = js.shift();
							var script = document.createElement('script');
							script.type = 'text/javascript';
							script.src = src;
							script.onload = function() {
								appendScripts(js);
							};
							document.body.appendChild(script);
						}
					};
					appendScripts(%JSASSETS%);
				} else {
					// V8 snapshot, so update the javascript environment then render.
					if(typeof updateEnvironment === 'function') {
						updateEnvironment();
					}
					if(typeof App === 'object' && (typeof ReactDOM === 'object')) {
						ReactDOM.render(App['default'] || App, document.getElementById('root'));
					} else {
						console.log('ERROR: Snapshot app not found');
					}
				}
			}, 0); };
		})();
	