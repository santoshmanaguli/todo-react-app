import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
