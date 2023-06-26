import { game } from "js/Game";

class Popin {
    constructor(id) {
        this.element = document.getElementById(id);
        this.close = this.element.querySelector('.close'); 
        this.close.addEventListener('click', this.hide.bind(this));
    }
    show(data) {
        this.element.querySelector('.subtitle').innerHTML = data.name;
        this.element.querySelector('.baseline').innerHTML = data.baseline;
        this.element.querySelector('.image').src = data.src;
        this.element.querySelector('.data').innerHTML = data.html;

        this.element.classList.add("active");
        this.element.scrollTo(0, 0);
    }
    
    hide() {
        this.element.classList.remove("active");
    }
}

export const popinCity = new Popin('pop-in-city');
