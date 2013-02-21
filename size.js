(function (name, context, deps, definition, i) {
	if (typeof module != 'undefined' && module.exports){
		for(i=0; i<deps.length;i++){deps[i] = require[deps[i]] || null;}
		module.exports = definition.apply(context,deps);
	}
	else if (typeof define == 'function' && define.amd){
		define(deps,definition);
	}
	else{
		for(i=0; i<deps.length;i++){deps[i] = context[deps[i]] || null;}
		context[name] = definition.apply(context,deps);
	}
})('noreflow', this, ['Evt'], function(Evt){

	if(!Evt){throw new Error('this library needs an event mixer to work, please be sure to include it')}

	var Base = function(){};
	Base.prototype = {
		constructor: Base
	};
	Evt(Base,true,Evt.SIMPLE);

	var Size = function(){
		Base.call(this);
	}
	Size.prototype = new Base();
	Size.prototype.constructor = Size;
//see:
//http://www.stubbornella.org/content/2009/03/27/reflows-repaints-css-performance-making-your-javascript-slow/
//http://benvinegar.github.com/seamless-talk/
//http://stackoverflow.com/questions/13234214/reflow-layout-performance-for-large-application
//https://developers.google.com/speed/articles/reflow
})