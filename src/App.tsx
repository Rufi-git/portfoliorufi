import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./screens/Home"
import Navbar from "./components/Navbar"


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
