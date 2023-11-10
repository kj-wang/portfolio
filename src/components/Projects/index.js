import * as React from 'react';
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionGroup from '@mui/joy/AccordionGroup';
import AccordionSummary from '@mui/joy/AccordionSummary';



const Projects = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const [index, setIndex] = React.useState(0);

    // personal code as I received errors
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        
        return () => clearTimeout(timer); // This is the cleanup function
    })


    return (
        <>
        <div className='container projects-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                        strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's'] }
                        idx={15}
                    />
                </h1>

                <AccordionGroup
                  size="lg"
                  >
                    <Accordion
                    className='accordion'
                    expanded={index === 0}
                    onChange={(event, expanded) => {
                    setIndex(expanded ? 0 : null);
                    }}>      
                        <AccordionSummary className='summary'><h2>Discord Elo Rating Matchmaking Bot</h2></AccordionSummary>

                        <AccordionDetails className='details'>
                        <p>Built Discord Bot that saves players’ data and creates statistically balanced five-person teams based on chess Elo Rating system with automated custom chatrooms for competitive video game matches</p>
                        <p>Launched successfully on custom and private Discord servers used by dozens of users </p>
                        <p>Coded in Python and SQL utilizing Discord API and databases implementing CI/CD pipeline ideologies</p>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion
                    className='accordion'
                    expanded={index === 1}
                    onChange={(event, expanded) => {
                    setIndex(expanded ? 1 : null);
                    }}>
                        <AccordionSummary className='summary'><h2>To Do App</h2></AccordionSummary>
                        <AccordionDetails className='details'>
                            <p>Created a website that allow users to set up accounts and store task lists with progress bars that sync across platforms</p>
                            <p>Utilizes secure user accounts using proper authorization alongside secure salting and hashing of personal data </p>
                            <p>Coded and utilized React, PostGres, Node.js and SQL with Kinsta hosting services</p>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion
                    className='accordion'
                    expanded={index === 2}
                    onChange={(event, expanded) => {
                    setIndex(expanded ? 2 : null);
                    }}>
                        <AccordionSummary className='summary'><h2>Mobile Coffee Café Ordering Application</h2></AccordionSummary>
                        <AccordionDetails className='details'>
                            <p>Developed Android application that takes customers’ café orders and integrates within the supply chain for a projected 60% efficiency increase </p>
                            <p>Established connection between back-end, front-end, and usage of Agile development using Java, Android app development, and Git (Full stack development)</p>
                            <p>Coded in Java through Android Studio and tested thoroughly with JUnit testing</p>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion
                    className='accordion'
                    expanded={index === 3}
                    onChange={(event, expanded) => {
                    setIndex(expanded ? 3 : null);
                    }}>
                        <AccordionSummary className='summary'><h2>Transit Database Application</h2></AccordionSummary>
                        <AccordionDetails className='details'>
                            <p>Launched a website where users create an account to reserve train tickets based on a set schedule that is easily updated</p>
                            <p>Utilized databases to store user account data and created a user-friendly web interface that allows for seamless functions</p>
                            <p>Coded in SQL, Java, HTML/CSS and used AWS EC2 (Linux), Apache Tomcat</p>
                        </AccordionDetails>
                    </Accordion>

                </AccordionGroup>

            </div>
        </div>
        </>
    )
}

export default Projects