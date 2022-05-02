import 'react-multi-carousel/lib/styles.css';
import { Routes, Route} from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';
import Home from '../pages/Home';
import QuemSomos from '../pages/QuemSomos';
import Tech from '../pages/Tech';
import Infra from '../pages/Infra';

const App = () => {

    return (
        <>
            <NavBar />
                <Routes>
                    <Route path="/" element={<Home />}  />
                    <Route path="quem-somos" exact element={<QuemSomos />}  />
                    <Route path="tech" exact element={<Tech />}  />
                    <Route path="infra" exact element={<Infra />}  />
                </Routes>
            <Footer />
        </>
    )
}

export default App;