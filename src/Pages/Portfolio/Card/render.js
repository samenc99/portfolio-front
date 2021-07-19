import {Card} from "./Card";
import rappi4 from '../../../assets/Projects/rappi4.png'

const projects = [
  {
    imgUrl: rappi4,
    description: 'Projeto realizado na conclusão do módulo de front-end do bootcamp da Labenu.',
    descriptionAll: 'O projeto fora realizado em grupo, utilizando a biblioteca Reactjs. Para o versionamento' +
      ' de código utilizamos o GitHub. Um projeto front-end, onde consumimos API pronta que a' +
      ' Labenu nos disponibilizou.',
    repository: 'https://github.com/future4code/cruz-labe-food10',
    individual: 'Para um aprendizado mais abrangente, realizei também a construção deste projeto de forma individual' +
      ' ficando assim responsável pela construção de todas as páginas e entendendo todo o processo de construção ' +
      ' de cada particularidade do projeto.',
    individualRepository : 'https://github.com/samenc99/rappi4-pessoal',
    publication : 'http://rappi-4d.surge.sh/',
    individualPublication : ''
  }
]

export const render = ()=>{
  return projects.map(project=> <Card project={project}/> )
}