import Carousel from 'react-multi-carousel';
import "./styles.css"
import BatalhaNaval from "../../../assets/images/portifolio/batalha-naval.png"
import Minions from "../../../assets/images/portifolio/minions.png"
import Pagamento from "../../../assets/images/portifolio/pagamento.png"


const HeroSix = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 4000, min: 0 },
          items: 1
        },
        
      };

    return(
        <div className="hero-six">
            <div className='wd-cont'>
                <h1>Portifólio</h1>
                <div className='px-3'> 
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                    >
                        <div className="card-image"><img src={Pagamento} alt="portifólio pagamento"/></div>
                        <div className="card-image"><img src={BatalhaNaval} alt="portifólio batalha naval"/></div>
                        <div className="card-image"><img src={Minions} alt="portifólio minions"/></div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default HeroSix