import { Button } from 'reactstrap';
import './styles.css';

const HeroOne = () => {
  return (
    <div className="hero-one tech">
      <div className='wd-cont'>
        <div className="info">
            <h3>Um time de desenvolvedores com conhecimento nas mais variadas linguagens de programação</h3>
            <p className='mt-5'>Do desenvolvimento de sites desktop e mobile, APIs e adaptação de plataformas já existentes.</p>
            <Button className='mt-3 btn-yellow'>Entre em contato agora</Button>
        </div>
      </div>
        <div className='gradient-line'/>
    </div>
  )
}

export default HeroOne;