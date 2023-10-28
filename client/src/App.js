import { Route, Routes } from "react-router-dom";
import Login from "../src/Pages/Login/Login.js";
import Home from "./Pages/Home/Home.js";
import Signup from "./Pages/Signup/Signup.js";


function App() {
  return (
    <div className="App">
   <Routes>

<Route path="/" element={<Home/>}></Route>
<Route path="/login" element={<Login/>}></Route>
<Route path="/signup" element={<Signup/>}></Route>
   </Routes>
    </div>
  );
}

export default App;
