import { Routes, Route, Navigate } from "react-router";

import { Index } from ".";
import Layout from "./Layout";
import { StartPage } from "./pages/startPage/StartPage";
import PageNotFound from "./pages/pageNotFound/PageNotFound";





export function RoutesContainer() 

{

return (

    <Routes>
    <Route element={<Layout />}>
      

    
      
                <Route path="/" element={<StartPage />} />
           
           
     

      

        <Route path="/404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="404" />} />
    </Route>
</Routes>



)

}