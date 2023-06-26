import { WORLD } from "js/data/world";
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
    const { area } = WORLD
    this.x += x * this.speed;
    this.y += y * this.speed;

    this.x = Math.max(area.left, Math.min(this.x, area.right));
    this.y = Math.max(area.top, Math.min(this.y, area.bottom));
  }
  onCollide() {
    this.canCollide = false;
    setTimeout(() => {
      this.canCollide = true;
    }, this.collideTimeoutDuration);
  }
}

