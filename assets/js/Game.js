import Scene from './Scene';

export class Game {
  get width () {
    return this.canvas.width
  }
  get height () {
    return this.canvas.height
  }
  constructor() {
    this.container = document.querySelector('#game');

    if (!this.container) {
      return console.warning('no game container found');
    }

    this.setup();
    this.loop();
  }
  setup() {
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
    this.container.appendChild(this.canvas);

    this.resize();
    this.listen();

    this.scene = new Scene(this);
  }
  listen() {
    window.addEventListener('resize', this.resize.bind(this));
  }
  resize() {
    this.canvas.width = this.container.offsetWidth;
    this.canvas.height = this.container.offsetHeight;
  }
  loop () {
    this.scene.update();
    requestAnimationFrame(this.loop.bind(this));
  }
}

export const game = new Game();
