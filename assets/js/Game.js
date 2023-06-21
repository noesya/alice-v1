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

  }
  setup() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.container.appendChild(this.canvas);

    this.resize();
    this.listen();

    this.scene = new Scene(this);
    this.loop();
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
