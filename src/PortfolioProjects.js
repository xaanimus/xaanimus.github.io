//@flow
import snkd_gif from './assets/snkd.gif';
import expcalc_gif from './assets/expcalc.gif';
import currency_gif from './assets/currency.gif';
import dodgeblocks_gif from './assets/dodgeblocks.gif';

let projects = {};

projects.snakeDuo = {
    title: "SnakeDuo",
    imgSrc: snkd_gif
};
projects.snakeDuo.description = `
An iOS game similar to the classic Snake game. The player has two control two snakes, eat food to get more points, and try not to crash into the other snake or any of the walls. I wrote this game with Corona SDK, and I made the server for this game using Node.js.
`;

projects.exposureCalc = {
    title: "Exposure Calc",
    imgSrc: expcalc_gif
};
projects.exposureCalc.description = `
An Exposure calculator that allows you to calculate exposure parameters for photography/cinematography.
`;

projects.dodgeBlocks = {
    title: "Dodge Blocks!",
    imgSrc: dodgeblocks_gif
};
projects.dodgeBlocks.description = `
An iOS game that requires the player to travel through a field of blocks and avoid hitting them. I made this game using Corona SDK for the mobile app, and Node.js for the server.
`;

projects.currencyConvert = {
    title: "Currency Convert Live",
    imgSrc: currency_gif
};
projects.currencyConvert.description = `
A simple currency converter that converts between 30 popular currencies. I used the Fixer.io API to get exchange rates, and the SwiftyJSON library.
`;

export default projects;
