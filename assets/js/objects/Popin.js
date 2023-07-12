class Popin {
    constructor(id) {
        this.id = id;
        this.class = this.id + "--opened";
        this.element = document.getElementById(id);
        this.close = this.element.querySelector('.close'); 
        this.close.addEventListener('click', this.hide.bind(this));
    }
    show(data) {
        this.element.querySelector('.image').src = data.src;
        this.element.querySelector('.subtitle').innerHTML = data.name;
        if (data.baseline) {
            this.element.querySelector('.baseline').innerHTML = data.baseline;
        }
        this.element.querySelector('.data').innerHTML = data.html;
        this.element.classList.add("active");
        this.element.scrollTo(0, 0);
        document.body.classList.add(this.class);
    }
    hide() {
        this.element.classList.remove("active");
        document.body.classList.remove(this.class);
        document.body.classList.add("is-popin-closing");
        setTimeout(() => {
            document.body.classList.remove("is-popin-closing");
        }, 400);
    }
}

export const popinCity = new Popin('pop-in-city');
// export const popinCoin = new Popin('pop-in-coin');