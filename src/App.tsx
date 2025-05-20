import './App.scss'
import { useRef, useState } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import myPhoto from '../src/assets/images/Bogdan.jpg'
import MainTitle from './components/main-title'
import MainParagraphText from './components/paragraph'
import { HireMeButton } from './components/button'
import BurgerMenu from './components/burgerMenu'




function App() {
  const footerRef = useRef<HTMLElement | null>(null);
  const homeRef = useRef<HTMLDivElement | null>(null);
  const [isBurgerMenuOpened, setIsBurgerMenuOpened] = useState<boolean>(false);

  return (
    <div className="wrapper">

      <Header
        homeClick={() => homeRef.current?.scrollIntoView({behavior: 'smooth'})}
        aboutClick={() => console.log('About')}
        projectsClick={() => console.log('Projects')}
        contactClick={() => footerRef.current?.scrollIntoView({behavior: 'smooth'})}
        toggleBurgerMenu={() => setIsBurgerMenuOpened(isBurgerMenuOpened => !isBurgerMenuOpened)}
      />

      <BurgerMenu
        isBurgerMenuOpened={isBurgerMenuOpened}
        homeClick={() => homeRef.current?.scrollIntoView({behavior: 'smooth'})}
        aboutClick={() => console.log('About')}
        projectsClick={() => console.log('Projects')}
        contactClick={() => footerRef.current?.scrollIntoView({behavior: 'smooth'})}
      />

      <main className="main">
        <div className="main__start-page" ref={homeRef}>
          <div className="main__container">
            <div className="main__block">
              <MainTitle/>
              <MainParagraphText text="I'm a frontend developer focused on building fast, responsive, and user-friendly web apps. 
              I write clean, scalable code and turn complex ideas into intuitive interfaces. 
              With a strong eye for design, accessibility, and performance, I craft every project with care and precision."/>
              <HireMeButton onClick={() => footerRef.current?.scrollIntoView({behavior: 'smooth'})}/>
            </div>
            <div className="main__block">
              <div className="main__image-block">
                <img src={myPhoto} alt="my photo should be right here!" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer footerElement={footerRef}/>
    </div>
  )
}

export default App
