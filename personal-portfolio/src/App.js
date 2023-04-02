import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { NavBar } from './Components/Nav Bar/navBar';
import { HomePage } from './Components/Home Page/Home';

function App()
{
  return (
    <>
      <NavBar/>
      <HomePage/>
    </>
  );
}

export default App;