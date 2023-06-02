import { useState } from 'react'
import './App.css'
import LoginForm from "./components/LoginForm";
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import BoardPage from "./pages/BoardPage";



function App() {
  const [count, setCount] = useState(0)
  return (<Routes>
    <Route path="/" element={<Login />} />
    <Route path="/BoardPage" element={<BoardPage />} />
  </Routes>);
}

export default App
