import {Container} from "./styled";
import {useState} from "react";
import {ModalCard} from "./ModalCard/ModalCard";

export const Card = ({project})=>{
  const [modal, setModal] = useState(false);

  const modalSet = ()=>{
    setModal(!modal)
  }

  return (
    <>
      <Container onClick={modalSet}>
        <img src={project.imgUrl} alt=""/>
        <p>{project.description}</p>
      </Container>
      {modal && <ModalCard project={project} setModal={modalSet}/>}
    </>
  )
}

export const CardModal = ({project})=>{
  return (
    <Container>
      <img src={project.imgUrl} alt=""/>
      <p>{project.description}</p>
    </Container>
  )
}