import Thing from "./Thing";

export default class City extends Thing {
  constructor(data) {
    super({
        x: data.x,
        y: data.y,
        width: data.width,
        height: data.height,
        src_width: data.src_width,
        src_height: data.src_height,
        src: data.src
    });
    this.data = data;
    this.html = data.html
  }
}