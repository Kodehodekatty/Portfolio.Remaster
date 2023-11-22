import { createContext, useState } from "react"
import { useNavigate } from "react-router"

export interface PortfolioContextType {
   
}



const PortfolioContext = createContext<PortfolioContextType>({} as PortfolioContextType)

export function PortfolioContextProvider({ children }: { children: React.ReactNode }) {
 
    const [headerOpen, setHeaderOpen] = useState(false)
    const [bodyOpen, setBodyOpen] =useState(false)
const [footerOpen, setFooterOpen] =useState(false)

const navigate  = useNavigate()
  
        return (
            <PortfolioContext.Provider
                value={{
                  
                }}
            >
                {children}
            </PortfolioContext.Provider>
        )
    }
  

export default PortfolioContext
