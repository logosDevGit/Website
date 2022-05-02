import 'react-multi-carousel/lib/styles.css';
import { Routes, Route} from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';
import Home from '../pages/Home';
import QuemSomos from '../pages/QuemSomos';
import Tech from '../pages/Tech';

const App = () => {

    return (
        <>
            <NavBar />
                <Routes>
                    <Route path="/" element={<Home />}  />
                    <Route path="quem-somos" element={<QuemSomos />}  />
                    <Route path="tech" element={<Tech />}  />
                </Routes>
            <Footer />
        </>
    )
}

export default App;