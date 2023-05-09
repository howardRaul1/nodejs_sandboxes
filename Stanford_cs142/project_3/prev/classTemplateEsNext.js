// noinspection JSUnusedGlobalSymbols,JSUnusedLocalSymbols

class C_esNext {
  vPublic = 1; // Fields without initializers are initialized to undefined

  constructor(vPublic) { this.vPublic = vPublic; }

  get mPublicValue () { return this.mPublicGetter(); } // Getter, c.mPublicValue
      mPublicGetter() { return this.vPublic + ""   ; }

  // --------- Private Section: Begin ----------------
  #vPrivate = 2;
  #mPrivate() {}
  static #vPrivateStatic = 3;
  static #mPrivateStatic() {}
  // --------- Private Section: End ----------------

  static vPublicStatic = ''; // C_esNext.vPublicStatic
  static mPublicStatic() { /* this.vPublicStatic */ }

  static { // static initializer block
    /* this.vPublicStatic */
  }

}

