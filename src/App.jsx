import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<Home />} />
        {/* <Route path="/faq" element={<FAQ />} />
        <Route path="/fund" element={<Fund />} /> */}

      </Routes>


    </>
  );
}

export default App;
