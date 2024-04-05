import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import CartDetails from "./components/CartDetails";
import Headers from "./components/Headers";
import { Route, Routes } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Success from "./components/Success";
import Cancel from "./components/Cancel";

function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartDetails />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
