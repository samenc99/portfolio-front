import {Header} from "../../components/Header/Header";
import {Info} from "./Info/Info";
import {Trajectory} from "./Trajectory/Trajectory";
import {Contact} from "./Contact/Contact";

export const Home = ()=>{
  return <div>
    <Header/>
    <Info/>
    <Trajectory/>
    <Contact/>
  </div>
}