import { game } from "js/Game";
import Thing from "./Thing";

export default class SpeakingThing extends Thing {
  constructor(parameters) {
    super(parameters)
    this.isSpeaking = false;
    this.setDialog();
  }
  setDialog() {
    this.dialog = document.createElement('div');
    this.dialog.classList.add('game-dialog');
    game.container.append(this.dialog)
  }
  speak(text) {
    this.dialog.innerText = text;
    this.dialog.style.display = "block";
    this.isSpeaking = true;
    this.updateDialog();
  }
  stopSpeaking() {
    this.dialog.style.display = "none";
    this.isSpeaking = false;
  }
  updateDialog() {
    this.dialog.style.left = this.projectedPosition.x + "px";
    this.dialog.style.top = this.projectedPosition.y + "px";
  }
}