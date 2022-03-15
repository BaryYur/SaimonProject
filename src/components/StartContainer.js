import { Link } from 'react-router-dom';

import './StartContainer.css';

function StartContainer () {
    return (
        <div className="start-free-container">
            <h2 className="main-title">Start a free trial</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor morbi vulputate nec amet purus mauris nibh. Neque, dictum urna</p>
            <Link to="/">Create free account</Link>
        </div>
    );
};

export default StartContainer;