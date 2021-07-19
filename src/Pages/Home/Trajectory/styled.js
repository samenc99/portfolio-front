import styled from "styled-components";

export const Content = styled.section`
  width: 100%;
  background-color: #C5C5C5;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`

export const Article = styled.article`
  width: 100%;
  height: 200px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin-bottom: 50px;
`

export const DivImg = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  >img{
    height: 200px;
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
`