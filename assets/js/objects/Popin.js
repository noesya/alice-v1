import { game } from "js/Game";

class Popin {
    constructor(id) {
        this.element = document.getElementById(id);
        this.close = this.element.querySelector('.close'); 
        this.close.addEventListener('click', this.hide.bind(this));
    }

    show() {
        this.element.classList.add("active");
    }
    
    hide() {
        this.element.classList.remove("active");
    }
}

export const popinCity = new Popin('pop-in-city');
