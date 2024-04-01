import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
