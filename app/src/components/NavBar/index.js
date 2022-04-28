import React, {useState} from 'react';
import './styles.css'
import {ReactComponent as Logo} from '../../assets/images/logos/primary.svg';
import { Input } from "reactstrap";
import { FaBars } from "react-icons/fa"

const NavBar = () => {

    const [collapse, setCollpse] = useState(true)

    const openNav = () => {
        setCollpse(!collapse)
    }

    return (
            <div className="nav-bar">
                <div className='desktop h-100'>
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
                <div className='mobile navbar'>
                     <div className="wd-cont d-flex align-items-center">
                        <div>
                            <Logo />
                        </div>
                        <div className='line'></div>
                        <h1>Soluções Educacionais</h1>
                        <button onClick={() => openNav()}><FaBars /></button>
                    </div>
                    <div className={collapse ? "collapse" : "collapse show"} >
                        <ul className="d-flex flex-column mb-0 ">
                            <li>
                                <Input
                                    bsSize="lg"
                                    type="select"
                                    style={{paddingLeft: '0'}}
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
            </div>
    )
}

export default NavBar;