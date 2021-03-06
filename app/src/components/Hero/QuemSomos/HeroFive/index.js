import './styles.css';
import  Implantation from "../../../../assets/images/cards/implantation.svg"
import  Knowledge from "../../../../assets/images/cards/knowledge.svg"
import  CustomReports from "../../../../assets/images/cards/custom-reports.svg"
import EduGames from "../../../../assets/images/cards/educational-games.svg"
import Steps from "../../../../assets/images/steps.png" 

const HeroFive = () => {

    const Cards = [
        {
            title: "Relatórios customizados",
            description: "Produção de relatórios customizados com extração de dados conforme a necessidade do seu negócio.",
            Icon: CustomReports,
            gridArea: 'a'
        },
        {
            title: "Games educacionais",
            description: "Através da proposta de aprendizagem criamos projetos ludicos que estimulam e engajam alunos e colaboradores na construção dos seus conhecimentos.",
            Icon: EduGames,
            gridArea: 'b'
        },
        {
            title: "Cursos e Treinamentos",
            description: "Captação de conteúdo com os profissionais de referência para confecção dos materias ou transformação dos conteúdos em cursos e treinamentos EAD.",
            Icon: Knowledge,
            gridArea: 'c'
        },
    ];

  return (
    <div className="hero-five quem-somos">
      <div className='wd-cont d-flex justify-content-center flex-column'>
        <h1>Como fazemos</h1>
        <p>Nossa metodologia é simples e fluída, nosso processo é ágil e com poucas etapas.</p>
        <p> Utilizamos bate-papos e acompanhamento das tarefas / rotinas executadas, engajando e desenvolvendo junto com o colaborador o conhecimento necessário para o negócio.</p>
        <div className='h-100 w-100 my-5 steps'>
            <img src={Steps} alt="Passos de como fazemos"/>
        </div>
        <h3 className='info-text'>Nosso objetivo é capacitar profissionais através de uma proposta de geração de valor e compromisso com o desenvolvimento social e intelectual dos mesmos dentro das organizações.</h3>
        <div className='grid-cards'>
            {Cards?.map(({title, description, Icon, gridArea}) => {
                return (
                    <div key={title} style={{gridArea: gridArea}}>
                        <img src={Icon} alt={title + " icon"}/>
                        <h4>{title}</h4>
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