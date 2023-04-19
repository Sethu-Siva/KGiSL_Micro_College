import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Navbar } from './Components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home';
import { Footer } from './Components/Footer';
import { Login } from './Components/Login';
import { Register } from './Components/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={[<Navbar/>,<Home/>,<Footer/>]}/>
        <Route path='/Login' element={[<Navbar/>,<Login/>,<Footer/>]}/>
        <Route path='/Register' element={[<Navbar/>,<Register/>,<Footer/>]}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;