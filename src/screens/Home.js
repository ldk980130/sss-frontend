import Board from '../Components/Board/Board';
import Footer from '../Components/Footer';

function Home(props) {
    return (
        <>    
            <Board isLoggedIn={props.isLoggedIn}
            post0={props.post0}
            post1={props.post1}
            post2={props.post2}
            post3={props.post3}
            post4={props.post4}
            post5={props.post5}
            post6={props.post6}
            post7={props.post7}
            post8={props.post8}
            post99={props.post99}
            />
            <Footer />
        </>
    );
}
export default Home;