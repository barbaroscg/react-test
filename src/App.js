import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Props1 from "./Props1"
import Vars1 from "./Vars1"
import Login from "./Login"
import Login2 from "./Login2"
import MyListLoop from "./MyListLoop"
import MyArray2D from "./MyArray2D"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/props1" element={ <Props1/> } />        
        <Route path="/vars1" element={ <Vars1/> } />                
        <Route path="/login" element={ <Login/> } />                        
        <Route path="/mylistloop" element={ <MyListLoop/> } />                                
        <Route path="/myarray2d" element={ <MyArray2D/> } />                                        
        <Route path="/login2" element={ <Login2/> } />                                
      </Routes>
    </div>
  )
}
export default App