import Navegation from "./components/NavegationComponent";
import Sidebar from "./components/SidebarComponent";
import Icon from "./components/IconComponent";


import { Outlet } from "react-router-dom";


function App() {
  return (
    <div className="h-screen bg-primary w-full flex">
      <Sidebar Icon={Icon} />
      <div className="text-white w-full">
        <Navegation Icon={Icon} />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
