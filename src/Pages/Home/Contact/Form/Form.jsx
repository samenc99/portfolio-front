import {Button, Content, Email, Message, Name} from "./styled";

export const Form = ()=>{
  return(
    <Content>
      <Name/>
      <Email/>
      <Message/>
      <Button>Enviar</Button>
    </Content>
  )
}