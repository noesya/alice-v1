import { game } from "js/Game";

export default class Thing {
  constructor({x, y, width, height, src = null}) {
    this.x = x || 0;
    this.y = y || 0;
    this.width = width;
    this.height = height;
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
    return (this.x + this.width > thing.x && this.x < thing.x + thing.width && thing.y + thing.height > this.y && thing.y < this.y + this.height);
  }
  update() {
    if (!this.ready) return;   
    game.ctx.drawImage(this.image, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);

  }
}