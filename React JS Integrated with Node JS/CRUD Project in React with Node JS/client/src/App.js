import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Home } from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AddCustomer } from './Components/AddCustomer';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/AddCustomer' element={<AddCustomer/>}/>
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;