import {Button, ButtonOutlined, Container, Logo} from "./styled";
import LogoUrl from '../../assets/logo.png'
import {useCoordinator} from "../../Hooks/useCoordinator";
import {CONTACT} from "../../Routes/urlRoutes";
import {Link} from "react-router-dom";

export const Header = ()=>{
  const {toPortfolio, toHome, toContact} = useCoordinator()
  return(
    <Container>
     <nav>
       <Button onClick={toHome}>HOME</Button>
       <Button onClick={toPortfolio}>PORTFÓLIO</Button>
       <a href={'#contact'}><ButtonOutlined>CONTATO</ButtonOutlined></a>
       {/*<ButtonOutlined onClick={toContact}>CONTATO</ButtonOutlined>*/}
       <Link to={'/#contact'}>contato</Link>
       <Logo src={LogoUrl} />
     </nav>
    </Container>
  )
}