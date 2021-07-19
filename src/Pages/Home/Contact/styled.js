import styled from "styled-components";

export const Content = styled.section`
  width: 100%;
  height: 400px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 30px 1fr;
  background-color: #C5C5C5;
`

export const Title = styled.p`
  grid-column: 1/3;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000312;
  font-weight: bold;
`