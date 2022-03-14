import MiddleMainConntainer from './MiddleMainContainer';
import StartContainer from './StartContainer';
import StudiesContainer from './StudiesContainer';
import TopMainContainer from './TopMainContainer';

function MainContainer () {
    return (
        <main>
            <TopMainContainer />
            <MiddleMainConntainer />
            <StudiesContainer />
            <StartContainer />
        </main>
    );
};

export default MainContainer;