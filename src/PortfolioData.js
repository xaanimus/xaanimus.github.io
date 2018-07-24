import snkd_gif from './assets/snkd.gif';
import expcalc_gif from './assets/expcalc.gif';
import currency_gif from './assets/currency.gif';
import dodgeblocks_gif from './assets/dodgeblocks.gif';

import projects from './PortfolioProjects';

const FullPortfolioData = {
    projects: projects,
    education: [
        {
            institutionName: "Cornell University",
            time: "2015-2019 (Expected)",
            content: "Computer Science\nIthaca, NY"
        }
    ],
    honors: [
        "McMullen Dean's Scholar",
        "Dean's List"
    ],
    courses: [
        "Honors Object Oriented Design and Data Structures",
        "Operating Systems",
        "Algorithms",
        "Graphics",
        "Discrete Structures",
        "Functional Programming",
        "Computer Systems Organization",
        "Database Systems",
        "Engineering Probability and Statistics",
        "Linear Algebra",
        "Multivariable Calculus"
    ],
    programmingLangs: {
        proficient: [
            "Swift",
            "Objective-C",
            "Objective-C++",
            "C++",
            "C",
            "Java",
            "Javascript (Node.js)",
            "OCaml",
            "Python",
            "Golang",
            "Rust",
            "GLSL"
        ]
    },
    technologies: [
        "MySQL",
        "Git",
        "Mercurial",
        "GraphQL",
        "REST",
        "OpenGL",
        "WebGL",
        "iOS/Cocoa Touch",
        "Unity",
        "Qt",
        "Shell"
    ],
    skills: [
        "Object-Oriented Programming",
        "Functional Programming",
        "GUI Programming",
        "Graphics Programming",
        "Code Profiling and Optimization",
        "Algorithms & Data Structures"
    ]
};

const projectsToDisplay = [
    "snakeDuo",
    "exposureCalc",
    "dodgeBlocks",
    "currencyConvert",
].reduce((acc, key) => {
    acc[key] = FullPortfolioData.projects[key];
    return acc;
}, {});


const PortfolioData = {
    projects: projectsToDisplay
};

export default PortfolioData;
