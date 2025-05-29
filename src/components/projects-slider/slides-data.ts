import sitePortfolio from '../../assets/images/site-portfolio.png';
import YourMeal from '../../assets/images/YourMeal.png';
import internetStore from '../../assets/images/internet-store.png';
import _4Pets from '../../assets/images/4Pets.png';



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
    urlWebSite: 'https://your-site-portfolio.com',
    gitHubUrl: 'https://github.com/your-portfolio',
    projectName: 'Site Portfolio',
  },
  {
    id: 2,
    imagePath: _4Pets,
    urlWebSite: 'https://4pets.com',
    gitHubUrl: 'https://github.com/4pets',
    projectName: '4Pets',
  },
  {
    id: 3,
    imagePath: internetStore,
    urlWebSite: 'https://internet-store.com',
    gitHubUrl: 'https://github.com/internet-store',
    projectName: 'Internet Store',
  },
  {
    id: 4,
    imagePath: YourMeal,
    urlWebSite: 'https://your-meal.com',
    gitHubUrl: 'https://github.com/your-meal',
    projectName: 'Your Meal',
  },
];

export default slides;
