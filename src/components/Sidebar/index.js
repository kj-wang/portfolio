import './index.scss';
// import { Link, NavLink } from 'react-router-dom'
// import LogoS from '../../assets/images/logo-s.png'
// import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faDiagramProject, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';
import React from 'react';

const Sidebar = () => (
    <div className='nav-bar'>
        {/* <Link className='logo' to='/'>
            <img src={LogoS} alt='logo' />
            <img className='sub-logo' src={LogoSubtitle} alt='wang' />
        </Link> */}
        <nav>
            <Link activeClass="active" smooth spy to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </Link>
            <Link activeClass="active" className="about-link" smooth spy to="about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </Link>
            <Link activeClass="active" className="projects-link" smooth spy to="projects">
                <FontAwesomeIcon icon={faDiagramProject} color="#4d4d4e"/>
            </Link>
            <Link activeClass="active" className="contact-link" smooth spy to="contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </Link>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/kj-wang/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>

            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/kj-wang'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li>

        </ul>

    </div>
)

export default Sidebar