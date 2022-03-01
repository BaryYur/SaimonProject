import { useState } from 'react';

import { Link, NavLink } from 'react-router-dom';

import './MainHeader.css';

import logo from '../images/logo.png';
import leftPerson from '../images/hero-left-person.png';
import rightPerson from '../images/hero-right-person.png';
import heroRate from '../images/hero-rate.png';

function MainHeader () {
    const [activeNav, setActiveNav] = useState(false);

    const activeNavHandler = () => {
        setActiveNav(active => !active);
        document.body.classList.toggle('modal-open');
    };

    const wrapperHandler = () => {
        setActiveNav(false);
        document.body.classList.remove('modal-open');
    };

    return (
        <div className='main-header-wrapper'>
            <header>
                <Link to='/starting'>
                    <img src={logo} alt='logo' />
                </Link>
                <nav className={activeNav ? 'active-nav': 'not-active-nav'}>
                    <div onClick={wrapperHandler} className='nav-wrapper'></div>
                    <ul>
                        <button onClick={() => setActiveNav(false)} className='close-nav-btn'>&times;</button>
                        <li>
                            <NavLink to='/starting'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about'>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/'>Influencer</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact'>Contact</NavLink>
                        </li>
                        <Link to='/' className='create-btn'>Create Account</Link>
                    </ul>
                </nav>
                <div className='menu-btn' onClick={activeNavHandler}>
                    <span></span>
                </div>
            </header>
            <div className='hero-container'>
                <div>
                    <img className='left-person' src={leftPerson} alt='person1' />
                </div>
                <div className='hero__center-container'>
                    <div>
                        <img src={heroRate} alt='hero-rate' />
                    </div>
                    <h1>Hire <span>influencer</span> in a seconds</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor morbi vulputate nec amet purus mauris nibh. Neque, dictum urna</p>
                    <div className='hero__btns'>
                        <Link to='/'>I need Influencer</Link>
                        <Link to='/'>I am Influencer</Link>
                    </div>
                </div>
                <div>
                    <img className='right-person' src={rightPerson} alt='person2' />
                </div>
            </div>
        </div>
    );
};

export default MainHeader;