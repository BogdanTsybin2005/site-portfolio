import './style.scss';
import allMySVGIcons from './allSvgIcons';
import { ButtonForFooterWithIcon } from '../button';
import { useAppSelector } from '../../hoocks/useAppSelector';
import languageData from '../../interface-language-data/data';



interface IReferenceToHTMLElement {
    footerElement: React.RefObject<HTMLElement | null>;
}

const Footer: React.FC<IReferenceToHTMLElement> = ({ footerElement }) => {
    const language = useAppSelector((state) => state.language);
    const contactMeTitle = languageData[language].contacts.contactMe;

    return (
        <footer className="footer" ref={footerElement}>
            <div className="footer__block">
                <h2 className="footer__contact-me-title">{contactMeTitle}</h2>
                <ul className="footer__list-of-buttons">
                    {allMySVGIcons.icons.map((item) => (
                        <li key={item.id}>
                        <ButtonForFooterWithIcon
                            isIconRelatedToEmail={item.isIconRelatedToEmail}
                            SVGIcon={item.icon}
                            url={item.url}
                        />
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
