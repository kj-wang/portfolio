import './index.scss';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';
import React from 'react';

const Layout = () => {
    return (
    <div className='App'>
        <Sidebar />


        <div className='page'>
            {/* <span className='tags right-tags'>welcome</span> */}

            {/* <span className='tags top-tags'>hey there</span> */}

            <Outlet />
            {/* <span className='tags bottom-tag-html'>nice to meet you</span> */}

            {/* <span className='tags middle-tags'>hi!</span> */}
        </div>

        
        <svg>
            <filter id='noiseFilter'>
                <feTurbulence 
                type='fractalNoise' 
                baseFrequency='0.6' 
                stitchTiles='stitch'/>
                <feColorMatrix in="colorNoise" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                    <feComposite operator="in" in2="SourceGraphic" result="monoNoise"/>
                    <feBlend in="SourceGraphic" in2="monoNoise" mode="screen" />
            </filter>
        </svg>

    </div>
    
    )
}

export default Layout;