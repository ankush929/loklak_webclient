'use strict';

var filtersModule = require('./_index.js');

/**
 * @ngInject
 */

 filtersModule.filter('tweetHashtag', function () {
 	return function(input) {
 		var aTag = '<a class="external-hashtag" rel="external" href="./search?q=%23$1">#$1</a>';
 		var hashtagReg = /#([\wäöå]+)/gi;
 		return input.replace(hashtagReg, aTag);
 	};
 });