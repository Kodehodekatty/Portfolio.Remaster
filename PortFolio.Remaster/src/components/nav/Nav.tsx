import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

export const NavComponent = ({}) => {

const navigate = useNavigate()
const [showFace,setShowFace] = useState(false)




    return (
        <div className=" m-auto flex-auto h-4 ">sidebar
     
        <button  className="bg-white m-1"  onClick={()=>{setShowFace(prev => !prev); navigate('/AboutMe')}}>click</button>
      <div className="border-2 m-auto  ">
       {showFace ? (<img src='src/assets/images/faceshadow2.png'  alt='shadowme' className='' /> ) : (  <img src='src/assets/images/fullshadow2.png' alt='shadowme' className='' /> )
}
        
        </div>
        
        
        
        
        </div>
    )
}