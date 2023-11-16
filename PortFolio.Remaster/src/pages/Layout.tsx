import { Outlet } from "react-router-dom";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Container } from "./styles";



const Layout = () => {
  return (
    <> 
    <Container>
<Header/>

   
<Outlet/>
<Footer/>

</Container> 
</>
  );
};

export default Layout;
