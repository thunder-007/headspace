

import './App.css'
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import MyHeadspace from './pages/MyHeadspace'


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/my_music" element={<MyHeadspace title="Meditate"/>}/>

      </Routes>
      </BrowserRouter>
      
        
    </>
  )
}

export default App
