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
                <div className='lf__top-main' data-aos='fade-right' data-aos-delay='400'>
                    <div>
                        <h2>The way you feel comportable</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor morbi vulputate nec amet purus</p>
                    </div>
                </div>
                <div className='right__top-main-container'>
                    <div className='c_top-main' data-aos='flip-up' data-aos-delay='600'>
                        <img src={search} alt='search-icon' />
                        <h3>Simply do it by yourself</h3>
                        <p>With a large database of influencers at your disposal, find those who match your own criteria, set up and manage campaigns and get the results you want for your business, no matter the size.</p>
                        <Link to='/'>
                            <img src={whiteArrow} alt='white-arrow' />
                        </Link>
                    </div>
                    <div className='rg_top-main' data-aos='flip-up' data-aos-delay='700'>
                        <img src={setting} alt='setting-icon' />
                        <h3>Let us handle it for you</h3>
                        <p>You set the objectives, and we handle your campaigns from A to Z. Let the team of industry experts bring your objectives to life through high-quality campaigns with guaranteed ROI.                         </p>
                        <Link to='/'>
                            <img src={blackArrow} alt='black-arrow' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContainer;

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});