import {Header} from "../../components/Header/Header";
import {Container, Content} from "./styled";
import {render} from "./Card/render";

export const Portfolio = ()=>{



  return(
    <>
      <Header/>
      <Container>
        <Content>
          {render()}
        </Content>
      </Container>
    </>
  )
}