import './style.scss';
import { DownloadCVButton, HeaderLinkToSectionButton } from '../button';
import { HeaderButtonBurger } from '../button';
import { useEffect, useState } from 'react';
import useWindowWidth from '../../hoocks/useWindowWidth';



interface IHeaderProps {
    homeClick: () => void;
    aboutClick: () => void;
    projectsClick: () => void;
    contactClick: () => void;
    toggleBurgerMenu: () => void;
}

const Header: React.FC<IHeaderProps> = ({homeClick, aboutClick, projectsClick, contactClick, toggleBurgerMenu}) => {
    const [isBurgerButtonActive, setIsBurgerButtonActive] = useState<boolean>(false);
    const windowWidth: number = useWindowWidth();

    useEffect(() => {
        if (windowWidth >= 768 && isBurgerButtonActive) {
            setIsBurgerButtonActive(false);
            toggleBurgerMenu();
            document.body.style.overflow = 'auto';
        }
    }, [windowWidth]);

    return (
        <header className="header">
            <div className="header__container">
                <DownloadCVButton/>
                <ul className="header__list-of-buttons">
                    <HeaderLinkToSectionButton buttonText='Home' onClick={homeClick}/>
                    <HeaderLinkToSectionButton buttonText='About' onClick={aboutClick}/>
                    <HeaderLinkToSectionButton buttonText='Projects' onClick={projectsClick}/>
                    <HeaderLinkToSectionButton buttonText='Contact' onClick={contactClick}/>
                </ul>
                <HeaderButtonBurger isBurgerActive={isBurgerButtonActive} toggleBurgerActive={() => {
                    setIsBurgerButtonActive(!isBurgerButtonActive);
                    toggleBurgerMenu();
                    document.body.style.overflow = `${isBurgerButtonActive ? 'auto' : 'hidden'}`;
                }}/>
            </div>
        </header>
    )
}


export default Header;
