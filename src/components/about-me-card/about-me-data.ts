import html from '../../assets/icons/html.png';
import css from '../../assets/icons/css.png';
import js from '../../assets/icons/js.png';
import ts from '../../assets/icons/ts.png';
import git from '../../assets/icons/git.png';
import docker from '../../assets/icons/docker.png';
import react from '../../assets/icons/react.png';
import tailwind_css from '../../assets/icons/tailwind_css.png';
import sass from '../../assets/icons/sass.png';
import axios from '../../assets/icons/axios.png';
import bootstrap from '../../assets/icons/bootstrap.png';
import jquery from '../../assets/icons/jquery.png';
import vite from '../../assets/icons/vite.png';
import rest_api from '../../assets/icons/rest-api.png';



type AboutMeData = {
    id: number,
    title: string,
    paragraphText: string
}

type FrontendSkill = {
    id: number;
    skillName: string;
    technologyIconPath: string;
}


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
            technologyIconPath: html
        },
        {
            id: 2,
            skillName: 'CSS',
            technologyIconPath: css
        },
        {
            id: 3,
            skillName: 'JS',
            technologyIconPath: js
        },
        {
            id: 4,
            skillName: 'React',
            technologyIconPath: react
        },
        {
            id: 5,
            skillName: 'TypeScript',
            technologyIconPath: ts
        },
        {
            id: 6,
            skillName: 'Git',
            technologyIconPath: git
        },
        {
            id: 7,
            skillName: 'Tailwind CSS',
            technologyIconPath: tailwind_css
        },
        {
            id: 8,
            skillName: 'SASS',
            technologyIconPath: sass
        },
        {
            id: 9,
            skillName: 'Axios',
            technologyIconPath: axios
        },
        {
            id: 10,
            skillName: 'Bootstrap',
            technologyIconPath: bootstrap
        },
        {
            id: 11,
            skillName: 'JQuery',
            technologyIconPath: jquery
        },
        {
            id: 12,
            skillName: 'Docker',
            technologyIconPath: docker
        },
        {
            id: 13,
            skillName: 'Rest API',
            technologyIconPath: rest_api
        },
        {
            id: 14,
            skillName: 'Vite',
            technologyIconPath: vite
        },
    ]
};
