import styled from "styled-components";

export const Container = styled.main`
  background-color: white;
  width: 100%;
  height: calc(100vh - 80px);
  padding: 30px 0 ;
  display: flex;
  justify-content: center;
  overflow-y: auto;
`

export const Content = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`