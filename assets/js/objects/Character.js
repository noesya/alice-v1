import Sprite from "./Sprite";

export default class Character extends Sprite {
  constructor(parameters) {
    super(parameters)
    this.speed = 10;
    this.type = "character";
    this.canCollide = true;
    this.collideTimeoutDuration = 5000;

    //TEST
  }
  move(x, y) {
    this.x += x * this.speed;
    this.y += y * this.speed;
  }
  onCollide() {
    this.canCollide = false;
    setTimeout(() => {
      this.canCollide = true;
    }, this.collideTimeoutDuration);
  }
}

