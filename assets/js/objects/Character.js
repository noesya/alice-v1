import Sprite from "./Sprite";

export default class Character extends Sprite {
  constructor(parameters) {
    super(parameters)

    //TEST


  }
  move(x, y) {
    this.x += x;
    this.y += y;
  }
}

