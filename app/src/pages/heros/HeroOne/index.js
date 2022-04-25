import { Button } from 'reactstrap';
import './styles.css';

const HeroOne = () => {
  return (
    <div className="hero-one">
      <div className='wd-cont'>
        <div className="info">
            <h1>UMA NOVA FORMA DE ENSINAR E APRENDER.</h1>
            <p className='mt-5'>Recursos multimídia e uma experiência de imersão que mudam a forma de aprender. </p>
            <Button className='mt-3' color='warning' outline>Entre em contato agora</Button>
        </div>
      </div>
        <div className='gradient-line'/>
    </div>
  )
}

export default HeroOne;