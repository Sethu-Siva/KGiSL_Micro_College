import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Menu } from './Menu';
import { Hello } from './Components/Task - 1 Hello World/Hello World';
import { Congrat } from './Components/Task - 2 Congrats Card/Congrats';
import { League } from './Components/Task - 3 Super Over League/Super League'
import { SocialButtons } from './Components/Task - 4 Social Buttons/Social Buttons';
import { Notifications } from './Components/Task - 5 Notification Application/Notification Application';
import { LoginDesign } from './Components/Task - 6 Login Design/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Menu/>}/>
            <Route path='/Hello' element={[<Menu/>,<Hello/>]}/>
            <Route path='/Congrat' element={[<Menu/>,<Congrat/>]}/>
            <Route path='/League' element={[<Menu/>,<League/>]}/>
            <Route path='/SocialButtons' element={[<Menu/>,<SocialButtons/>]}/>
            <Route path='/Notifications' element={[<Menu/>,<Notifications/>]}/>
            <Route path='/LoginDesign' element={[<Menu/>,<LoginDesign/>]}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;