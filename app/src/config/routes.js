import 'react-multi-carousel/lib/styles.css';
import { Routes, Route} from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';
import Home from '../pages/Home';
import QuemSomos from '../pages/QuemSomos';

const App = () => {

    return (
        <>
            <NavBar />
                <Routes>
                    <Route path="/" element={<Home />}  />
                    <Route path="quem-somos" element={<QuemSomos />}  />
                </Routes>
            <Footer />
        </>
    )
}

export default App;