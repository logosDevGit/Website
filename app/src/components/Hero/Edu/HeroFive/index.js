import './styles.css';
import  UpBusiness from "../../../../assets/images/cards/up-business.svg"
import  Ideias from "../../../../assets/images/cards/ideias.svg"
import  Group from "../../../../assets/images/cards/group.svg"
import Carousel from 'react-multi-carousel';

const HeroFive = () => {

  const cardsMethod = [
    {title: "Acessibilidade", img: UpBusiness},
    {title: "Conhecimento", img: Ideias},
    {title: "Colaboração", img: Group},
  ];
  const cardsCollege = [
    {title: "Cursos livres", text: 'Nesta trilha, o profissional terá acesso a treinamentos relacionados aos mais variados temas, e poderá fazê-los de acordo com seus interesses.'},
    {title: "Trilhas de aprendizagem", text: 'Tratam-se de treinamentos específicos, direcionados para todas as área da empresa. A capacitação técnica irá potencializar a atuação das nossas equipes!'},
    {title: "Treinamento de integração", text: 'São os treinamentos introdutórios que visam ambientar o colaborador em relação aos principais fluxos e processos da sua área de atuação na empresa.'},
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 600 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 600, min: 300 },
      items: 1
    },

  }


  return (
    <div className="hero-five edu">
      <div className='bg-purple'></div>
      <div className='wd-cont'>
        <div className='method'>
          <h2>Nossa metodologia</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <div>
            <div className='cards'>
                {cardsMethod.map((card, count) => {
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
        <div className='college'>
          <h2>Universidade Corporativa</h2>
          <p className='py-3'>Cursos e treinamentos para auxiliar no desenvolvimento dos colaboradores dentro da empresa.</p>
            <Carousel 
              responsive={responsive}
              arrows={false}
              className='cards'
            >
                {cardsCollege.map((card, count) => {
                  return(
                    <div key={count} className="card">
                      <h3>{card.title}</h3>
                      <h5>{card.text}</h5>
                    </div>
                  )
                })}
            </Carousel>
        </div>
      </div>
    </div>
  )
}

export default HeroFive;