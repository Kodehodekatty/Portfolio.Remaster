import { Outlet } from "react-router-dom";
import { Container, Footer, Header, VscBackground } from "./styles";
// import { Header } from "./components/header/Header";
// import { Footer } from "./components/footer/Footer";

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
