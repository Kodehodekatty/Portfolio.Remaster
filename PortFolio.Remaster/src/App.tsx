
import { RoutesContainer } from './RouteContainer'
import { Background } from './components/background/background'
import { NavComponent } from './components/nav/Nav'



function App() {


  return (
    <div className='wrapper'>
        <NavComponent/>
     
      <RoutesContainer/>
      <Background/>
    </div>
  )
}

export default App
