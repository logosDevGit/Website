import HeroOne from "../views/HeroOne/index"
import HeroTwo from "../views/HeroTwo/index"
import NavBar from "../components/NavBar";
import HeroThree from "../views/HeroThree";

const Routes = () => {

    return (
        <>
            <NavBar />
            <HeroOne />
            <HeroTwo />
            <HeroThree />
        </>
    )
}

export default Routes;