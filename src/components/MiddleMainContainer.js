import AOS from 'aos';
import 'aos/dist/aos.css';

import { Link } from 'react-router-dom';

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
import sWhiteArr from '../images/s-white-arrow.png';
import sGreyArr from '../images/s-grey-arrow.png';
import chart from '../images/chart.png';
import personSlogan from '../images/person-slogan.png';
import grommet from '../images/grommet-icon.png';
import baseline from '../images/baseline.png';
import handshake from '../images/handshake.png';

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
                    <p className='main-title' data-aos='fade-right' data-aos-delay='400'>More then 6570 influencer waiting for your offer</p>
                    <p data-aos='fade-right' data-aos-delay='400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor morbi vulputate nec amet purus mauris nibh. Neque, dictum urna</p>
                    <div className='progress-box' data-aos='fade-right' data-aos-delay='400'>
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

            <div className='start-dealing-container'>
                <div className='lf__start-deal-container'>
                    <div className='lf__start-deal' data-aos='flip-up' data-aos-delay='600' data-aos-offset='50'>
                        <h3>$49 <Link to='/'>Basic</Link></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <h3>$69 <Link to='/'>Premium</Link></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <h3>$132 <Link to='/'>Business</Link></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <div className='c__start-deal' data-aos='flip-up' data-aos-delay='700' data-aos-offset='200'>
                        <label>Select Category</label>
                        <div className='select'>
                            <select>
                                <option>Shoutput & promotion</option>
                            </select>
                            <img className='select-arrow' src={sWhiteArr} alt='white__down__arrow' />
                        </div>
                        <label>Quantity</label>
                        <div className='select'>
                            <select>
                                <option>2 Post, 5 Stories</option>
                            </select>
                            <img className='select-arrow' src={sGreyArr} alt='grey__down__arrow' />
                        </div>
                    </div>
                </div>
                <div className='rg__start-deal-container first'>
                    <p data-aos='fade-left' data-aos-delay='400'>Start Dealing</p>
                    <p className='main-title' data-aos='fade-left' data-aos-delay='400'>Make a proposal or choose an offer</p>
                    <p data-aos='fade-left' data-aos-delay='400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor morbi vulputate nec amet purus mauris nibh. Neque, dictum urna</p>
                    <div className='progress-box' data-aos='fade-left' data-aos-delay='400'>
                        <div></div>
                    </div>
                </div>
                <div className='rg__start-deal-container second'>
                    <p data-aos='fade-right' data-aos-delay='400'>Start Dealing</p>
                    <p className='main-title' data-aos='fade-right' data-aos-delay='400'>Make a proposal or choose an offer</p>
                    <p data-aos='fade-right' data-aos-delay='400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor morbi vulputate nec amet purus mauris nibh. Neque, dictum urna</p>
                    <div className='progress-box' data-aos='fade-right' data-aos-delay='400'>
                        <div></div>
                    </div>
                </div>
            </div>

            <div className='result-container'>
                <div className='lf__result-container'>
                    <p data-aos='fade-right' data-aos-delay='400'>See the result</p>
                    <p className='main-title' data-aos='fade-right' data-aos-delay='400'>Enjoy the different!</p>
                    <p data-aos='fade-right' data-aos-delay='400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor morbi vulputate nec amet purus mauris nibh. Neque, dictum urna</p>
                    <div className='progress-box' data-aos='fade-right' data-aos-delay='400'></div>
                </div>
                <div className='chart-container'>
                    <img src={chart} alt='chart' />
                </div>
            </div>

            <div className='start-using-container'>
                <div className='start-using-content'>
                    <img src={personSlogan} alt='person__slogan' className='person' />
                    <h2>Start using now</h2>
                    <div>
                        <img src={grommet} alt='grommet' />
                        <p>Shoutout & Promotion</p>
                    </div>
                    <div>
                        <img src={baseline} alt='baseline' />
                        <p>Strategy & Research</p>
                    </div>
                    <div>
                        <img src={handshake} alt='handshake' />
                        <p>Long-Term & Collaboration</p>
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
  offset: 50, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});