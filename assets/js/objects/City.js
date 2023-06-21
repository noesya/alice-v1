import Thing from "./Thing";

export default class City extends Thing {
  constructor(data) {
    super(data);
    this.data = data;
    this.html = data.html
  }
}