import './index.scss';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';
import React from 'react';

const Layout = () => {
    return (
    <div className='App'>
        <Sidebar />
        <div className='page'>
            <span className='tags right-tags'>welcome</span>

            <span className='tags top-tags'>hey there</span>

            <Outlet />
            <span className='tags bottom-tag-html'>nice to meet you</span>

            <span className='tags middle-tags'>hi!</span>
        </div>
    </div>
    )
}

export default Layout;