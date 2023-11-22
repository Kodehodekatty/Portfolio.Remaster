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
            <div className="min-h-screen flex">
                <div className="grid grid-cols-[1fr,_5fr] m-auto max-w-[1700px] px-8">
                    <NavComponent />
                    <div className='rounded-xl bg-[url("src/assets/images/Navbackground.png")] bg-no-repeat bg-cover'>
                        <Routes>
                            <Route path="/" element={<Layout />}>
                                <Route path="/AboutMe" element={<AboutMe />} />
                                <Route path="/Work" element={<Work />} />
                                <Route path="/Contact" element={<Contact />} />
                            </Route>
                        </Routes>
                    </div>
                </div>
            </div>
        </PortfolioContextProvider>
    )
}

export default App
