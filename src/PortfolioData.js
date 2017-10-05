import snkd_gif from './assets/snkd.gif';
import expcalc_gif from './assets/expcalc.gif';
import currency_gif from './assets/currency.gif';
import dodgeblocks_gif from './assets/dodgeblocks.gif';

import Descriptions from './PortfolioDescriptions';

const PortfolioData = {
  projects: {
    snakeDuo: {
      title: "SnakeDuo",
      imgSrc: snkd_gif,
      description: Descriptions.snakeDuo
    },
    exposureCalc: {
      title: "Exposure Calc",
      imgSrc: expcalc_gif,
      description: Descriptions.exposureCalc
    },
    dodgeBlocks: {
      title: "Dodge Blocks!",
      imgSrc: dodgeblocks_gif,
      description: Descriptions.dodgeBlocks
    },
    currencyConvert: {
      title: "Currency Convert Live",
      imgSrc: currency_gif,
      description: Descriptions.currencyConvert
    }
  }  
};

export default PortfolioData;
