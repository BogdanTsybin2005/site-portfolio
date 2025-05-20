import './style.scss'
import allMySVGIcons from './allSvgIcons'
import { ButtonForFooterWithIcon } from '../button'



interface IReferenceToHTMLElement {
    footerElement: React.RefObject<HTMLElement | null>
}


const Footer: React.FC<IReferenceToHTMLElement> = ({footerElement}) => {

    return (
        <footer className="footer" ref={footerElement}>
            <div className="footer__block">
                <h2 className="footer__contact-me-title">Contact Me</h2>
                <ul className="footer__list-of-buttons">
                    {allMySVGIcons.icons.map((item) => {
                        return (
                            <li key={item.id}>
                                <ButtonForFooterWithIcon 
                                    isIconRelatedToEmail={item.isIconRelatedToEmail}
                                    SVGIcon={item.icon} 
                                    url={item.url}
                                />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </footer>
    )
}

export default Footer;
