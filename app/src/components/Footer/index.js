import {ReactComponent as Logo} from "../../assets/images/logos/primary.svg"
import "./styles.css"
import { FaLinkedinIn, FaFacebookSquare, FaInstagram} from "react-icons/fa"

const Footer = () => {

    return(
        <footer >
            <div>
                <Logo />
            </div>
            <div>
                <p>contato@logoeduc.com.br</p>
            </div>
            <div className="d-flex">
                <a><FaLinkedinIn/></a>
                <a><FaFacebookSquare/></a>
                <a><FaInstagram /></a>
            </div>
        </footer>
    )
}

export default Footer;