import {Article, Content, DivImg, Text} from "./styled";
import ufsc from '../../../assets/ufsc.png'
import labenu from '../../../assets/labenu.png'

export const Trajectory = ()=>{
  return(
    <Content>
      <Article>
        <DivImg>
          <img src={ufsc} alt="Logo Ufsc"/>
        </DivImg>
        <Text>
          Na UFSC que me abri para o mundo da programação e da matemática. Foi com esta experiência que desenvolvi um grande aprendizado em cálculo, programação, estrutura de dados e algoritmos.
          Tive a oportunidade de ser monitor de cálculo e linguagem de programação, experiência muito interessante que me trouxe uma nova forma de aprender, a de ensinar.
        </Text>
      </Article>
      <Article>
        <DivImg>
          <img src={labenu} alt="Logo Labenu"/>
        </DivImg>
        <Text>
          Bootcamp de programação focado em empregabilidade para ingressar no mercado de tecnologia.
          São 1000 horas de programação que faz com que o estudante seja um profissional tanto em Back-End quanto em Front-End.
        </Text>
      </Article>
    </Content>
  )
}