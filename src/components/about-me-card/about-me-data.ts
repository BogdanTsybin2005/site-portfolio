import Html from '../../assets/icons/Html';
import Css from '../../assets/icons/Css';
import Js from '../../assets/icons/JS';
import Ts from '../../assets/icons/TS';
import Git from '../../assets/icons/Git';
import Docker from '../../assets/icons/Docker';
import React from '../../assets/icons/React';
import Tailwind_css from '../../assets/icons/Tailwind_css';
import Sass from '../../assets/icons/Sass';
import Axios from '../../assets/icons/Axios';
import Vite from '../../assets/icons/Vite';
import Rest_api from '../../assets/icons/Rest_api';
import ReduxToolkit from '../../assets/icons/Redux-toolkit';
import Zustand from '../../assets/icons/zustand';



type AboutMeData = {
    id: number,
    title: string,
    paragraphText: string
}

type FrontendSkill = {
  id: number;
  skillName: string;
  technologyIconPath: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};


type AllInformationAboutMe = {
    allInformation: AboutMeData[],
}

type MyFrontendSkills = {
    allMySkills: FrontendSkill[]
}



export const allDataAboutMe: AllInformationAboutMe = {
    allInformation: [
        {
            id: 1,
            title: 'About Me',
            paragraphText: 'I am a frontend developer specializing in building multi-page web applications with clean architecture, user authentication, and responsive design. I strive to write maintainable and scalable code while continuously improving my skills and staying up to date with modern development practices. I value thoughtful UI design, solid component structure, and clear user interaction flows.'
        },
        {
            id: 2,
            title: 'Education',
            paragraphText: 'I received my education at TSI AUCA College (Bishkek) majoring in Software Engineering and Social Transformation. I studied web development, OOP, algorithms, databases and modern frontend technologies. The main focus was on creating applications in React and realized several educational and personal projects close to real-world tasks.'
        },
    ]
}


export const allMyFrontEndSkills: MyFrontendSkills = {
    allMySkills: [
        {
            id: 1,
            skillName: 'HTML',
            technologyIconPath: Html
        },
        {
            id: 2,
            skillName: 'CSS',
            technologyIconPath: Css
        },
        {
            id: 3,
            skillName: 'JS',
            technologyIconPath: Js
        },
        {
            id: 4,
            skillName: 'React',
            technologyIconPath: React
        },
        {
            id: 5,
            skillName: 'TypeScript',
            technologyIconPath: Ts
        },
        {
            id: 6,
            skillName: 'Git',
            technologyIconPath: Git
        },
        {
            id: 7,
            skillName: 'Tailwind CSS',
            technologyIconPath: Tailwind_css
        },
        {
            id: 8,
            skillName: 'SASS',
            technologyIconPath: Sass
        },
        {
            id: 9,
            skillName: 'Axios',
            technologyIconPath: Axios
        },
        {
            id: 10,
            skillName: 'Docker',
            technologyIconPath: Docker
        },
        {
            id: 11,
            skillName: 'Rest API',
            technologyIconPath: Rest_api
        },
        {
            id: 12,
            skillName: 'Vite',
            technologyIconPath: Vite
        },
        {
            id: 13,
            skillName: 'Redux Toolkit',
            technologyIconPath: ReduxToolkit
        },
        {
            id: 14,
            skillName: 'Zustand',
            technologyIconPath: Zustand
        },
    ]
};
