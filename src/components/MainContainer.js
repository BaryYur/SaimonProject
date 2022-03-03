import MiddleMainConntainer from './MiddleMainContainer';
import TopMainContainer from './TopMainContainer';

function MainContainer () {
    return (
        <main>
            <TopMainContainer />
            <MiddleMainConntainer />
        </main>
    );
};

export default MainContainer;