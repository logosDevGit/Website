import './styles.css';
import Ballon from "../../../../assets/images/quem-somos.png"

const HeroTwo = () => {
  return (
    <div className="hero-two quem-somos">
      <div >
        <h2>Quem somos</h2>
        <p>Somos uma empresa que visa potencializar a arte de ensinar e aprender. Queremos propiciar momentos únicos, para romper os desafios educacionais.</p>
        <div className='w-100 h-100'>
          <img src={Ballon} alt="Trabalho organizado"/>
          <p>Trabalhamos com uma ampla gama de recursos multimídias e equipes formadas por profissionais de educação corporativa e tecnologia.</p>
          <p>Podendo assim, montar o melhor time para desenvolver o seu projeto.</p>
          <h2 className='in-text'>Você pode contar conosco do início ao fim desta jornada.</h2>
        </div>
      </div>
    </div>
  )
}

export default HeroTwo;