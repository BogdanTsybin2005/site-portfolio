import './style.scss';
import type { FC } from 'react';
import { allMyFrontEndSkills } from './about-me-data';



interface AboutMeCardProps {
    id: number;
    title: string;
    paragraphText: string;
}

const AboutMeCard: FC<AboutMeCardProps> = ({ id, title, paragraphText }) => {
    return (
        <div className="about-me__card-block" key={id}>
            <h2 className="about-me__title">{title}</h2>
            <p className="about-me__text">{paragraphText}</p>
        </div>
    );
};

export const MySkillsCard: FC = () => {
    return (
        <div className="my-skills__cards">
            {allMyFrontEndSkills.allMySkills.map(({ id, skillName, technologyIconPath: Icon }) => (
                <div className="my-skills__card" key={id}>
                    <div className="my-skills__image-block">
                        <Icon />
                    </div>
                    <p className="my-skills__name">{skillName}</p>
                </div>
            ))}
        </div>
    );
};


export default AboutMeCard;
