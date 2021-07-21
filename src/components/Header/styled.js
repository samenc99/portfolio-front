import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';

export const MyMenuIcon = styled(MenuIcon)`
  transform: scale(1.3);
  color: white;
  display: none;
  margin-right: 30px;
  margin-top: ${props=>props.show?'-20px': '0'};
`

export const DivMenuIcon = styled.div`
  @media(min-width: 421px){
    display: none;
  }
`

export const Container = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-image: linear-gradient(#000310, #00051d);
  > nav {
    display: flex;
    align-items: center;
  }
  position: sticky;
  top: 0;
  @media(max-width: 420px){
    height: auto;
    min-height: 40px;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    >nav{
      transition: all 1s;
      width: ${props=>props.show?'100%': '0px'};
      height: ${props=>props.show?'150px': '0px'};
      flex-direction: column;
      overflow: hidden;
    }
  }
`

export const Logo = styled.img`
  height: 50px;
  :hover{
    opacity: 80%;
  }
  cursor: pointer;
  @media (max-width: 420px){
    display: none;
  }
`

export const Button = styled.button`
  border: none;
  background-color: rgba(0,0,0,0);
  color: white;
  font-weight: bolder;
  margin: 0 10px;
  cursor: pointer;
  padding: 10px 30px;
  :hover{
    opacity: 80%;
  }
`

export const ButtonOutlined = styled(Button)`
  border: 1px solid white;
`