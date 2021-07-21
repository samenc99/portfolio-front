import {Button, ButtonOutlined, Container, Logo, MyMenuIcon, DivMenuIcon} from "./styled";
import LogoUrl from '../../assets/logo.png'
import {HOME, PORTFOLIO, CONTACT} from "../../Routes/urlRoutes";
import {useState} from 'react'

export const Header = ({page})=>{
  const [showMenuMobile, setShowMenuMobile] = useState(0);

  const setShow = ()=>{
    if(showMenuMobile)setShowMenuMobile(0)
    else setShowMenuMobile(1)
  }

  return(
    <Container show={showMenuMobile}>
      <nav>
        <a href={HOME}><Button>HOME</Button></a>
        <a href={PORTFOLIO}><Button>PORTFÓLIO</Button></a>
        <a href={CONTACT}><ButtonOutlined>CONTATO</ButtonOutlined></a>
        <a href={HOME}><Logo src={LogoUrl} /></a>
      </nav>
      <DivMenuIcon>
        <MyMenuIcon
          onClick={setShow}
          show={showMenuMobile}
        />
      </DivMenuIcon>
    </Container>
  )
}