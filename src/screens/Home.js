import Board from '../Components/Board/Board';
import Footer from '../Components/Footer';

function Home(props) {
    return (
        <>    
            <Board post={props.post}/>
            <Footer />
        </>
    );
}
export default Home;