import {Button, Content, Email, Message, Name} from "./styled";

export const Form = ()=>{
  return(
    <Content>
      <Name
        placeholder={'Nome...'}
      />
      <Email
        placeholder={'E-mail...'}
      />
      <Message
        placeholder={'Digite a sua mensagem...'}
      />
      <Button>Enviar</Button>
    </Content>
  )
}