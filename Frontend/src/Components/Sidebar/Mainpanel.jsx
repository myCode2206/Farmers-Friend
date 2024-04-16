import { RecoilRoot } from "recoil";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import { useState } from "react";
const Mainpanel = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <div className="flex">
     <RecoilRoot>
      <Sidebar sidebarToggle={sidebarToggle} />
      <Dashboard
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />
      
      </RecoilRoot>
    </div>
  );
};

export default Mainpanel;
