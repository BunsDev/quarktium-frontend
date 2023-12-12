import { BrowserRouter, Routes, Route } from "react-router-dom"
import Landing from "./routes/Landing"
import "./styles/global.css"

function App() {

  return (
      <div className="global">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App