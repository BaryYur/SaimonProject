import AOS from 'aos';
import 'aos/dist/aos.css';

import './MiddleMainContainer.css';

import topMainRate from '../images/main-rate-img.png';
import canonIcon from '../images/canon-icon.png';
import unicefIcon from '../images/unicef-icon.png';
import mastercardIcon from '../images/mastercard-icon.png';
import suzukiIcon from '../images/suzuki-icon.png';
import supremeIcon from '../images/supreme-icon.png';
import p1 from '../images/p-1.png';
import p2 from '../images/p-2.png';
import p3 from '../images/p-3.png';
import p4 from '../images/p-4.png';
import p5 from '../images/p-5.png';
import p6 from '../images/p-6.png';
import p7 from '../images/p-7.png';
import p8 from '../images/p-8.png';

function MiddleMainConntainer () {
    return (
        <div className="middle-main-container">
            <div className='middle__top-title-container'>
                <img src={topMainRate} alt='rate' />
                <p className='main-title' data-aos='fade-right'>The best are already here</p>
                <p data-aos='fade-right'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor morbi vulputate nec amet purus mauris nibh. Neque, dictum urna </p>
                <div className='brands-container'>
                    <div>
                        <img src={canonIcon} alt='canon' />
                        <img src={unicefIcon} alt='unicef' />
                    </div>
                    <div>
                        <img src={mastercardIcon} alt='mastercard' />
                        <img src={suzukiIcon} alt='suzuki' />
                        <img src={supremeIcon} alt='supreme' />
                    </div>
                </div>
            </div>
            <div className='search-container'>
                <div className='lf__search-container'>
                    <p data-aos='fade-right' data-aos-delay='400'>Search for influencer</p>
                    <p className='main-title' data-aos='fade-right' data-aos-delay='500'>More then 6570 influencer waiting for your offer</p>
                    <p data-aos='fade-right' data-aos-delay='600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor morbi vulputate nec amet purus mauris nibh. Neque, dictum urna</p>
                    <div className='progress-box' data-aos='fade-right' data-aos-delay='700'>
                        <div></div>
                    </div>
                </div>
                <div className='persons-container'>
                    <div className='gradient-box'></div>
                    <div>
                        <img src={p1} alt='p1' />
                        <img src={p2} alt='p2' />
                        <img src={p3} alt='p3' />
                        <img src={p4} alt='p4' />
                    </div>
                    <div>
                        <img src={p5} alt='p5' />
                        <img src={p6} alt='p6' />
                        <img src={p7} alt='p7' />
                        <img src={p8} alt='p8' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiddleMainConntainer;

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
  offset: 100, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});