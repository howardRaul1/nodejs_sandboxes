"use strict";
function cs142MakeMultiFilter (originalArray) {
	const currentArray = [...originalArray];
	return function arrayFilterer(filterCriteria , callback ) {
		if (typeof filterCriteria !== 'function') return currentArray;
		for (const k in currentArray) if ( ! filterCriteria(currentArray[k]) ) currentArray.splice(k,1);
		callback.call(originalArray, currentArray);
	};
}


var arrayFilterer1 = cs142MakeMultiFilter([1, 2, 3]);

// Call arrayFilterer1 (with a callback function) to filter out all the numbers
// not equal to 2.
arrayFilterer1(function (elem) {
	return elem !== 2; // check if element is not equal to 2
}, function (currentArray) {
	// 'this' within the callback function should refer to originalArray which is [1, 2, 3]
	console.log(this); // prints [1, 2, 3]
	console.log(currentArray); // prints [1, 3]
});
