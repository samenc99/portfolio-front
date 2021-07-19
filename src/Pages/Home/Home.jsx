import {Header} from "../../components/Header/Header";
import {Info} from "./Info/Info";
import {Trajectory} from "./Trajectory/Trajectory";
import {Contact} from "./Contact/Contact";

export const Home = ()=>{
  return <div>
    <Header page={'home'}/>
    <Info/>
    <Trajectory/>
    <Contact/>
  </div>
}