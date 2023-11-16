
import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

import body from '../assets/images/aboutmebackground2.png'




export const Index = () => {
    
 


    return (
        <>
           <Outlet/>
        <img src={body}/>
      
       
         
          
       </>
    )
}
