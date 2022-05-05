import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './styles.css'
import { FaTimes, FaAngleDown} from "react-icons/fa"

const NavSidebar = (props) => {

    const {
        collapse,
        openNav
    } = props;

    const [dropdown, setDropdown] = useState(false)

    return (
        <div className={collapse ? "nav-sidebar" : "nav-sidebar hide"} >
            <div className="close" onClick={() => openNav()}>
                <div>
                    <FaTimes />
                </div>
            </div>
            <ul className="d-flex flex-column mb-0 ">
                <li onClick={() => setDropdown(!dropdown)} style={{cursor: "pointer"}} >Equipes<span><FaAngleDown /></span></li>
                <div className={dropdown ? 'dropdown' : "dropdown hide"}>
                        <li>
                            <Link to="/tech">Tech </Link>
                        </li>
                        <li>
                            <Link to="/infra"> Infra </Link>
                        </li>
                        <li>
                            <Link to="/digi">Digi</Link>
                        </li>
                        <li>
                           <Link to="/digi">Edu</Link>
                        </li>
                        <li>
                            <Link to ="/help!"> Help</Link>
                        </li>
                </div>
                <li> <Link to="/quem-somos">Quem Somos</Link></li>
                <li>Metodolodia</li>
                <li>Portifólio</li>
                <li>Contato</li>
            </ul>
        </div>
    )
}

export default NavSidebar;