import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 50px;
`

export const Name = styled.p`
  font-size: 30px;
  color: white;
  font-weight: bold;
`

export const Profession = styled.p`
  font-size: 14px;
  color: white;
`

export const P = styled.p`
  color: white;
  margin-top: 15px;
`

export const Img = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  :hover{
    opacity: 50%;
  }
`

export const DivImg = styled.div`
  display: flex;
  margin-top: 10px
`