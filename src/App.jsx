import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./Components/Home";
import AddData from "./Components/AddData";
import Header from "./Components/Header";
import EditData from "./Components/EditData";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddData />} />
        <Route path="/edit/:id" element={<EditData />} />
      </Routes>
    </>
  );
}

export default App;