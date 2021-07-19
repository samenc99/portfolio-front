import {Container, Content, Description, Name, Perfil, Photo, Small, Li, Ul, SkillsDiv} from "./styled";
import PhotoUrl from '../../../assets/samuel.jpeg'
import {Skills} from "./Skills/Skills";

export const Info = ()=>{
  return(
    <Container id={'home'}>
      <Perfil>
        <Photo src={PhotoUrl}/>
        <Name>Samuel Pires Mateus</Name>
        <Small>PROFISSIONAL - PONTUAL - OBJETIVO</Small>
      </Perfil>
      <Content>
        <Description>
          Sou um desenvolvedor que adora ficar horas programando e encontrando soluções para problemas complexos. <br/>
          Formado pelo bootcamp da Labenu, estou apto para os desafios da programação. Durante o bootcamp passei por
          1000 horas de programação em um ambiente que simula o meio profissional. Utilizamos as ferramentas
          mais atuais do mercado, desenvolvendo projetos individuais e em equipe.
        </Description>
        <Ul>
          <Li>Formação
            <Ul>
              <Li>Desenvolvedor Full-Stack - 01/21-07/21 - Labenu</Li>
              <Li>Engenharia de Computação (incompleto) - 2017-2020 - UFSC</Li>
            </Ul>
          </Li>
        </Ul>
        <SkillsDiv>
          <Ul>
            <Li>Habilidades</Li>
          </Ul>
          <Skills/>
        </SkillsDiv>
      </Content>
    </Container>
  )
}