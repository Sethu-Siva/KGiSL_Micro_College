import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { HomePage } from './Components/Home Page/Home';
import { NavigationBar } from './Components/Nav Bar/NavigationBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App()
{
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavigationBar/>}/>
          <Route path='/Sethu-Siva' element={[<NavigationBar/>,<HomePage/>]}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;