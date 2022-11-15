import './App.css';
import Cart from './components/Cart';
import Home from './components/Home.js';
import Layout from './components/Layout.js';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/ThyPerfume2022/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/ThyPerfume2022/cart" element={<Cart/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
