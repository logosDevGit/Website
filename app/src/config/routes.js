import 'react-multi-carousel/lib/styles.css';
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';
import Home from '../pages/Home';

const Routes = () => {

    return (
        <>
            <NavBar />
                <Home />
            <Footer />
        </>
    )
}

export default Routes;