 
import { game } from "js/Game";

export default class CoinDisplay {
  constructor() {
    this.totalCoins = 22; 
    this.collectedCoins = 0; 
    this.coins = [];
    this.coinImage = new Image();
    this.coinImage.src = "/assets/images/coin/flat-coin.png";
    this.emptyCoinImage = new Image();
    this.emptyCoinImage.src = "/assets/images/coin/empty-coin.png";
    this.coinImageWidth = 22;
    this.coinImageHeight = 22;
    this.padding = 4;
    this.position = {
      x: 10,
      y: 10
    };
    this.coinsPerRow = 11; 
    this.rowHeight = this.coinImageHeight + this.padding; 
  }

  addCoin() {
    this.coins.push(this.coinImage);
  }

  draw() {
    const totalCoins = this.coins.length;
    const startX = this.position.x;
    let currentX = startX;
    let currentY = this.position.y;

    this.coins.forEach((coin, index) => {
      const x = currentX;
      const y = currentY;

      game.ctx.drawImage(coin, x, y, this.coinImageWidth, this.coinImageHeight);

      if ((index + 1) % this.coinsPerRow === 0) {
        currentX = startX;
        currentY += this.rowHeight;
      } else {
        currentX += this.coinImageWidth + this.padding;
      }
    });
  }
}
