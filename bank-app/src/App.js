import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import Dashboard from './components/Dashboard';

function App() {

  const accounts = JSON.parse(localStorage.getItem("accounts")) || [];

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Form accounts={accounts}/>}/>
      <Route path="/dashboard" element={<Dashboard accounts={accounts}/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
