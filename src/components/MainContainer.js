import MiddleMainConntainer from './MiddleMainContainer';
import StudiesContainer from './StudiesContainer';
import TopMainContainer from './TopMainContainer';

function MainContainer () {
    return (
        <main>
            <TopMainContainer />
            <MiddleMainConntainer />
            <StudiesContainer />
        </main>
    );
};

export default MainContainer;