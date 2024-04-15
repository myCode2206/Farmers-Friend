import "./App.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbarr from "./Components/Navbar/Navbarr";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbarr />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          {/* <Route path="/signup" element={<SignUp/>} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
