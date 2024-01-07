// import { Link } from 'react-router-dom'
// import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Projects from '../Projects';
import Contact from '../Contact';
import About from '../About';
import { Link } from 'react-scroll';
import profilePicture from '../../assets/images/home-page-photo.png'
// import Loader from 'react-loaders';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['K', 'J', ' ', 'W', 'a','n','g']
    const jobArray = ['a', ' ', 's', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    // personal code as I received errors
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        
        return () => clearTimeout(timer); // This is the cleanup function
    })

    return (
        <>
        <div className="container home-page" id='/'>
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <span className={`${letterClass} _15`}> </span>



                {/* <img src={LogoTitle} alt="developer" /> */}
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={15} />
                </h1>
                <h2>Full Stack Developer</h2>
                <Link smooth spy to="contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <img src={profilePicture} alt="profile" className="profile-picture"/>
        </div>

        <About/>
        <Projects/>
        <Contact/>

        </>
    )
}


export default Home