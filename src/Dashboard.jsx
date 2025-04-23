import { Outlet } from "react-router-dom";
import DashNavbar from "./components/dasboard/DashNavbar";


function Dashboard() {
  return (
    <div className="flex gap-10"> 
        <DashNavbar /> 
        <Outlet />

    </div>
  );
}

export default Dashboard;
