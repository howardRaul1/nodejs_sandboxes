// noinspection ES6ConvertVarToLetConst

"use strict";
//var assert = require('assert')

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
