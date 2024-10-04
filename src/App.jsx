

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
        <Route path="/modes/meditate" element={<MyHeadspace title="Meditate"/>}/>
        <Route path="/modes/focus" element={<MyHeadspace title="Focus"/>}/>

      </Routes>
      </BrowserRouter>
      
        
    </>
  )
}

export default App
