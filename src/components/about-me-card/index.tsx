import type React from 'react';
import './style.scss';
import { allMyFrontEndSkills } from './about-me-data';



interface ICardParams {
    id: number;
    title: string;
    paragraphText: string;
}



const AboutMeCard: React.FC<ICardParams> = ({id, title, paragraphText}) => {
    return <div className="about-me__card-block" key={id}>
        <h2 className="about-me__title">{title}</h2>
        <p className="about-me__text">{paragraphText}</p>
    </div>
}

export function MySkillsCard() {
    return (
        <div className="my-skills__cards">
            {allMyFrontEndSkills.allMySkills.map((item) => {
                return <div className="my-skills__card" key={item.id}>
                    <div className="my-skills__image-block">
                        <img src={item.technologyIconPath} alt="my frontend skill" />
                    </div>
                    <p className="my-skills__name">{item.skillName}</p>
                </div>
            })}
        </div>
    )
}

export default AboutMeCard;
