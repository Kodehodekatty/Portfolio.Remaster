
import { Route, Routes } from 'react-router'
import { NavComponent } from './components/nav/Nav'
import { AboutMe } from './pages/aboutMe/AboutMe'
import { Work } from './pages/work/Work'
import { Contact } from './pages/contact/Contact'
import { PortfolioContextProvider } from './context/PortfolioContext'
import Layout from './pages/Layout'

function App() {

  

  return (
    <PortfolioContextProvider>
    
    <div className='min-h-screen flex justify-center items-start p-12  '>
    <div className='grid grid-cols-7 my-auto  bg-[url("src/assets/images/vscbackground.png")] min-h-screen  bg-no-repeat bg-contain '>
      <NavComponent />
   
        <div className='col-span-5 min-h-screen rounded-xl'>
       
          <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/AboutMe' element={
          <AboutMe/>
            }/>
            <Route path='/Work' element={ <Work/>} />
            <Route path='/Contact' element={
              <Contact
              />}/>
                   </Route>

          </Routes>
          </div>
      </div>
    </div>
    
    </PortfolioContextProvider>
  )
}

export default App
