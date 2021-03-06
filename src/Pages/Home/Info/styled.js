import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  background-image: linear-gradient(#00051d,#00082b);
  display: grid;
  grid-template-columns: 400px 1fr;
  @media(max-width: 420px){
    display: flex;
    flex-direction: column;
  }
`

export const Perfil = styled.article`
  width: 100%;
  height: 100%;
  grid: 1/2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media(max-width: 420px){
    height: 200px;
  }
`

export const Photo = styled.img`
  width: 200px;
  height: 200px;
  transition: all 1s;
  justify-self: flex-start;
  :hover{
    width: 400px;
    height: 400px;
    
    border: 4px solid black;
  }
  border-radius: 200px;
  @media(max-width: 420px){
    width: 100px;
    height: 100px;
    :hover{
      width: 100px;
      height: 100px;
      border: none;
    }
  }
`

export const Name = styled.p`
  margin-top: 20px;
  font-size: 22px;
  font-weight: bold;
  color: white;
`

export const Small = styled.p`
  margin-top: 10px;
  font-size: 10px;
  color: white;
`

export const Content = styled.article`
  grid: 2/3;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 50px;
  @media(max-width: 420px){
    padding: 20px;
  }
`

export const Description = styled.p`
  color: white;
  text-align: justify;
  margin-bottom: 30px;
`

export const Ul = styled.ul`
  padding: 0 20px;
  margin-bottom: 10px;
`

export const Li = styled.li`
  color: white;
`

export const SkillsDiv = styled.div`
  width: 100%;
`