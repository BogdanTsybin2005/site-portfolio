import './App.scss'
import { useRef, useState, type RefObject } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import myPhoto from '../src/assets/images/Bogdan.jpg'
import MainTitle from './components/main-title'
import MainParagraphText from './components/paragraph'
import { HireMeButton } from './components/button'
import BurgerMenu from './components/burgerMenu'
import AboutMeCard from './components/about-me-card'
import { allDataAboutMe } from './components/about-me-card/about-me-data'
import { MySkillsCard } from './components/about-me-card'
import ProjectSlider from './components/projects-slider'



function App() {
  const footerRef = useRef<HTMLElement | null>(null);
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutMeRef = useRef<HTMLDivElement | null>(null);
  const projectsMeRef = useRef<HTMLDivElement | null>(null);
  const [isBurgerMenuOpened, setIsBurgerMenuOpened] = useState<boolean>(false);

  const handleScrollInTowView = (domElement: RefObject<HTMLElement | null>) => {
    domElement.current?.scrollIntoView({behavior: 'smooth'});
    setIsBurgerMenuOpened(false);
    document.body.style.overflow = 'auto';
  }

  return (
    <div className="wrapper">

      <Header
        isBurgerMenuOpened={isBurgerMenuOpened}
        homeClick={() => handleScrollInTowView(homeRef)}
        aboutClick={() => handleScrollInTowView(aboutMeRef)}
        projectsClick={() => handleScrollInTowView(projectsMeRef)}
        contactClick={() => handleScrollInTowView(footerRef)}
        toggleBurgerMenu={() => setIsBurgerMenuOpened(prev => !prev)}
      />

      <BurgerMenu
        isBurgerMenuOpened={isBurgerMenuOpened}
        homeClick={() => handleScrollInTowView(homeRef)}
        aboutClick={() => handleScrollInTowView(aboutMeRef)}
        projectsClick={() => handleScrollInTowView(projectsMeRef)}
        contactClick={() => handleScrollInTowView(footerRef)}
        closeMenu={() => setIsBurgerMenuOpened(false)}
      />

      <main className="main">

        <div className="main__start-page" ref={homeRef}>
          <div className="main__container">
            <div className="main__block">
              <MainTitle/>
              <MainParagraphText text="I'm a frontend developer focused on building fast, responsive, and user-friendly web apps. 
              I write clean, scalable code and turn complex ideas into intuitive interfaces. 
              With a strong eye for design, accessibility, and performance, I craft every project with care and precision."/>
              <HireMeButton onClick={() => handleScrollInTowView(footerRef)}/>
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
            {
              allDataAboutMe.allInformation.map((item) => {
                return (
                  <AboutMeCard 
                    key={item.id} 
                    id={item.id} 
                    title={item.title} 
                    paragraphText={item.paragraphText}
                  />
                )
              })
            }
            <MySkillsCard/>
          </div>
        </div>
        
        <div className="slider__projects-body" ref={projectsMeRef}>
          <h2 className='slider__projects-title'>My projects</h2>
          <ProjectSlider/>
        </div>

      </main>
      <Footer footerElement={footerRef}/>
    </div>
  )
}

export default App
