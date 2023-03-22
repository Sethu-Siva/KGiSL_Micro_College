import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { NavBar } from './Components/Nav Bar/navBar';
import { HomePage } from './Components/Home Page/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={[<NavBar/>,<HomePage/>]}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;