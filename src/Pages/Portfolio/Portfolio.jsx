import {Header} from "../../components/Header/Header";
import {Container, Content} from "./styled";
import {Project} from "../../model/project";
import {useEffect, useState} from "react";
import {api} from "../../services/api";
import {Card} from "./Card/Card";
import {Loading} from '../../components/Loading/Loading'

export const Portfolio = ()=>{
  const [projects : Project[], setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  const getProjects = async()=>{
    try{
      const res = await api.get('/projects')
      setProjects(res.data.projects)
      setLoading(false)
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
        {loading? (
          <Loading/>
        ):(
          <Content>
            {render()}
          </Content>
        )}
      </Container>
    </>
  )
}