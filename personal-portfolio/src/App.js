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
import { Projects } from './Components/Projects';


function App()
{
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={[<NavigationBar/>,<HomePage/>,<Resume/>,<About/>,<Skills/>,<Projects/>,<Certificates/>,<Footer/>]}/>
          <Route path='#About_Me' element={[<NavigationBar/>,<About/>,<Footer/>]}/>
          <Route path='#Skills' element={[<NavigationBar/>,<Skills/>,<Footer/>]}/>
          <Route path='#Certificates' element={[<NavigationBar/>,<Certificates/>,<Footer/>]}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;