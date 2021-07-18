import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 30px;
  background-image: linear-gradient(#000728, #00051d);
  >nav{
    display: flex;
    align-items: center;
  }
  position: sticky;
  top: 0;
`

export const Logo = styled.img`
  height: 50px;
  :hover{
    opacity: 80%;
  }
  cursor: pointer;
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