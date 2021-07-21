import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components'
import { StylesProvider } from '@material-ui/core/styles';

const Progress = styled(CircularProgress)`
  width: 100px;
  height: 100px;
  color:#00082b;
  align-self: center;
  justify-self: center;
`

export const Loading = ()=>{
  return(
    <StylesProvider injectFirst>
      <Progress/>
    </StylesProvider>
  )
}