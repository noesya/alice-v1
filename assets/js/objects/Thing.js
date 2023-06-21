import { game } from "js/Game";

export default class Thing {
  constructor({x, y, width, height, srcWidth, srcHeight, src = null}) {
    this.x = x || 0;
    this.y = y || 0;
    this.width = width;
    this.height = height;
    this.srcWidth = srcWidth;
    this.srcHeight = srcHeight;
    this.src = src;
    this.ready = this.src ? true : false;

    if (this.src) {
      this.image = new Image();
      this.image.addEventListener('load', () => {
        this.ready = true
      });
      this.image.src = this.src;
    }
  }

  collides(thing) {
    if (!this.canCollide) return;
    return (this.x + this.width > thing.x && this.x < thing.x + thing.width && thing.y + thing.height > this.y && thing.y < this.y + this.height);
  }
  update() {
    if (!this.ready) return;
    game.drawImage(this.image, 0, 0, this.srcWidth, this.srcHeight, this.x, this.y, this.width, this.height);

  }
}