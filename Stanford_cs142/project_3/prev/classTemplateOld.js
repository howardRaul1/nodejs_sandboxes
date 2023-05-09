// noinspection ES6ConvertVarToLetConst,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

function C () {
  this.vPublic = '';
  var  vPrivate = '';
  this.mPublicPrivileged = function() {/* vPrivate */};

}

C.prototype.mPublic = function() {/* this.vPublic */};

C.vPublicStatic = '';

var c = new C();



