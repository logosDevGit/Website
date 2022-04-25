import 'react-multi-carousel/lib/styles.css';
import NavBar from "../components/NavBar";
import HeroOne from "../views/HeroOne/index"
import HeroTwo from "../views/HeroTwo/index"
import HeroThree from "../views/HeroThree";
import HeroFour from "../views/HeroFour";
import HeroFive from "../views/HeroFive";
import HeroSix from "../views/HeroSix";

const Routes = () => {

    return (
        <>
            <NavBar />
            <HeroOne />
            <HeroTwo />
            <HeroThree />
            <HeroFour />
            <HeroFive/>
            <HeroSix/>
        </>
    )
}

export default Routes;