const AppData = {
    appStoreLink: "https://itunes.apple.com/om/developer/serge-olivier-amega/id1043724215",
    githubLink: "http://www.github.com/xaanimus",
    resumeLink: "assets/resume3.pdf"
};

//PORTFOLIO STUFF
function portfolioProjects() {
    let projects = {};
    projects.snakeDuo = {
        title: "SnakeDuo",
        imgSrc: "assets/snkd.gif"
    };
    projects.snakeDuo.description = `
An iOS game similar to the classic Snake game. The player has two control two snakes, eat food to get more points, and try not to crash into the other snake or any of the walls. I wrote this game with Corona SDK, and I made the server for this game using Node.js.
`;

    projects.exposureCalc = {
        title: "Exposure Calc",
        imgSrc: "assets/expcalc.gif"
    };
    projects.exposureCalc.description = `
An Exposure calculator that allows you to calculate exposure parameters for photography/cinematography.
`;

    projects.dodgeBlocks = {
        title: "Dodge Blocks!",
        imgSrc: "assets/dodgeblocks.gif"
    };
    projects.dodgeBlocks.description = `
An iOS game that requires the player to travel through a field of blocks and avoid hitting them. I made this game using Corona SDK for the mobile app, and Node.js for the server.
`;

    projects.currencyConvert = {
        title: "Currency Convert Live",
        imgSrc: "assets/currency.gif"
    };
    projects.currencyConvert.description = `
A simple currency converter that converts between 30 popular currencies. I used the Fixer.io API to get exchange rates, and the SwiftyJSON library.
`;

    return projects;
}
const PortfolioData = {
    projects: portfolioProjects()
};
//END PORTFOLIO STUFF

Array.prototype.intersperse = function (separator) {
    return this.reduce((acc, item) =>
                       acc.concat(acc.length == 0 ? [item] : [separator, item]), []);
};

Array.prototype.intersperseDOM = function (separator) {
    return this.reduce((acc, item) =>
                       acc.concat(
                           acc.length == 0 ? [item] : [separator.cloneNode(true), item]),
                       []);
};

Node.prototype.appendChildren = function (children) {
    for (const child of children) {
        this.appendChild(child);
    }
};

function escapeDocument() {
    document.body.innerHTML = document.body.innerHTML
        .replace("{AppData.githubLink}", AppData.githubLink)
        .replace("{gh_logo}", "assets/github-icon.png")
    ;
}

function setUpFooter() {
    if (document.getElementsByClassName("Footer").length == 0) {
        return;
    }

    //set up footer
    const footerItems = [
        {title: "Résumé", link: AppData.resumeLink},
        {title: "App Store", link: AppData.appStoreLink},
        {title: "Github", link: AppData.githubLink},
    ];

    let separator = document.getElementsByClassName("FooterSeparator")[0];
    let template = document.getElementsByClassName("footerItemTemplate")[0];
    let footerHtmls = footerItems
        .map(item => {
            let node = template.cloneNode(true);
            node.innerHTML = node.innerHTML
                .replace("{item.link}", item.link)
                .replace("{item.title}", item.title);
            return node;
        })
        .intersperseDOM(separator);
    let templateParent = template.parentNode;
    template.remove();
    separator.remove();
    templateParent.appendChildren(footerHtmls);
}

function setUpPortfolio() {
    if (document.getElementsByClassName("Portfolio").length == 0) {
        return;
    }

    let template = document.getElementsByClassName("PortfolioItemDivTemplate")[0];
    const portfolioItems = Object.keys(PortfolioData.projects).map(projectId => {
        const project = PortfolioData.projects[projectId];
        let node = template.cloneNode(true);
        node.innerHTML = node.innerHTML
            .replace("{project.imgSrc}/", project.imgSrc)
            .replace("{project.name}", projectId);
        return node;
    });
    const midPointOfItems = portfolioItems.length / 2;

    document.getElementById("PortfolioColumn0")
        .appendChildren(portfolioItems.slice(0,midPointOfItems));
    document.getElementById("PortfolioColumn1")
        .appendChildren(portfolioItems.slice(midPointOfItems));

    template.remove();
}

function setupProjectDetail() {
    if (document.getElementsByClassName("ProjectDetail").length == 0) {
        return;
    }

    let params = new URLSearchParams(location.search.slice(1));
    let projectName = params.get("projectName") || "";
    let project = PortfolioData.projects[projectName];
    if (project == null) {
        return;
    }

    let detailNode = document.getElementsByClassName("ProjectDetail")[0];
    detailNode.innerHTML = detailNode.innerHTML
        .replace("{project.title}", project.title)
        .replace("{project.imgSrc}", project.imgSrc)
        .replace("{project.description}", project.description);
}

escapeDocument();
setUpFooter();
setUpPortfolio();
setupProjectDetail();

//i know this website is hacky don't judge
