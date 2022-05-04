import './styles.css';
import  UpBusiness from "../../../../assets/images/cards/up-business.svg"
import  Ideias from "../../../../assets/images/cards/ideias.svg"
import  Group from "../../../../assets/images/cards/group.svg"

const HeroFive = () => {

  const cards = [
    {title: "Acessibilidade", img: UpBusiness},
    {title: "Conhecimento", img: Ideias},
    {title: "Colaboração", img: Group},
  ];


  return (
    <div className="hero-five edu wd-cont">
      <div className='method'>
        <h2>Nossa metodologia</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <div>
          <div className='cards'>
              {cards.map((card, count) => {
                return (
                  <div key={count}>
                    <h3>{card.title}</h3>
                    <img src={card.img} alt={card.title}/>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroFive;