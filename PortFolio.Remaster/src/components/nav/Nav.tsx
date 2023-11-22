import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import usePortfolio from "../../context/PortfolioContext"

export const NavComponent = ({}) => {

const navigate = useNavigate()


const {showFace, openFooterFunc,OpenHeaderFunc, openBodyFunc, OnlyShadow, setOnlyShadow, showBody, showFeet} = usePortfolio()


useEffect(() => {
        if (!showFace && !showBody && !showFeet) {
           setOnlyShadow(true)
        }
    }, [])

    


    return (
        <div className="  row-span-4">
     
       
      <div className=" flex flex-col py-2 mt-1 border rounded-lg">
        
      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-1 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"  onClick={()=>{OpenHeaderFunc()}}>
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-transparent dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        Head</span>
</button>

<button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-1 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"  onClick={()=>{openBodyFunc()}}>
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-transparent dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        Body</span>
</button>
<button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-1 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"  onClick={()=>{openFooterFunc()}}>
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-transparent dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        Footer</span>
</button>
{showFace ? (<img src='src/assets/images/nav/faceshadow2.png'  alt='shadowme' className='' /> ) : (  <img src='src/assets/images/nav/fullshadow2.png' alt='shadowme' className='' /> )
} 
        </div>
        
        
        
        
        </div>
    

    
    )
}