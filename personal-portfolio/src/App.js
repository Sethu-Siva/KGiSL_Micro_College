import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { HomePage} from './Components/Home';
import { NavigationBar } from './Components/NavigationBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './Components/Footer';
import { About } from './Components/About';
import { Resume } from './Components/Resume';
import { Skills } from './Components/Skills';
import { Certificates } from './Components/Certificates';


function App()
{
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavigationBar/>}/>
          <Route path='/Sethu-Siva' element={[<NavigationBar/>,<HomePage/>,<Resume/>,<About/>,<Skills/>,<Certificates/>,<Footer/>]}/>
          <Route path='/Sethu-Siva/About' element={[<NavigationBar/>,<About/>,<Footer/>]}/>
          <Route path='/Sethu-Siva/Skills' element={[<NavigationBar/>,<Skills/>,<Footer/>]}/>
          <Route path='/Sethu-Siva/Certificates' element={[<NavigationBar/>,<Certificates/>,<Footer/>]}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;