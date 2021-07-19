import styled from "styled-components";

export const Content = styled.form`
  grid-column: 1/2;
  border-right: 1px solid white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
`

const Input = styled.input`
  outline: none;
  text-decoration: none;
  border: 1px solid white;
  padding-left: 10px;
  color: #000312;
  
  transition: box-shadow 0.3s;
  :hover {
    box-shadow: 0 0 5px #000312;
  }
  
  :focus {
    box-shadow: 0 0 5px #031f87;
  }
`

export const Name = styled(Input)`
  width: 33%;
  height: 40px;
`

export const Email = styled(Input)`
  width: 66%;
  height: 40px;
`

export const Message = styled.textarea`
  width: 100%;
  height: 225px;
  outline: none;
  border: 1px solid white;
  padding-left: 10px;
  padding-top: 5px;
  color: #000312;
  transition: box-shadow 0.3s;
  :hover {
    box-shadow: 0 0 5px #000312;
  }

  :focus {
    box-shadow: 0 0 5px #031f87;
  }
`

export const Button = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  background-color: #000312;
  color: white;
  transition: opacity 0.3s;
  :hover{
    opacity: 90%;
  }
  :active{
    opacity: 98%;
  }
`