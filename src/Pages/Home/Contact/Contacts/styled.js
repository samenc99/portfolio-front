import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 50px;
  grid-column: 2/3;
  grid-row: 2/3;
  @media(max-width: 420px){
    align-items: center;
    padding: 0;
  }
`

export const Name = styled.p`
  font-size: 30px;
  color: white;
  font-weight: bold;
  @media(max-width: 420px){
    display: none;
  }
`

export const Profession = styled.p`
  font-size: 14px;
  color: white;
  @media(max-width: 420px){
    display: none;
  }
`

export const P = styled.p`
  color: white;
  margin-top: 15px;
  @media(max-width: 420px){
    display: none;
  }
`

export const Img = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  :hover, :active{
    opacity: 50%;
  }
`

export const DivImg = styled.div`
  display: flex;
  margin-top: 10px;
  @media(max-width: 420px) {
    margin-bottom: 10px;
  }
  >a{
    cursor: pointer;
  }
`