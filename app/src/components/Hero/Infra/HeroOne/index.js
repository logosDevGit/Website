import { Button } from 'reactstrap';
import './styles.css';

const HeroOne = () => {
  return (
    <div className="hero-one infra">
      <div className='wd-cont'>
        <div className="info">
            <h3>Uma equipe pronta para lidar com a montagem e manutenção de infraestrutura digital</h3>
            <p className='mt-5'>Fornecimento de hospedagem e suporte a infraestrutura da sua rede.</p>
            <Button className='mt-3 btn-yellow'>Entre em contato agora</Button>
        </div>
      </div>
        <div className='gradient-line'/>
    </div>
  )
}

export default HeroOne;