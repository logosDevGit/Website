import 'react-multi-carousel/lib/styles.css';
import { Routes, Route, Navigate} from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';
import Home from '../pages/Home';
import QuemSomos from '../pages/QuemSomos';
import Tech from '../pages/Tech';
import Infra from '../pages/Infra';
import Help from '../pages/Help';
import Digi from '../pages/Digi';
import Edu from '../pages/Edu';

const App = () => {

    return (
        <>
            <NavBar />
                <Routes>
                    <Route path="/" element={<Home />}  />
                    <Route path="*"element={<Navigate to="/" />}/>
                    <Route path="quem-somos" exact element={<QuemSomos />}  />
                    <Route path="tech" exact element={<Tech />}  />
                    <Route path="infra" exact element={<Infra />}  />
                    <Route path="help!" exact element={<Help />}  />
                    <Route path="digi" exact element={<Digi />}  />
                    <Route path="edu" exact element={<Edu />}  />
                </Routes>
            <Footer />
        </>
    )
}

export default App;