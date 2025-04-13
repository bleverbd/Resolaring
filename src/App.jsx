import { Link, Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"


function App() {
  

  return (
    <div>
     <Navbar/>
    <Outlet/>
    <footer> Hello </footer>
    </div>
  )
}

export default App
