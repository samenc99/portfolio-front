import {Content, Title} from "./styled";
import {Form} from "./Form/Form";
import {Contacts} from "./Contacts/Contacts";

export const Contact = ()=>{
  return(
    <Content id={'contact'}>
      <Title>CONTATO</Title>
      <Form/>
      <Contacts/>
    </Content>
  )
}