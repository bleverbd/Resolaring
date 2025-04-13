import { Link, Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"


function App() {
  

  return (
    <div>
     <Navbar/>
    <main className="min-h-screen">
    <Outlet/>
    </main>
    <footer> Footer </footer>
    </div>
  )
}

export default App
