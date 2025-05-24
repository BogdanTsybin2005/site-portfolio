import './style.scss';
import { useAppSelector } from '../../hoocks/useAppSelector';
import { DownloadCVButton, HeaderLinkToSectionButton, HeaderButtonBurger } from '../button';
import LanguageSwitcher from '../LanguageSwitcher';
import languageData from '../../interface-language-data/data';



interface IHeaderProps {
  isBurgerMenuOpened: boolean;
  homeClick: () => void;
  aboutClick: () => void;
  projectsClick: () => void;
  contactClick: () => void;
  toggleBurgerMenu: () => void;
}

const Header: React.FC<IHeaderProps> = ({
  isBurgerMenuOpened,
  homeClick,
  aboutClick,
  projectsClick,
  contactClick,
  toggleBurgerMenu
}) => {
  const language = useAppSelector((state) => state.language);
  const headerLang = languageData[language].home.header;

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__left">
          <DownloadCVButton />
        </div>

        <div className="header__block">
          <div className="header__center">
            <ul className="header__nav">
              <HeaderLinkToSectionButton buttonText={headerLang.homeButtonText} onClick={homeClick} />
              <HeaderLinkToSectionButton buttonText={headerLang.aboutButtonText} onClick={aboutClick} />
              <HeaderLinkToSectionButton buttonText={headerLang.projectsButtonText} onClick={projectsClick} />
              <HeaderLinkToSectionButton buttonText={headerLang.contactsButtonText} onClick={contactClick} />
            </ul>
          </div>

          <div className="header__right">
            <LanguageSwitcher />
            <HeaderButtonBurger
              isBurgerActive={isBurgerMenuOpened}
              toggleBurgerActive={() => {
                toggleBurgerMenu();
                document.body.style.overflow = isBurgerMenuOpened ? 'auto' : 'hidden';
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
