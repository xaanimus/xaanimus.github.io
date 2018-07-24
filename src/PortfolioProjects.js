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

projects.xsray = {
    title: "Xsray - Path Tracer built with rust",
    description: "A path tracer built with rustlang",
    link: "https://github.com/xaanimus/xsray"
};

projects.fb2017 = {
    title: "Facebook",
    subtitle: "Software Engineering Intern - iOS",
    time: "Summer 2017",
    bullet: [
        "Utilized A/B testing to maximize effectivness of features",
        "Contributed to the development of features on the Facebook app using Component-based architecture and GraphQL",
        "Collaborated with team of developers, product managers and designers to improve the functionality of the app"
    ]
};

projects.independentIosDev = {
    title: "Independent iOS Developer",
    time: "2014 - 2017",
    bullet: [
        "Built and submitted iOS apps to the iTunes App Store",
        "Developed server backends for iOS apps using Node.js and Golang",
        "Used the MVC design pattern to build apps with User Interfaces in an organized and maintainable way",
        "Experience with client/server communication using REST and Websockets",
    ]
};

projects.creativecomputing = {
    title: "Creative Computing Club",
    subtitle: "Co-founder, Project Software Lead",
    time: "Jan 2017 - Now",
    bullet: [
        "Lead software teams for projects",
        "Collaborated with other founders to build a budget and organize club structure"
    ]
};

projects.appdev = {
    title: "Cornell AppDev",
    subtitle: "Software Developer, Project Lead",
    time: "Fall 2017 - Now",
    bullet: [
        "Project lead for CU Here in Spring 2017",
        "Used ARKit and SceneKit to create an AR app to explore campus",
    ]
};

export default projects;
