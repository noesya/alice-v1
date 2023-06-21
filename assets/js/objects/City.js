import Sprite from "./Sprite";

export default class City extends Sprite {
  constructor(data) {
    super({
        x: data.x,
        y: data.y,
        width: data.width,
        height: data.height,
        src: data.src
    });
    console.log(data.src);
    this.data = data;
    this.html = data.html
  }
}