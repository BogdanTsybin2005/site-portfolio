import './App.scss';
import { useRef, type RefObject } from 'react';
import { useAppDispatch, useAppSelector } from './hoocks/useAppSelector';
import { closeBurger, toggleBurger } from './store/burgerSlice';
import Header from './components/header';
import Footer from './components/footer';
import BurgerMenu from './components/burgerMenu';
import MainTitle from './components/main-title';
import MainParagraphText from './components/paragraph';
import { HireMeButton } from './components/button';
import AboutMeCard, { MySkillsCard } from './components/about-me-card';
import ProjectSlider from './components/projects-slider';
import languageData from './interface-language-data/data';
import myPhoto from '../src/assets/images/Bogdan.jpg';



function App() {
  const footerRef = useRef<HTMLElement | null>(null);
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutMeRef = useRef<HTMLDivElement | null>(null);
  const projectsMeRef = useRef<HTMLDivElement | null>(null);

  const dispatch = useAppDispatch();
  const isBurgerMenuOpened = useAppSelector((state) => state.burger.isOpen);
  const currentLanguage = useAppSelector((state) => state.language);
  const lang = languageData[currentLanguage];

  const handleScrollInTowView = (domElement: RefObject<HTMLElement | null>) => {
    domElement.current?.scrollIntoView({ behavior: 'smooth' });
    dispatch(closeBurger());
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="wrapper">
      <Header
        isBurgerMenuOpened={isBurgerMenuOpened}
        homeClick={() => handleScrollInTowView(homeRef)}
        aboutClick={() => handleScrollInTowView(aboutMeRef)}
        projectsClick={() => handleScrollInTowView(projectsMeRef)}
        contactClick={() => handleScrollInTowView(footerRef)}
        toggleBurgerMenu={() => dispatch(toggleBurger())}
      />

      <BurgerMenu
        isBurgerMenuOpened={isBurgerMenuOpened}
        homeClick={() => handleScrollInTowView(homeRef)}
        aboutClick={() => handleScrollInTowView(aboutMeRef)}
        projectsClick={() => handleScrollInTowView(projectsMeRef)}
        contactClick={() => handleScrollInTowView(footerRef)}
        closeMenu={() => dispatch(closeBurger())}
      />

      <main className="main">
        <div className="main__start-page" ref={homeRef}>
          <div className="main__container">
            <div className="main__block">
              <MainTitle />
              <MainParagraphText text={lang.home.description} />
              <HireMeButton onClick={() => handleScrollInTowView(footerRef)} />
            </div>
            <div className="main__block">
              <div className="main__image-block">
                <img src={myPhoto} alt="my photo should be right here!" />
              </div>
            </div>
          </div>
        </div>

        <div className="about-me__body" ref={aboutMeRef}>
          <div className="about-me__container">
            <AboutMeCard
              id={1}
              title={lang.about.aboutMe.title}
              paragraphText={lang.about.aboutMe.description}
            />
            <AboutMeCard
              id={2}
              title={lang.about.education.title}
              paragraphText={lang.about.education.description}
            />
            <MySkillsCard />
          </div>
        </div>

        <div className="slider__projects-body" ref={projectsMeRef}>
          <h2 className="slider__projects-title">{lang.projects.myProjects}</h2>
          <ProjectSlider />
        </div>
      </main>

      <Footer footerElement={footerRef} />
    </div>
  );
}

export default App;
