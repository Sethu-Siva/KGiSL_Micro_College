import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { HomePage } from './Components/Home/Home';
import { NavigationBar } from './Components/Nav Bar/NavigationBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './Components/Footer/Footer';
import { About } from './Components/About/About';
import { Resume } from './Components/Resume/Resume';
import { Skills } from './Components/Skills/Skills';

function App()
{
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavigationBar/>}/>
          <Route path='/Sethu-Siva' element={[<NavigationBar/>,<HomePage/>,<Resume/>,<About/>,<Skills/>,<Footer/>]}/>
          <Route path='/Sethu-Siva/About' element={[<NavigationBar/>,<About/>,<Footer/>]}/>
          <Route path='/Sethu-Siva/Skills' element={[<NavigationBar/>,<Skills/>,<Footer/>]}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;