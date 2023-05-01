// noinspection JSCheckFunctionSignatures,DuplicatedCode,ES6ConvertVarToLetConst

"use strict";
function cs142MakeMultiFilter (originalArray) {
	const currentArray = [...originalArray];
	return function arrayFilterer(filterCriteria , callback ) {
		if (typeof filterCriteria !== 'function') return currentArray;
		for (const k in currentArray) if ( ! filterCriteria(currentArray[k]) ) currentArray.splice(k,1);

		if (typeof callback === 'function') {
			callback.call(originalArray, currentArray);

		}
		return arrayFilterer;
	};
}
// ***********************************************************************
