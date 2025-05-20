import type React from 'react';
import './style.scss';
import { HeaderLinkToSectionButton } from '../button';



interface IBurgerMenu {
    isBurgerMenuOpened: boolean;
    homeClick: () => void;
    aboutClick: () => void;
    projectsClick: () => void;
    contactClick: () => void;
}


const BurgerMenu: React.FC<IBurgerMenu> = ({isBurgerMenuOpened, homeClick, aboutClick, projectsClick, contactClick}) => {
    return <div className={`burger-menu__body ${isBurgerMenuOpened ? '_burger-menu-is-active' : ''}`}>
        <ul className="burger-menu__container">
            <li><HeaderLinkToSectionButton buttonText='Home' onClick={homeClick}/></li>
            <li><HeaderLinkToSectionButton buttonText='About' onClick={aboutClick}/></li>
            <li><HeaderLinkToSectionButton buttonText='Projects' onClick={projectsClick}/></li>
            <li><HeaderLinkToSectionButton buttonText='Contact' onClick={contactClick}/></li>
        </ul>
    </div>
}


export default BurgerMenu;
