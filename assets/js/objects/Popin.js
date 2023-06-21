import { game } from "js/Game";

export default class Popin {
    constructor(id) {
        this.element = document.getElementById(id);
        this.close = this.element.querySelector('.close')[0]; 
    }

    show() {
        this.classList.add("active");
    }
    
    hide() {
        this.classList.remove("active");
    }
}
