import styled from "styled-components";

export const Content = styled.form`
  grid-column: 1/2;
  border-right: 1px solid white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  @media(max-width: 420px){
    padding: 0 20px;
  }
`

const Input = styled.input`
  outline: none;
  text-decoration: none;
  border: 1px solid #C5C5C5;
  padding-left: 10px;
  color: #000312;
  
  transition: box-shadow 0.3s;
  :hover {
    box-shadow: 0 0 10px #C5C5C5;
  }
  
  :focus {
    box-shadow: 0 0 3px white;
  }
  margin-bottom: 10px;
`

export const Name = styled(Input)`
  width: 39%;
  height: 40px;
`

export const Email = styled(Input)`
  width: 60%;
  height: 40px;
`

export const Text = styled.textarea`
  width: 100%;
  height: 225px;
  outline: none;
  border: 1px solid #C5C5C5;
  padding-left: 10px;
  padding-top: 5px;
  color: #000312;
  transition: box-shadow 0.3s;
  :hover {
    box-shadow: 0 0 10px #C5C5C5;
  }

  :focus {
    box-shadow: 0 0 3px white;
  }
  margin-bottom: 10px;
`

export const Button = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  background-color: white;
  color: #000312;
  transition: opacity 0.3s;

  :hover {
    opacity: 80%;
  }

  :active {
    opacity: 98%;
  }
  margin-bottom: 10px;
`

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(255,255,255,0.8);
`