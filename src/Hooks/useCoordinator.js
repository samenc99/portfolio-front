import {useHistory} from 'react-router-dom'
import {HOME, PORTFOLIO} from "../Routes/urlRoutes";

export const useCoordinator = ()=>{
  const history = useHistory()
  const toHome = ()=>history.push(HOME)
  const toPortfolio = ()=>history.push(PORTFOLIO)

  return {toHome, toPortfolio}
}