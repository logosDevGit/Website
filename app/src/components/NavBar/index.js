import React, {useState} from 'react';
import './styles.css'
import {ReactComponent as Logo} from '../../assets/images/logos/primary.svg';
import { Input } from "reactstrap";
import { FaBars } from "react-icons/fa"
import { Link, useNavigate, useLocation} from 'react-router-dom';
import NavSidebar from '../NavSidebar/index.js';

const NavBar = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname.slice(1)

    const [collapse, setCollpse] = useState(false)

    const openNav = () => {
        setCollpse(!collapse)
    }

    const goTo = (e) => {
        let path = e.target.value.toLowerCase()
        if (path === "equipes") {
            navigate('/')
        } else {
            navigate(path)
        }
    }

    return (
            <div className="nav-bar">
                <div className='desktop h-100'>
                    <div className="wd-cont d-flex align-items-center">
                        <div>
                            <Link to="/">
                                <Logo />
                            </Link>
                        </div>
                        <ul className="d-flex align-items-center mb-0 ">
                            <li>
                                <Input
                                    bsSize="lg"
                                    type="select"
                                    onChange={e => goTo(e)}
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
                            <li><Link to="/quem-somos">Quem Somos</Link></li>
                            <li>Metodolodia</li>
                            <li>Portifólio</li>
                            <li>Contato</li>
                        </ul>
                    </div>
                </div>
                <div className='mobile navbar'>
                     <div className="wd-cont d-flex align-items-center">
                        <div>
                            <Link to="/">
                                <Logo />
                            </Link>
                        </div>
                        <div className='line'></div>
                        <h1>{ pathname === "tech" || pathname === 'digi' || pathname === 'infra' || pathname === 'edu' || pathname === 'help!' ? pathname.toUpperCase() : "Soluções Educacionais"}</h1>
                        <button onClick={() => openNav()}><FaBars /></button>
                    </div>
                    <NavSidebar collapse={collapse}  openNav={() => openNav()}/>
                </div>
            </div>
    )
}

export default NavBar;