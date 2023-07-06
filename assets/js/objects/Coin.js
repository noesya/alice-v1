import Thing from "./Thing";
import { game } from "js/Game";

export default class Coin extends Thing {
  constructor(data) {
    data.hitbox = {
      width: 70,
      height: 70,
      x: 50,
      y: 25
    }

    const scale = 0.5;
    data.width = data.srcWidth * scale;
    data.height = data.srcHeight * scale;

    super(data);

    this.type = "coins";
    this.data = data;
    this.html = data.html;
    this.canCollide = true;
    this.collideTimeoutDuration = 5000;
    this.active = true; 
    this.depthOffset = -200;
  }

  onCollide() {
    this.active = false;
    console.log('pop');
  }

  update() {
    if (!this.active) return;
    super.update()
  }
}