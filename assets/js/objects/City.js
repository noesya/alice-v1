import Sprite from "./Sprite";

export default class City extends Sprite {
  constructor(data) {
    super({
        src: data.src,
        x: data.x,
        y: data.y,
        width: data.width,
        height: data.height
    });
    this.data = data;
    this.html = data.html
  }
}