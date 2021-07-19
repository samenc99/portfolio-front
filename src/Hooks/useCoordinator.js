import {useHistory} from 'react-router-dom'
import {CONTACT, HOME, PORTFOLIO} from "../Routes/urlRoutes";

export const useCoordinator = ()=>{
  const history = useHistory()
  const toHome = ()=>history.push(HOME)
  const toPortfolio = ()=>history.push(PORTFOLIO)
  const toContact = ()=>history.push(CONTACT)

  return {toHome, toPortfolio,toContact}
}