import { Button } from 'reactstrap';
import './styles.css';

const HeroOne = () => {
  return (
    <div className="hero-one help">
      <div className='wd-cont'>
        <div className="info">
            <h3>Equipe de suporte em TI e Infraestrutura preparada para lhe auxiliar com qualquer imprevisto</h3>
            <p className='mt-5'>Suporte para o seu sistema quando e como precisar.</p>
            <Button className='mt-3 btn-yellow'>Entre em contato agora</Button>
        </div>
      </div>
        <div className='gradient-line'/>
    </div>
  )
}

export default HeroOne;