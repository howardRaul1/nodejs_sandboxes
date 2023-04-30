// noinspection ES6ConvertVarToLetConst

"use strict";
var assert = require('assert')

class Cs142TemplateProcessor { // class: start ///////////////////////////////////
  constructor(origStr) { this.origStr = origStr;} // instance public variable

  fillIn(dict) {
    let currStr = this.origStr;

    for (const [k, v] of Object.entries(dict)) {
      let fullKey = '{{' + k + '}}';
      if (currStr.includes(fullKey)) currStr = currStr.replace(fullKey, "" + v);
    }
    if (currStr.includes('{{')) {
        currStr = currStr.replace(/\{\{[^{}]*\}\}/, '' );
    }
    return currStr;
  }

} // class: end ////////////////////////////////////


var template = "My favorite month is {{month}} but not the day {{day}} or the year {{year}}";
var dateTemplate = new Cs142TemplateProcessor(template);

var dictionary = {month: "July", day: "1", year: "2016"};
var str = dateTemplate.fillIn(dictionary);

assert(str === "My favorite month is July but not the day 1 or the year 2016");

// Case: property doesn't exist in dictionary
var dictionary2 = {day: "1", year: "2016"};
var str = dateTemplate.fillIn(dictionary2);

assert(str === "My favorite month is  but not the day 1 or the year 2016");

