import Thing from "./Thing";
import { popinCity } from "./Popin";

export default class City extends Thing {
  constructor(data) {
    super(data);
    this.type = "city";
    this.data = data;
    this.html = data.html;
    this.canCollide = true;
    this.collideTimeoutDuration = 2000;
  }
  onCollide() {
    if (!this.canCollide) return;
    this.canCollide = false;

    popinCity.show();

    popinCity.element.querySelector('.subtitle').innerHTML = this.data.name;
    popinCity.element.querySelector('.baseline').innerHTML = this.data.baseline;
    popinCity.element.querySelector('.image').src = this.data.src;
    popinCity.element.querySelector('.data').innerHTML = this.data.html;

    setTimeout(() => {
      this.canCollide = true;
    }, this.collideTimeoutDuration);
  }
}