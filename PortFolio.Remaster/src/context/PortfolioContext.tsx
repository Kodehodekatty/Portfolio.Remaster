import { createContext, useContext, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router"

export interface PortfolioContextType {
headerOpen: boolean
setHeaderOpen: (headerOpen: boolean) => void
bodyPageOpen: boolean
setBodyPageOpen: (bodyPageOpen: boolean) => void
footerOpen: boolean
setFooterOpen: (footerOpen: boolean) => void

    showFace: boolean
    setShowFace:  React.Dispatch<React.SetStateAction<boolean>>
    showBody: boolean
    setShowBody:  React.Dispatch<React.SetStateAction<boolean>>
    showFeet: boolean
    setShowFeet:  React.Dispatch<React.SetStateAction<boolean>>

    ////

    OpenHeaderFunc: () => void
    openBodyFunc:() => void
    openFooterFunc:() => void

    ///

    OnlyShadow: boolean
    setOnlyShadow:  React.Dispatch<React.SetStateAction<boolean>>
}



const PortfolioContext = createContext<PortfolioContextType>({} as PortfolioContextType)

export function PortfolioContextProvider({ children }: { children: React.ReactNode }) {
 
    const [headerOpen, setHeaderOpen] = useState(false)
    const [bodyPageOpen, setBodyPageOpen] =useState(false)
const [footerOpen, setFooterOpen] =useState(false)

////


const [showFace,setShowFace] = useState(false)
const [showBody,setShowBody] = useState(false)
const [showFeet,setShowFeet] = useState(false)

const navigate  = useNavigate()

const [OnlyShadow,setOnlyShadow] = useState(false)

const OpenHeaderFunc = () => {

  setShowFace((prev) => !prev)
setHeaderOpen((prev) => !prev);
      


}

const openBodyFunc = () => {

    setShowBody((prev) => !prev)
    setBodyPageOpen((prev) => !prev);
        navigate('/')
  
  
  }

  const openFooterFunc = () => {

    setShowFeet((prev) => !prev)
    setFooterOpen((prev) => !prev);
      
  
  
  }

  useEffect(() => {
    if (!showFace && !showBody && showFeet) {
       setOnlyShadow(true)
    }
}, [])




  
        return (
            <PortfolioContext.Provider
                value={{
                  showBody,
                  setShowBody,
                  showFace,
                  setShowFace,
                  showFeet,
                  setShowFeet,
                  headerOpen,
                  setHeaderOpen,
                  OpenHeaderFunc,
                  setBodyPageOpen,
                  bodyPageOpen,
                  footerOpen,
                  setFooterOpen,
                  openBodyFunc,
                  openFooterFunc,
                  OnlyShadow,
                  setOnlyShadow,
                }}
            >
                {children}
            </PortfolioContext.Provider>
        )
    }
  




export default function usePortfolio() {
    const context = useContext(PortfolioContext)
    if (!context) {
        throw new Error('error')
    }
    return context
}