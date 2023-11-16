
import { useState } from 'react'
import { Route, Routes } from 'react-router'
import { NavComponent } from './components/nav/Nav'
import { AboutMe } from './pages/aboutMe/AboutMe'
import { Work } from './pages/work/Work'
import { Contact } from './pages/contact/Contact'

function App() {
  const [headerOpen, setHeaderOpen] = useState(false)

  return (
    <div className='bg-red-600 grid grid-cols-4 '>
      <NavComponent />
      <div className='bg-[url("")] col-span-3 grid grid-cols-4'>
        <div>VSCode sidebat</div>
        <div className='col-span-3' >
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
  )
}

export default App
