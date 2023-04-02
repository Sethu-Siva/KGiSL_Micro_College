import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { HomePage } from './Components/Home Page/Home';
import { NavigationBar } from './Components/Nav Bar/NavigationBar';

function App()
{
  return (
    <>
      <NavigationBar/>
      <HomePage/>
    </>
  );
}

export default App;