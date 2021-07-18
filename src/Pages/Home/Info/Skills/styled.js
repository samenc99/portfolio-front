import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

export const Skill = styled.div`
  width: 30px;
  height: 30px;
  margin: 0 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: all 1s;
  >img{
    height: 30px;
    width: 30px;
  }
  >p{
    display: none;
    color: white;
  }
  :hover{
    transform: scale(1.6);
    >p{
      display: block;
    }
  }
`