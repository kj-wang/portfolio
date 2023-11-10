import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useState } from 'react'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'
import { SkillBar } from 'react-skills';


const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    // personal code as I received errors
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        
        return () => clearTimeout(timer); // This is the cleanup function
    })


    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e'] }
                        idx={15}
                    />
                </h1>
                <p>I'm a security software engineer that specializes in manual security tests. Currently, I am focused on becoming a full-stack software engineer.</p>
                <p>The growing world of technology and its ability to help businesses grow and prosper amazes me, and the question of how far technology can be taken drives me to pursue what I do.</p>
                <p>Aside from my interests in technology, I am also a competitive dancer, love to cook, and am passionate about powerlifting. I bring a unique perspective to my work and look forward to continuing to grow and develop my career in software engineering.</p>

            </div>


         
            {/* <div className='stage-cube-cont'>
            <SkillBar name="ReactJS" level={100} color="blue" />
            <SkillBar name="SomeOtherTech" level={80} color="red" />

                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>

                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>

                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>

                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>

                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>

                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div> */}
        </div>
        {/* <Loader type="pacman" /> */}
        </>
    )
}

export default About