import { Outlet } from "react-router-dom";
import DashNavbar from "./components/dasboard/DashNavbar";
import Text from "./components/dasboard/Text";

function Dashboard() {
  return (
    <div className="xl:flex ">
      <div className="w-[351px]">
        <DashNavbar/>
      </div>
      <div>
        <Text />
      </div>
      <div className="h-screen overflow-y-auto w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
