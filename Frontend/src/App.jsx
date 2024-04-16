import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Chat from "./Components/ChatApp/Chat";
import Mainpanel from "./Components/Sidebar/Mainpanel";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/community" element={<Chat></Chat>}></Route>
          <Route path="/dashboard" element={<Mainpanel />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
