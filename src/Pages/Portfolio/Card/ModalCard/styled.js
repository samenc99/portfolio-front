import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background-color: rgba(0,0,0,0.88);
  position: fixed;
  top:0;
  left:0;
  display: flex;
  align-items: center;
  >div{
    display: flex;
    align-items: center;
    position: relative;
  }
`

export const Description = styled.div`
  color: white;
  flex: ${props => props.display? '1': '0'};
  padding: 30px;
  transition: flex 1s;
  overflow: hidden;
`

export const P = styled.p`
  margin-bottom: 10px;
  font-size: 18px;
  text-align: justify;
`

export const Repository = styled.p`
  text-decoration: none;
  color: #7f7f7f;
  cursor: pointer;
  :hover{
    text-decoration: underline;
  }
`

export const DivLinks = styled.div`
  margin-bottom: 20px;
  >a{
    text-decoration: none;
  }
`

export const Closed = styled.div`
  font-size: 25px;
  color: #7f7f7f;
  position: absolute;
  top: 0;
  right: 30px;
  :hover{
    opacity: 80%;
    text-decoration: underline;
  }
  cursor: pointer;
`