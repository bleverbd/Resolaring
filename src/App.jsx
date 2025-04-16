import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


function App() {
  

  return (
    <div>
    <div className="hidden xl:block">
    <Navbar/>
    </div>
    <main className="min-h-screen">
    <Outlet/>
    </main>
    <Footer/>
    </div>
  )
}

export default App
