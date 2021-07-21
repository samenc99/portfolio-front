import styled from "styled-components";
import ufsc from '../../../assets/ufsc.png'


export const Content = styled.section`
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`

export const Article = styled.article`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin-bottom: 50px;
  @media(max-width: 420px){
    display: block;
    margin-bottom: 10px;
  }
`

export const DivImg = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  >img{
    height: 100%;
  }
  @media(max-width: 420px){
    height: 50px;
    justify-content: flex-end;
    padding-right: 20px;
  }
`

export const Text = styled.p`
  width: 100%;
  height: 100%;
  text-align: justify;
  padding-right: 20px;
  display: flex;
  align-items: center;
  color: #000312;
  @media(max-width: 420px){
    padding: 0 20px;
  }
`