import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
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
            <Route path='/' element={<Hello/>}/>
            <Route path='/Congrate' element={<Congrat/>}/>
        </Routes>
      </BrowserRouter>
      <Hello/>
      <Congrat/>
      <League/>
      <SocialButtons/>
      <Notifications/>
      <LoginDesign/>
    </>
  );
}

export default App;