import { UIPopin } from "./ui/UIPopin";

class UI {
  constructor() {
    this.definitions = document.querySelectorAll('.definition');
    this.definitions.forEach(element => {
      new UIPopin(element)
    });
    console.log(this.definitions)
  }
  listen() {

  }
  open(index) {
    const definition = this.definitions.querySelectorAll('.definition')[index];
    
  }
}

export default new UI();