import { Outlet } from "react-router-dom";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import usePortfolio from "../context/PortfolioContext";


const Layout = () => {

  
  const {bodyPageOpen} = usePortfolio()

  
  return (
  
<div className='grid h-full grid-cols-1 grid-rows-4 overflow-hidden'>
 <Header /> 
 
 {bodyPageOpen   ? (  <div className="bg-white break-words border-2 row-span-6" >
     <Outlet />
      </div>): (<div className="bg-transparent  break-words row-span-6 p-10" ></div>)}
      <Footer/>
      </div>
  );
};

export default Layout;


