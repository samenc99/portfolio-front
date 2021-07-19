import aws from '../../../../assets/Skills/aws.png'
import c from '../../../../assets/Skills/c.png'
import cpp from '../../../../assets/Skills/cpp.png'
import css3 from '../../../../assets/Skills/css3.png'
import html5 from '../../../../assets/Skills/html5.png'
import jest from '../../../../assets/Skills/jest.png'
import js from '../../../../assets/Skills/js.png'
import mysql from '../../../../assets/Skills/mysql.png'
import nodejs from '../../../../assets/Skills/nodejs.png'
import ts from '../../../../assets/Skills/ts.png'
import react from '../../../../assets/Skills/react.png'
import {Content, Skill} from "./styled";

export const Skills = ()=>{
  return(
    <Content>
      <Skill>
        <img src={html5} alt={'HTML5'}/>
        <p>HTML5</p>
      </Skill>
      <Skill>
        <img src={css3} alt={'CSS3'}/>
        <p>CSS3</p>
      </Skill>
      <Skill>
        <img src={js} alt={'JavaScript'}/>
        <p>JavaScript</p>
      </Skill>
      <Skill>
        <img src={react} alt={'Reactjs'}/>
        <p>Reactjs</p>
      </Skill>
      <Skill>
        <img src={nodejs} alt={'Nodejs'}/>
        <p>Nodejs</p>
      </Skill>
      <Skill>
        <img src={ts} alt={'TypeScript'}/>
        <p>TypeScript</p>
      </Skill>
      <Skill>
        <img src={jest} alt={'Jest'}/>
        <p>Jest</p>
      </Skill>
      <Skill>
        <img src={mysql} alt={'MySql'}/>
        <p>MySql</p>
      </Skill>
      <Skill>
        <img src={aws} alt={'AWS'}/>
        <p>AWS</p>
      </Skill>
      <Skill>
        <img src={c} alt={'C'}/>
        <p>C</p>
      </Skill>
      <Skill>
        <img src={cpp} alt={'C++'}/>
        <p>C++</p>
      </Skill>
    </Content>
  )
}