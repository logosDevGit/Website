import './styles.css';
import Logo from "../../../../assets/images/logos/small.svg"
import Rocket from "../../../../assets/icons/rocket.svg"
import Ideia from "../../../../assets/icons/ideia.svg"
import Globe from "../../../../assets/icons/globe.svg"
const HeroTwo = () => {
  return (
    <div className="hero-two digi">
      <div className='wd-cont d-flex justify-content-center flex-column'>
        <h1>O QUE FAZEMOS</h1>
        <p>Nosso foco é o desenvolvimento de projetos Educacionais e gestão do conhecimento por meio de AVAs (Ambientes Virtuais de Aprendizagem), treinamentos, cursos e estratégias de gamificação.</p>
      </div>
      <div><img src={Logo} alt="logo" className='icon logo'/></div>
      <div><img src={Rocket} alt="foguete" className='icon foguete'/></div>
      <div><img src={Ideia} alt="Ideia" className='icon ideia'/></div>
      <div><img src={Globe} alt="Globo" className='icon globe'/></div>
    </div>
  )
}

export default HeroTwo;