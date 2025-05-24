import './style.scss';
import { HeaderLinkToSectionButton } from '../button';
import { useAppSelector } from '../../hoocks/useAppSelector';
import languageData from '../../interface-language-data/data';



interface IBurgerMenu {
  isBurgerMenuOpened: boolean;
  homeClick: () => void;
  aboutClick: () => void;
  projectsClick: () => void;
  contactClick: () => void;
  closeMenu: () => void;
}

const BurgerMenu: React.FC<IBurgerMenu> = ({
  isBurgerMenuOpened,
  homeClick,
  aboutClick,
  projectsClick,
  contactClick,
  closeMenu,
}) => {
  const language = useAppSelector((state) => state.language);
  const headerLang = languageData[language].home.header;

  const handleClick = (fn: () => void) => {
    fn();
    closeMenu();
  };

  return (
    <div className={`burger-menu__body ${isBurgerMenuOpened ? '_burger-menu-is-active' : ''}`}>
      <ul className="burger-menu__container">
        <li>
          <HeaderLinkToSectionButton
            buttonText={headerLang.homeButtonText}
            onClick={() => handleClick(homeClick)}
          />
        </li>
        <li>
          <HeaderLinkToSectionButton
            buttonText={headerLang.aboutButtonText}
            onClick={() => handleClick(aboutClick)}
          />
        </li>
        <li>
          <HeaderLinkToSectionButton
            buttonText={headerLang.projectsButtonText}
            onClick={() => handleClick(projectsClick)}
          />
        </li>
        <li>
          <HeaderLinkToSectionButton
            buttonText={headerLang.contactsButtonText}
            onClick={() => handleClick(contactClick)}
          />
        </li>
      </ul>
    </div>
  );
};

export default BurgerMenu;
