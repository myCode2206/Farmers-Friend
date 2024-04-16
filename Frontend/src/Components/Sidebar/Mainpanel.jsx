import Dashboard from "./Dashboard"
import Sidebar from "./Sidebar"
import { useState } from "react"
const Mainpanel = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <div className="flex">
        <Sidebar sidebarToggle={sidebarToggle}/>
        <Dashboard 
        sidebarToggle={sidebarToggle} 
        setSidebarToggle={setSidebarToggle}
        />
    </div>
  )
}

export default Mainpanel