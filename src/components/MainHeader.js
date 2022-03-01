import { Link, NavLink } from 'react-router-dom';

import './MainHeader.css';

import logo from '../images/logo.png';
import leftPerson from '../images/hero-left-person.png';
import rightPerson from '../images/hero-right-person.png';

function MainHeader () {
    return (
        <div className='main-header-wrapper'>
            <header>
                <Link to='/starting'>
                    <img src={logo} alt='logo' />
                </Link>
                <nav>
                    <ul>
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
                    </ul>
                    <Link to='/' className='create-btn' >Create Account</Link>
                </nav>
                <div className='menu-btn'></div>
            </header>
            <div className='hero-container'>
                <div>
                    <img src={leftPerson} alt='person1' />
                </div>
                <div></div>
                <div>
                    <img src={rightPerson} alt='person2' />
                </div>
            </div>
        </div>
    );
};

export default MainHeader;