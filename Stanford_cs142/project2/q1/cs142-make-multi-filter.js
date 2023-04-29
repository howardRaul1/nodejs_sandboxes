"use strict";


function cs142MakeMultiFilter (originalArray) {
	console.log(originalArray);
	console.log('abc');
	return function arrayFilterer(a, b) {
		// const currentArray = originalArray1;
		// console.log(currentArray);
		console.log(a + '-' + b);
	};
}

cs142MakeMultiFilter();