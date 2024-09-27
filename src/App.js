import { BrowserRouter as Router, Route, Routes } 
from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Tasks from './pages/Tasks';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path= "/login" element={<Login/>}/>
        <Route path= "/register" element={<Register/>}/>
        <Route path= "/tasks" element={<Tasks/>}/>
      </Routes>

    </Router>
  );
}

export default App;
