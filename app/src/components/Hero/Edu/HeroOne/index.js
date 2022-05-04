import { Button } from 'reactstrap';
import './styles.css';

const HeroOne = () => {
  return (
    <div className="hero-one edu">
      <div className='wd-cont'>
        <div className="info">
            <h3>Equipe multidisciplinar voltada a educação e aprimoramento</h3>
            <p className='mt-5'>Do desenvolvimento de treinamentos, gamificação e aprimoramento de colaboradores.</p>
            <Button className='mt-3 btn-yellow'>Entre em contato agora</Button>
        </div>
      </div>
        <div className='gradient-line'/>
    </div>
  )
}

export default HeroOne;