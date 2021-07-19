import {Button, ButtonOutlined, Container, Logo} from "./styled";
import LogoUrl from '../../assets/logo.png'
import {HOME, PORTFOLIO, CONTACT} from "../../Routes/urlRoutes";

export const Header = ({page})=>{
  return(
    <Container >
      <nav>
        <a href={HOME}><Button>HOME</Button></a>
        <a href={PORTFOLIO}><Button>PORTFÓLIO</Button></a>
        <a href={CONTACT}><ButtonOutlined>CONTATO</ButtonOutlined></a>
        <a href={HOME}><Logo src={LogoUrl} /></a>
      </nav>
    </Container>
  )
}