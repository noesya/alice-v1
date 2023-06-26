import Thing from "./Thing";
import { popinCity } from "./Popin";
import { game } from "js/Game";
import SpeakingThing from "./SpeakingThing";

export default class City extends SpeakingThing {
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
    this.collideTimeoutDuration = 5000;
    this.isCollided = true;

    this.dialog.classList.add('game-dialog--action');
    this.dialog.addEventListener('click', () => this.openPopin());
  }
  onCollide() {
    this.isCollided = true;
    this.speak("Entrer dans la ville")
  }

  openPopin() {
    popinCity.show(data);
  }

  update() {
    super.update();

    if (this.isCollided) {
      this.speak("Entrer dans la ville")
      this.updateDialog();
    } else {
      this.stopSpeaking();
    }

    this.isCollided = false;
  }
}