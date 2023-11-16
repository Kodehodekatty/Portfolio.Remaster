
import { useState } from 'react'
import { Route, Routes } from 'react-router'
import { NavComponent } from './components/nav/Nav'
import { AboutMe } from './pages/aboutMe/AboutMe'
import { Work } from './pages/work/Work'
import { Contact } from './pages/contact/Contact'

function App() {
  const [headerOpen, setHeaderOpen] = useState(false)
  

  return (
    <div className='min-h-screen flex justify-center items-start p-12'>
    <div className='grid grid-cols-6 max-w-[1800px] my-auto'>
      <NavComponent />
      <div className='bg-[url("src/assets/images/VSCsidebar.png")] col-span-5 grid grid-cols-4 rounded-xl'>
        <div>
      

        </div>
        <div className='col-span-3 rounded-xl'>
          {headerOpen && <div></div>}
          <Routes>
            <Route path='/AboutMe' element={
          <AboutMe/>
            }/>
            <Route path='/Work' element={ <Work/>} />
            <Route path='/Contact' element={
              <Contact
              />}/>
          </Routes>
          </div>
      </div>
    </div>
    </div>
  )
}

export default App
