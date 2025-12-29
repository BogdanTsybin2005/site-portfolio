import sitePortfolio from '../../assets/images/site-portfolio.png';
import YourMeal from '../../assets/images/YourMeal.png';
import internetStore from '../../assets/images/internet-store.png';
import _4Pets from '../../assets/images/4Pets.png';
import newsWebsite from '../../assets/images/news-web-site.png';



interface ISlideParams {
  id: number;
  imagePath: string;
  urlWebSite: string;
  gitHubUrl: string;
  projectName: string;
}



const slides: ISlideParams[] = [
  {
    id: 1,
    imagePath: sitePortfolio,
    urlWebSite: 'https://bogdan-s-site-portfolio-9499e.web.app/',
    gitHubUrl: 'https://github.com/BogdanTsybin2005/site-portfolio',
    projectName: 'Site Portfolio',
  },
  {
    id: 2,
    imagePath: _4Pets,
    urlWebSite: 'https://4-pets-frontend.vercel.app/',
    gitHubUrl: 'https://github.com/BogdanTsybin2005/4Pets-frontend',
    projectName: '4Pets',
  },
  {
    id: 3,
    imagePath: internetStore,
    urlWebSite: 'https://internet-store-project.vercel.app/',
    gitHubUrl: 'https://github.com/BogdanTsybin2005/internet-store-project',
    projectName: 'Internet Store',
  },
  {
    id: 4,
    imagePath: YourMeal,
    urlWebSite: 'https://your-meal-98c8f.firebaseapp.com/',
    gitHubUrl: 'https://github.com/BogdanTsybin2005/Your-Meal',
    projectName: 'Your Meal',
  },
  {
    id: 5,
    imagePath: newsWebsite,
    urlWebSite: 'https://news-web-site-xi.vercel.app/',
    gitHubUrl: 'https://github.com/BogdanTsybin2005/news-web-site',
    projectName: 'News Website',
  },
];

export default slides;
