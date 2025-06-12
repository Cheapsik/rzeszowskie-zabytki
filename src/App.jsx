import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Monument from "./pages/Monument";

const App = () => {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/zabytek/:id" element={<Monument />} />
      </Routes>
    </HashRouter>
  )
}

export default App;