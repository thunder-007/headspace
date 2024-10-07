

import './App.css'
import {BrowserRouter, Routes,Route,Navigate} from "react-router-dom"
import Home from './pages/Home'
import MyHeadspace from './pages/MyHeadspace'
import Login from "./components/Login.jsx";
import Logout from "./components/Logout.jsx";


function App() {
    var userName = localStorage.getItem('userName');
    if (!userName) {
        userName = false;
    }


    return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route
              path="/my_music"
              element={userName ? <MyHeadspace title="Meditate" /> : <Navigate to="/" />}
          />
          <Route
              path="/logout"
              element={userName ? <Logout /> : <Navigate to="/" />}
          />
          <Route path="/login" element={<Login />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
