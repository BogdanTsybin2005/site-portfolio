import './style.scss';
import { DownloadCVButton, HeaderLinkToSectionButton } from '../button';
import { HeaderButtonBurger } from '../button';



interface IHeaderProps {
  homeClick: () => void;
  aboutClick: () => void;
  projectsClick: () => void;
  contactClick: () => void;
  toggleBurgerMenu: () => void;
  isBurgerMenuOpened: boolean;
}

const Header: React.FC<IHeaderProps> = ({homeClick, aboutClick, projectsClick, contactClick, toggleBurgerMenu, isBurgerMenuOpened}) => {
  return (
    <header className="header">
      <div className="header__container">
        <DownloadCVButton />
        <ul className="header__list-of-buttons">
          <HeaderLinkToSectionButton buttonText="Home" onClick={homeClick} />
          <HeaderLinkToSectionButton buttonText="About" onClick={aboutClick} />
          <HeaderLinkToSectionButton buttonText="Projects" onClick={projectsClick} />
          <HeaderLinkToSectionButton buttonText="Contact" onClick={contactClick} />
        </ul>
        <HeaderButtonBurger
          isBurgerActive={isBurgerMenuOpened}
          toggleBurgerActive={() => {
            toggleBurgerMenu();
            document.body.style.overflow = isBurgerMenuOpened ? 'auto' : 'hidden';
          }}
        />
      </div>
    </header>
  );
};

export default Header;
