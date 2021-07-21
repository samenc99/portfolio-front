import styled from "styled-components";

export const Container = styled.article`
  min-width: 300px;
  min-height: 400px;
  max-width: 300px;
  min-height: 400px;
  margin: 0 15px 20px 15px;
  display: flex;
  flex-direction: column;
  border: 1px solid #c5c5c5;
  box-sizing: content-box;
  box-shadow: 0 0 10px #000312;
  background-color: white;
  >img{
    width: 300px;
    height: 300px;
    margin-bottom: 5px;
  }
  >p{
    width: 100%;
    height: 100%;
    padding: 10px;
    text-align: justify;
    color: #000312;
  }
  transition: box-shadow 1s;
  :hover{
    box-shadow: 0 0 40px #000312;
  }
  border-radius: 3px;
  overflow: hidden;
  @media(max-width: 420px){
    display: ${props=>props.modal? 'none' : 'flex'};
  }
`


