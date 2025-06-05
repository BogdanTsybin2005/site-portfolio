import type { FC, SVGProps } from 'react';
import './style.scss';
import { useAppSelector } from '../../hoocks/useAppSelector';
import languageData from '../../interface-language-data/data';
import CV_file_RU from '../../../public/Tsybin_Bogdan_CV_(RU).pdf';
import CV_file_EN from '../../../public/Tsybin_Bogdan_CV_(EN).pdf';



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
    const language = useAppSelector((state) => state.language);
    const buttonText = languageData[language].home.header.downloadCVButtonText;

    return (
        <a href={language === 'EN' ? CV_file_EN : CV_file_RU} download className="download-cv__button">
            {buttonText}
        </a>
    );
};

export const HeaderLinkToSectionButton: FC<IHeaderLinkButton> = ({ buttonText, onClick }) => {
    return (
        <button className="header-link__button" onClick={onClick}>
            {buttonText}
        </button>
    );
};

export const ButtonForFooterWithIcon: FC<IReactIconWithUrl> = ({SVGIcon, url, isIconRelatedToEmail}) => {
    return (
        <a href={url} className="footer__link" target="_blank" rel="noopener noreferrer">
            <SVGIcon />
            {isIconRelatedToEmail && <span>tsybinb@gmail.com</span>}
        </a>
    );
};

export const HeaderButtonBurger: React.FC<IISButtonBurgerActive> = ({isBurgerActive, toggleBurgerActive}) => {
    return (
        <button
            className={`header__burger ${isBurgerActive ? '_active' : ''}`}
            onClick={toggleBurgerActive}
        >
            <span></span>
        </button>
    );
};


export const HireMeButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    const language = useAppSelector((state) => state.language);
    const buttonText = languageData[language].home.hireMeButtonText;

    return (
        <button className="hire-me__button" onClick={onClick}>
            {buttonText}
        </button>
    );
};
