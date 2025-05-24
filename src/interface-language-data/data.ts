type LanguageCode = 'EN' | 'RU';

interface LanguageContent {
    home: {
        header: {
            downloadCVButtonText: string;
            homeButtonText: string;
            aboutButtonText: string;
            projectsButtonText: string;
            contactsButtonText: string;
        };
        firstName: string;
        lastName: string;
        description: string;
        hireMeButtonText: string;
    };
    about: {
        aboutMe: {
            title: string;
            description: string;
        };
        education: {
            title: string;
            description: string;
        };
    };
    projects: {
        myProjects: string;
    };
    contacts: {
        contactMe: string;
    };
}

type Language = Record<LanguageCode, LanguageContent>;



const languageData: Language = {
    EN: {
        home: {
            header: {
                downloadCVButtonText: 'Download CV',
                homeButtonText: 'Home',
                aboutButtonText: 'About',
                projectsButtonText: 'Projects',
                contactsButtonText: 'Contact'
            },
            firstName: 'Bogdan',
            lastName: 'Tsybin',
            description: "I'm a frontend developer focused on building fast, responsive, and user-friendly web apps. I write clean, scalable code and turn complex ideas into intuitive interfaces. With a strong eye for design, accessibility, and performance, I craft every project with care and precision.",
            hireMeButtonText: 'Hire me'
        },
        about: {
            aboutMe: {
                title: 'About Me',
                description: 'I am a frontend developer specializing in building multi-page web applications with clean architecture, user authentication, and responsive design. I strive to write maintainable and scalable code while continuously improving my skills and staying up to date with modern development practices. I value thoughtful UI design, solid component structure, and clear user interaction flows.'
            },
            education: {
                title: 'Education',
                description: 'I received my education at TSI AUCA College (Bishkek), majoring in Software Engineering and Social Transformation. I studied web development, OOP, algorithms, databases, and modern frontend technologies. The main focus was on creating applications in React and realizing educational and personal projects close to real-world tasks.'
            }
        },
        projects: {
            myProjects: 'My projects'
        },
        contacts: {
            contactMe: 'Contact Me'
        }
    },
    RU: {
        home: {
            header: {
                downloadCVButtonText: 'Скачать CV',
                homeButtonText: 'Главная',
                aboutButtonText: 'Обо мне',
                projectsButtonText: 'Проекты',
                contactsButtonText: 'Контакты'
            },
            firstName: 'Богдан',
            lastName: 'Цыбин',
            description: "Я фронтенд-разработчик, специализирующийся на создании быстрых, отзывчивых и удобных веб-приложений. Я пишу чистый, масштабируемый код и превращаю сложные идеи в интуитивно понятные интерфейсы. Учитывая дизайн, доступность и производительность, я тщательно и аккуратно прорабатываю каждый проект.",
            hireMeButtonText: 'Наймите меня'
        },
        about: {
            aboutMe: {
                title: 'Обо мне',
                description: 'Я фронтенд-разработчик, специализирующийся на создании многостраничных веб-приложений с чистой архитектурой, авторизацией и адаптивной версткой. Я стремлюсь писать поддерживаемый и масштабируемый код, постоянно развивая свои навыки и изучая современные технологии. Особое внимание уделяю UX-дизайну, логике компонентов и четким пользовательским сценариям.'
            },
            education: {
                title: 'Образование',
                description: 'Я получил образование в колледже TSI AUCA (Бишкек) по направлению "Программная инженерия и социальные преобразования". Изучал веб-разработку, ООП, алгоритмы, базы данных и современные frontend-технологии. Основной упор был сделан на создание приложений на React и реализацию учебных и личных проектов, приближенных к реальным задачам.'
            }
        },
        projects: {
            myProjects: 'Мои проекты'
        },
        contacts: {
            contactMe: 'Свяжитесь со мной'
        }
    }
};



export default languageData;
