import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './TopMainContainer.css';

import search from '../images/search-icon.png';
import setting from '../images/setting-icon.png';
import whiteArrow from '../images/white-arrow.png';
import blackArrow from '../images/black-arrow.png';

function MainContainer () {
    return (
        <div className='top-main-container'>
            <div className='top-main'>
                <div className='lf__top-main'>
                    <div>
                        <h2>The way you feel comportable</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor morbi vulputate nec amet purus</p>
                    </div>
                </div>
                <div className='right__top-main-container'>
                    <Link   
                        to='/' 
                        className='c_top-main' 
                        data-aos='flip-up' 
                        data-aos-delay='610'
                    >
                        <img src={search} alt='search-icon' />
                        <h3>Simply do it by yourself</h3>
                        <p>With a large database of influencers at your disposal, find those who match your own criteria, set up and manage campaigns and get the results you want for your business, no matter the size.</p>
                        <div className='arrow-box'>
                            <span></span>
                            <img src={whiteArrow} alt='white-arrow' />
                        </div>
                    </Link>
                    <Link 
                        to='/' 
                        className='rg_top-main' 
                        data-aos='flip-up' 
                        data-aos-delay='600'
                    >
                        <img src={setting} alt='setting-icon' />
                        <h3>Let us handle it for you</h3>
                        <p>You set the objectives, and we handle your campaigns from A to Z. Let the team of industry experts bring your objectives to life through high-quality campaigns with guaranteed ROI.                         </p>
                        <div className='arrow-box'>
                            <span></span>
                            <img src={blackArrow} alt='black-arrow' />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MainContainer;

AOS.init({
  // Global settings:
  disable: false, 
  startEvent: 'DOMContentLoaded', 
  initClassName: 'aos-init', 
  animatedClassName: 'aos-animate',
  useClassNames: false, 
  disableMutationObserver: false, 
  debounceDelay: 50, 
  throttleDelay: 99, 
  
  offset: 50,
  delay: 0, 
  duration: 800, 
  easing: 'ease', 
  once: true, 
  mirror: false,
  anchorPlacement: 'top-bottom'
});