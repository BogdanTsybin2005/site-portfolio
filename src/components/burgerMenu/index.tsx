import type React from 'react';
import './style.scss';
import { HeaderLinkToSectionButton } from '../button';



interface IBurgerMenu {
    isBurgerMenuOpened: boolean;
    homeClick: () => void;
    aboutClick: () => void;
    projectsClick: () => void;
    contactClick: () => void;
    closeMenu: () => void;
}


const BurgerMenu: React.FC<IBurgerMenu> = ({isBurgerMenuOpened, homeClick, aboutClick, projectsClick, contactClick, closeMenu}) => {
  const handleClick = (fn: () => void) => {
    fn();
    closeMenu();
  };

  return (
    <div className={`burger-menu__body ${isBurgerMenuOpened ? '_burger-menu-is-active' : ''}`}>
      <ul className="burger-menu__container">
        <li><HeaderLinkToSectionButton buttonText="Home" onClick={() => handleClick(homeClick)} /></li>
        <li><HeaderLinkToSectionButton buttonText="About" onClick={() => handleClick(aboutClick)} /></li>
        <li><HeaderLinkToSectionButton buttonText="Projects" onClick={() => handleClick(projectsClick)} /></li>
        <li><HeaderLinkToSectionButton buttonText="Contact" onClick={() => handleClick(contactClick)} /></li>
      </ul>
    </div>
  );
};



export default BurgerMenu;
