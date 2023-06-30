export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== Building && this.evacuationWarningMessage() === undefined) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    if (this.constructor !== Building) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
    return undefined;
  }
}
