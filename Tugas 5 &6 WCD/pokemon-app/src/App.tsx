import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import OnePokemon from "./pages/OnePokemon";
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header /> 
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/pokemon/:name" element={<OnePokemon />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}
