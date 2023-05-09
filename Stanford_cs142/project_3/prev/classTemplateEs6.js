// noinspection ES6ConvertVarToLetConst,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

class C_es6 {

  constructor() { // == Function() constructor
    this.vPublic = '';
    const vPrivate = '';
    this.mPublicPrivileged = function() {/* vPrivate */};
  }

  mPublic() {/* this.vPublic */}

  static vPublicStatic = '';
  static mPublicStatic() {/* this.vPublicStatic */}
}

C_es6.prototype.mPublic2 = function() {/* this.vPublic */};

var c = new C();

c.mPublic();
c.mPublic2();
c.mPublicPrivileged();
C_es6.mPublicStatic();

