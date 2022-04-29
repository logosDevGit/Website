import './styles.css';
import  Implantation from "../../../../assets/images/cards/implantation.svg"
import  Knowledge from "../../../../assets/images/cards/knowledge.svg"
import  CustomReports from "../../../../assets/images/cards/custom-reports.svg"
import EduGames from "../../../../assets/images/cards/educational-games.svg"

const HeroFive = () => {

    const Cards = [
        {
            title: "Relatórios customizados",
            description: "Produção de relatórios customizados com extração de dados conforme a necessidade do seu negócio.",
            Icon: CustomReports 
        },
        {
            title: "Games educacionais",
            description: "Através da proposta de aprendizagem criamos projetos ludicos que estimulam e engajam alunos e colaboradores na construção dos seus conhecimentos.",
            Icon: EduGames 
        },
        {
            title: "Implantação",
            description: "Nós trabalhamos com a implantação de ferramentas como o moodle, desde a instalação a total customização do layout e funcionalidades.",
            Icon: Implantation 
        },
        {
            title: "Cursos e Treinamentos",
            description: "Captação de conteúdo com os profissionais de referência para confecção dos materias ou transformação dos conteúdos em cursos e treinamentos EAD.",
            Icon: Knowledge 
        },
    ];

  return (
    <div className="hero-five">
      <div className='wd-cont d-flex justify-content-center flex-column'>
        <h1>Como fazemos</h1>
        <div className='grid-cards'>
            {Cards?.map(({title, description, Icon}) => {
                return (
                    <div key={title}>
                        <img src={Icon} alt={title + " icon"}/>
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                )
            })}
        </div>
      </div>
    </div>
  )
}

export default HeroFive;