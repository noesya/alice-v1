import Thing from "./Thing";
import { popinCity } from "./Popin";
import { game } from "js/Game";

export default class City extends Thing {
  constructor(data) {
    data.hitbox = {
      width: 50,
      height: 50,
      x: 75,
      y: 25
    }
    super(data);
    this.type = "city";
    this.data = data;
    this.html = data.html;
    this.canCollide = true;
    this.collideTimeoutDuration = 2000;
    this.isCollided = true;
  }
  onCollide() {
    // if (!this.canCollide) return;
    // this.canCollide = false;
    this.isCollided = true;

    console.log('contact with city')

    popinCity.show();

    // popinCity.element.querySelector('.subtitle').innerHTML = this.data.name;
    // popinCity.element.querySelector('.baseline').innerHTML = this.data.baseline;
    // popinCity.element.querySelector('.image').src = this.data.src;
    // popinCity.element.querySelector('.data').innerHTML = this.data.html;

    setTimeout(() => {
      this.canCollide = true;
    }, this.collideTimeoutDuration);
  }
  speak(text) {
    game.drawText(text, this.x + this.width / 2, this.y);
  }
  update() {
    super.update();
    
    if (this.isCollided) {
      this.speak("Entrer dans la ville")
    }
    this.isCollided = false;
  }
}