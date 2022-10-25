import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import FoodDetails from "./Pages/FoodDetails/FoodDetails";
import Homepage from "./Pages/Homepage/Homepage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/food_details" element={<FoodDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
