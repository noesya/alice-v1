import { game } from './Game';

game.setup();

if (window.location.hash === '') {
    window.location.hash = '#home'
}