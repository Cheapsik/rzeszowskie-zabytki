import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Monument from "./pages/Monument";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/zabytek/:id" element={<Monument />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;