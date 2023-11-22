
import { useState } from 'react'
import { Route, Routes } from 'react-router'
import { NavComponent } from './components/nav/Nav'
import { AboutMe } from './pages/aboutMe/AboutMe'
import { Work } from './pages/work/Work'
import { Contact } from './pages/contact/Contact'

function App() {

  

  return (
    <div>
    <div className='min-h-screen flex justify-center items-start p-12  '>
    <div className='grid grid-cols-8 my-auto grid-rows-1 col-start-2 col-end-8 bg-[url("src/assets/images/vscbackground.png")] min-h-screen  bg-no-repeat bg-contain '>
      <NavComponent />
   
        <div className='col-span-5 rounded-xl'>
       
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
