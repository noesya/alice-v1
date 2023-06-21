import Thing from "./Thing";

export default class City extends Thing {
  constructor(data) {
    super(data);
    this.type = "city";
    this.data = data;
    this.html = data.html;
    this.canCollide = true;
    this.collideTimeoutDuration = 10000;
  }
  onCollide() {
    if (!this.canCollide) return;
    this.canCollide = false;

    alert(this.data.name)

    setTimeout(() => {
      this.canCollide = true;
    }, this.collideTimeoutDuration);
  }
}