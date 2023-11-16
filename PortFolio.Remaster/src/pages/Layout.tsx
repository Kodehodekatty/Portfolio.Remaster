import { Outlet } from "react-router-dom";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Container } from "./styles";



const Layout = () => {
  return (
    <div className="col-span-3"> 
    
<Header/>

   <div>
<Outlet/></div>
<Footer/>


</div>
  );
};

export default Layout;
