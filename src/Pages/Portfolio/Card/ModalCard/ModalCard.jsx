import {Closed, Container, Description, DivLinks, P, Repository} from "./styled";
import {useEffect, useState} from "react";
import {CardModal} from "../Card";

export const ModalCard = ({project, setModal})=>{
  const [display, setDisplay] = useState(false);

  useEffect(()=>{
    setDisplay(true)
  },[])

  const renderDescriptionArray = (array : [])=>{
    return array.map((item)=>{
      return <P>{item}</P>
    })
  }

  return <Container>
    <div>
      <CardModal project={project}/>
      <Description display={display}>
        {renderDescriptionArray(project.descriptionAll)}
        <DivLinks>
          <a href={project.repository} target={'_blank'}>
            <Repository>Para acessar o repositório do projeto clique aqui</Repository>
          </a>
          <a href={project.site} target={'_blank'}>
            <Repository>Para acessar o site do projeto clique aqui</Repository>
          </a>
        </DivLinks>
        {
          project.individualDescription?.length>0 &&
          <>
            {renderDescriptionArray(project.individualDescription)}
            <DivLinks>
              <a href={project.individualRepository} target={'_blank'}>
                <Repository>Para acessar o repositório do projeto individual clique aqui</Repository>
              </a>
              <a href={project.individualSite} target={'_blank'}>
                <Repository>Para acessar o site do projeto individual clique aqui</Repository>
              </a>
            </DivLinks>
          </>
        }
      </Description>
      <Closed onClick={()=>setModal(false)}>X</Closed>
    </div>

  </Container>
}