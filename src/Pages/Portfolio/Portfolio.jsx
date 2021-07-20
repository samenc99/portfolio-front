import {Header} from "../../components/Header/Header";
import {Container, Content} from "./styled";
import {Project} from "../../model/project";
import {useEffect, useState} from "react";
import {api} from "../../services/api";
import {Card} from "./Card/Card";

export const Portfolio = ()=>{
  const [projects : Project[], setProjects] = useState([])

  const getProjects = async()=>{
    try{
      const res = await api.get('/projects')
      setProjects(res.data.projects)
    }catch (err){
      alert('Estamos com problemas internos, por favor tente novamente mais tarde.')
    }
  }

  useEffect(()=>{
    getProjects()
  },[])

  const render = ()=>{
    return projects.map(project=> <Card project={project}/> )
  }

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