import {Button, ButtonOutlined, Container, Logo} from "./styled";
import LogoUrl from '../../assets/logo.png'

export const Header = ()=>{
 return(
   <Container>
     <nav>
       <Button>HOME</Button>
       <Button>PORTFÓLIO</Button>
       <ButtonOutlined>CONTATO</ButtonOutlined>
       <Logo src={LogoUrl} />
     </nav>
   </Container>
 )
}