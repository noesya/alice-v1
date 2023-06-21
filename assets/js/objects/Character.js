import Sprite from "./Sprite";

export default class Character extends Sprite {
  constructor(parameters) {
    super(parameters)
    this.speed = 15;
    //TEST


  }
  move(x, y) {
    this.x += x * this.speed;
    this.y += y * this.speed;
  }
}

