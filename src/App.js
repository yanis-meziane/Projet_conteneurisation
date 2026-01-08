import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./main/main.jsx";
import Register from "./Register/register.jsx";
import Login from "./Login/login.jsx";
import HomePage from "./HomePage/HomePage.jsx";
import Admin from "./admin/admin.jsx"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/homepage' element={<HomePage />}/>
        <Route path='/Admin' element={<Admin />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;