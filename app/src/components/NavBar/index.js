import './styles.css'
import {ReactComponent as Logo} from '../../assets/images/logos/primary.svg';
import { Input } from "reactstrap";

const NavBar = () => {
    return (
        <div className="nav-bar">
            <div className="wd-cont d-flex align-items-center">
                <div>
                    <Logo />
                </div>
                <ul className="d-flex align-items-center mb-0 ">
                    <li>
                        <Input
                            bsSize="lg"
                            type="select"
                        >
                            <option>
                                Equipes
                            </option>
                            <option>
                                Tech
                            </option>
                            <option>
                                Infra
                            </option>
                            <option>
                                Help!
                            </option>
                            <option>
                                Edu
                            </option>
                            <option>
                                Digi
                            </option>
                        </Input>
                    </li>
                    <li>Quem Somos</li>
                    <li>Metodolodia</li>
                    <li>Portifólio</li>
                    <li>Contato</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;