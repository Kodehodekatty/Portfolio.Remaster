import { useState } from "react"

export const NavComponent = ({}) => {


const [showFace,setShowFace] = useState(false)



    return (
        <div className=" m-auto">sidebar
     
        <button onClick={()=>{setShowFace(prev => !prev)}}>click</button>
      <div className="border-2">
       {showFace ? (<img src='src/assets/images/faceshadow.png' alt='shadowme' className='' /> ) : (  <img src='src/assets/images/fullshadow.png' alt='shadowme' className='' /> )
}
        
        </div>
        
        
        
        
        </div>
    )
}