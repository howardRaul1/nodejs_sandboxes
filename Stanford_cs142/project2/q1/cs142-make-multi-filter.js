"use strict";


function cs142MakeMultiFilter (originalArray) {
	console.log(originalArray);
	console.log('abc');
	return function arrayFilterer(originalArray1) {
		const currentArray = originalArray1;
		console.log(currentArray);
	};
}

cs142MakeMultiFilter();