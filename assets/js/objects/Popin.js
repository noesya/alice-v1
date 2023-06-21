import { game } from "js/Game";

class Popin {
    constructor(id) {
        this.element = document.getElementById(id);
        this.close = this.element.querySelector('.close'); 
    }

    show() {
        this.classList.add("active");
    }
    
    hide() {
        this.classList.remove("active");
    }
}

export const popinTroll = new Popin('pop-in-troll');
export const popinCity = new Popin('pop-in-city');
