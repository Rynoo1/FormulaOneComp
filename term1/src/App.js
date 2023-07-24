import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing';
import Time from './Pages/Time';
import Compare from './Pages/Compare';
import BasicNavbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App lightbg">
      <BasicNavbar/>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/timeline' element={<Time/>}/>
        <Route path='/compare' element={<Compare/>}/>
      </Routes>
    </div>
  );
}

export default App;
