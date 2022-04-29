import './styles.css';
import Carousel from 'react-multi-carousel';
import {ReactComponent as Tech} from "../../../../assets/images/cards/tech.svg"
import {ReactComponent as Infra} from "../../../../assets/images/cards/infra.svg"
import {ReactComponent as Edu} from "../../../../assets/images/cards/edu.svg"
import {ReactComponent as Help} from "../../../../assets/images/cards/help.svg"
import {ReactComponent as Digi} from "../../../../assets/images/cards/digi.svg"

const HeroThree = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 600 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 600, min: 0 },
          items: 1
        }
      };
      

  return (
    <div className="hero-three">
      <div className='wd-cont d-flex justify-content-center flex-column'>
        <h3>EQUIPE LOGOS</h3>
        <p className='mt-5'>Nosso time multidisciplinar está pronto para desenvolver o seu projeto do começo ao fim. Conheça nossa equipe:</p>
        <Carousel 
            responsive={responsive}
            infinite={true}
            className="carousel"
        >
            <Tech />
            <Infra />
            <Edu />
            <Help />
            <Digi />
        </Carousel>
      </div>
    </div>
  )
}

export default HeroThree;