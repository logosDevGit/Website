import Carousel from 'react-multi-carousel';
import "./styles.css"
import BatalhaNaval from "../../assets/images/portifolio/batalha-naval.png"
import Minions from "../../assets/images/portifolio/minions.png"
import Pagamento from "../../assets/images/portifolio/pagamento.png"


const HeroSix = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 4000, min: 0 },
          items: 1
        },
        
      };

    return(
        <div className="hero-six wd-cont">
            <h1>Portifólio</h1>
            <div className='px-3'> 
                <Carousel
                    responsive={responsive}
                    autoPlay={false}
                    infinite={true}
                >
                    <div className="card-image"><img src={Pagamento} alt="portifólio image"/></div>
                    <div className="card-image"><img src={BatalhaNaval} alt="portifólio image"/></div>
                    <div className="card-image"><img src={Minions} alt="portifólio image"/></div>
                </Carousel>
            </div>
        </div>
    )
}

export default HeroSix