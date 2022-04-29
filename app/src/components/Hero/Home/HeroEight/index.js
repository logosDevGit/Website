import './styles.css';
import Educlass from "../../../../assets/images/parceiros/Educlass.svg"
import Nobles from "../../../../assets/images/parceiros/Nobles.svg"
import PGL from "../../../../assets/images/parceiros/PGL.svg"
import FrancineDias from "../../../../assets/images/parceiros/FrancineDias.svg"
import RedeMoodle from "../../../../assets/images/parceiros/RedeMoodle.svg"

const HeroEight = () => {
  return (
    <div className="hero-eight">
        <h1>Parceiros</h1>
        <div className='d-flex justify-content-center align-items-center py-3'>
            <img src={PGL}  alt="Logo Editora PGL"/>
            <img src={Nobles}  alt="Logo Nobles"/>
            <img src={RedeMoodle}  alt="Logo Rede Moodle"/>
            <img src={Educlass}  alt="Logo Educlass"/>
            <img src={FrancineDias}  alt="Logo Francine Dias"/>
        </div>
    </div>
  )
}

export default HeroEight;