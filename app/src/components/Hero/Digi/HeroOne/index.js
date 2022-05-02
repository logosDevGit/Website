import { Button } from 'reactstrap';
import './styles.css';

const HeroOne = () => {
  return (
    <div className="hero-one digi">
      <div className='wd-cont'>
        <div className="info">
            <h3>Equipe multidisciplinar preparada para criação de materiais digitais de todos os tipos</h3>
            <p className='mt-5'>Da criação de peças gráficas à video-aulas, KVs e UI design.</p>
            <Button className='mt-3 btn-yellow'>Entre em contato agora</Button>
        </div>
      </div>
        <div className='gradient-line'/>
    </div>
  )
}

export default HeroOne;