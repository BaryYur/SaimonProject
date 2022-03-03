import './MiddleMainContainer.css';

import topMainRate from '../images/main-rate-img.png';
import canonIcon from '../images/canon-icon.png';
import unicefIcon from '../images/unicef-icon.png';
import mastercardIcon from '../images/mastercard-icon.png';
import suzukiIcon from '../images/suzuki-icon.png';
import supremeIcon from '../images/supreme-icon.png';

function MiddleMainConntainer () {
    return (
        <div className="middle-main-container">
            <div className='middle__top-title-container'>
                <img src={topMainRate} alt='rate' />
                <p className='main-title'>The best are already here</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor morbi vulputate nec amet purus mauris nibh. Neque, dictum urna </p>
                <div className='brands-container'>
                    <img src={canonIcon} alt='canon' />
                    <img src={unicefIcon} alt='unicef' />
                    <img src={mastercardIcon} alt='mastercard' />
                    <img src={suzukiIcon} alt='suzuki' />
                    <img src={supremeIcon} alt='supreme' />
                </div>
            </div>
        </div>
    );
};

export default MiddleMainConntainer;