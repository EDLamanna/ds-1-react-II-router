import NavBar from "./components/NavBar"
import { BrowserRouter } from 'react-router-dom'
import Rutas from "./routes/Index"

const App = () => {

  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Rutas />
    </BrowserRouter>
    </>
  )
}

export default App
