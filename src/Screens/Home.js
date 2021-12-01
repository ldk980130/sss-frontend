import Board from '../Components/Board/Board';
import Footer from '../Components/Footer';

function Home(props) {
    return (
        <>    
            <Board post={props.post} isLoggedIn={props.isLoggedIn}/>
            <Footer />
        </>
    );
}
export default Home;