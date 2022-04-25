import { Button } from "reactstrap"
import './styles.css';

const HeroSeven = () => {

    return (
        <div className="hero-seven py-5">
            <div className="wd-cont d-flex align-items-center justify-content-center flex-column">
                <h1>Entre contato conosco</h1>
                <form className="d-flex flex-column" style={{width: '70%'}}> 
                    <input type="text" name="name" placeholder="Nome Completo"/>
                    <input type="text" name="email" placeholder="Seu melhor email de contato"/>
                    <input type="text" name="phone" placeholder="Número de contato"/>
                    <input type="text" name="business" placeholder="Nome da empresa"/>
                    <Button className='mt-3' color='warning' outline>Entre em contato agora</Button>
                </form>
            </div>
        </div>
    )
}

export default HeroSeven