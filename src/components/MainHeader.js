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

    const closeButtonHandler = () => {
        setActiveNav(false);
        document.body.classList.remove('modal-open');
    };

    // when scrolling down changed header
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.boxShadow = "0 0 .5em rgba(0, 0, 0, .5)";
      } else {
        document.getElementById("header").style.boxShadow = "none";
      };
    };

    return (
        <div className='main-header-wrapper'>
            <header id='header'>
                <div className='header'>
                <Link to='/starting' className='logo'>
                    <img src={logo} alt='logo' />
                </Link>
                <nav className={activeNav ? 'active-nav' : 'not-active-nav'}>
                    <div onClick={wrapperHandler} className='nav-wrapper'></div>
                    <ul>
                        <button onClick={closeButtonHandler} className='close-nav-btn'>&times;</button>
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
                <div className={activeNav ? 'active-menu-btn' : 'menu-btn'} onClick={activeNavHandler}>
                    <span></span>
                </div>
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