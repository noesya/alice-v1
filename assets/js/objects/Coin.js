import Thing from "./Thing";
import { popinCoin } from "./Popin";
import { game } from "js/Game";

export default class Coin extends Thing {
  constructor(data) {
    data.hitbox = {
      width: 35,
      height: 35,
      x: 50,
      y: 25
    }

    const scale = 0.25;
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
    popinCoin.show(this.data)
  }

  update() {
    if (!this.active) return;
    super.update()
  }
}