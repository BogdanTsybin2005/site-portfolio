import type { FC, SVGProps } from 'react';
import './style.scss';
import CV_file from '../../../public/Tsybin_Bogdan_CV.pdf'
import type React from 'react';



interface IHeaderLinkButton {
    buttonText: string;
    onClick: () => void;
}

interface IReactIconWithUrl {
    SVGIcon: FC<SVGProps<SVGSVGElement>>;
    url: string;
    isIconRelatedToEmail: boolean;
}

interface IISButtonBurgerActive {
    isBurgerActive: boolean;
    toggleBurgerActive: () => void;
}



export const DownloadCVButton = () => {
    return <a href={CV_file} download className="download-cv__button">Download CV</a>;
};


export const HeaderLinkToSectionButton: FC<IHeaderLinkButton> = ({buttonText, onClick}) => {
    return (
        <button className="header-link__button" onClick={onClick}>
            {buttonText}
        </button>
    );
};


export const ButtonForFooterWithIcon: FC<IReactIconWithUrl> = ({SVGIcon, url, isIconRelatedToEmail}) => {
    return (
        <a href={url} className="footer__link" target="_blank" rel="noopener noreferrer">
            <SVGIcon/> 
            {isIconRelatedToEmail && <span>tsybinb@gmail.com</span>}
        </a>
    );
};


export const HeaderButtonBurger: React.FC<IISButtonBurgerActive> = ({isBurgerActive, toggleBurgerActive}) => {
    return <button className={`header__burger ${isBurgerActive ? '_active' : ''}`} onClick={toggleBurgerActive}><span></span></button>
}


export const HireMeButton: React.FC<{onClick: () => void}> = ({onClick}) => {
    return <button className="hire-me__button" onClick={onClick}>Hire me</button>
}
