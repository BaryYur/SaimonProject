import { Link } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css';

import "./StudiesContainer.css";

import greyCanon from "../images/canon-grey.png";
import greenArr from "../images/green-arrow.png";

const DUMMY__DATA = [
    {
        id: 'id1',
        counter: 9,
        title: 'Instagram Post',
    },
    {
        id: 'id2',
        counter: 4,
        title: 'Instagram Stories'
    },
    {
        id: 'id3',
        counter: 2156,
        title: 'Direct Message'
    },
    {
        id: 'id4',
        counter: 8123,
        title: 'New Followers'
    },
    {
        id: 'id5',
        counter: 10789,
        title: 'New Likes'
    },
    {
        id: 'id6',
        counter: 1500,
        title: 'Lead Generated'
    }
];

const projectsData = [
    {
        completedProjects: 24
    }
];

function StudiesContainer () {
    return (
        <div className="studies-container">
            <div className="header-studies">
                <p className="main-title">Case Studies</p>
                <Link to="/">
                    <span>{projectsData.map(item => item.completedProjects.toString())}</span> 
                    Projects Completed 
                    <span>
                        <div></div>
                        <img src={greenArr} alt="arrow"/>
                    </span>
                </Link>
            </div>
            <div className="data__studies-container">
                <div className="lf__data">
                    <img src={greyCanon} alt="canon" data-aos="fade-right" data-aos-delay="400" />
                    <p data-aos="fade-right" data-aos-delay="400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor morbi vulputate nec amet purus mauris nibh. Neque, dictum urna </p>
                    <p data-aos="fade-right" data-aos-delay="400">Tareq Azia. Marketing Manager. Canon</p>
                </div>
                <div className="rg__data">
                    {DUMMY__DATA.map(data => 
                        <div 
                            className="data" 
                            key={Math.random()} 
                            data-aos="fade-down" 
                            data-aos-delay="500"
                        >
                            <div>{data.counter}</div>
                            <div>{data.title}</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StudiesContainer;

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