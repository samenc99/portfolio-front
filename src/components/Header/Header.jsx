import {Button, ButtonOutlined, Container, Logo} from "./styled";
import LogoUrl from '../../assets/logo.png'
import {useCoordinator} from "../../Hooks/useCoordinator";

export const Header = ()=>{
  const {toPortfolio, toHome} = useCoordinator()
  return(
    <Container>
     <nav>
       <Button onClick={toHome}>HOME</Button>
       <Button onClick={toPortfolio}>PORTFÓLIO</Button>
       <ButtonOutlined>CONTATO</ButtonOutlined>
       <Logo src={LogoUrl} />
     </nav>
    </Container>
  )
}