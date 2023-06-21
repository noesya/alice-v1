export default class Thing {
  constructor({x, y, width, height, src = null}) {
    this.x = x || 0;
    this.y = y || 0;
    this.width = width;
    this.height = height;
    this.src = src;

    if (this.src) {
      this.image = new Image();
      this.image.src = this.src;
    }
  }

  collides(thing) {
    return (this.x + this.width > thing.x && this.x < thing.x + thing.width && thing.y + thing.height > this.y && thing.y < this.y + this.height);
  }
}