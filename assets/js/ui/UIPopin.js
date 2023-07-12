export const BODY_CLASS = {
  opened: "popin-is-opened",
  closing: "popin-is-closing",
}

export const POPIN_CLASS = {
  opened: "is-opened"
}

export class UIPopin {
  constructor(element) {
    this.element = element;
    this.close = this.element.querySelector('.close'); 
    this.close.addEventListener('click', this.hide.bind(this));
  }
  show() {
    this.element.classList.add(POPIN_CLASS.opened);
    document.body.classList.add(BODY_CLASS.opened);
  }
  hide() {
    this.element.classList.remove(POPIN_CLASS.opened);
    document.body.classList.remove(BODY_CLASS.opened);
    document.body.classList.add(BODY_CLASS.closing);
    setTimeout(() => {
        document.body.classList.remove(BODY_CLASS.closing);
    }, 400);
  }
}
