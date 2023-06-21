import Thing from "./Thing";

export default class City extends Thing {
  constructor(data) {
    super({
        x: data.x,
        y: data.y,
        width: data.width,
        height: data.height,
        srWidth: data.srcWidth,
        srcHeight: data.srcHeight,
        src: data.src
    });
    this.data = data;
    this.html = data.html
  }
}