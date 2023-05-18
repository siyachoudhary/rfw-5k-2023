import './App.css';
import { MyNav } from './components/MyNav';
import { Home } from './pages/Home';
import { Impact } from './pages/Impact';
import { Team } from './pages/Team';
import { Route, Routes } from 'react-router-dom';

function App () {

  return (

    <div className = "App">

      <MyNav />

        <Routes>

          <Route path = "/home" element = {<Home/>}></Route>
          <Route path = "/impact" element = {<Impact/>}></Route>
          <Route path = "/team" element = {<Team/>}></Route>

        </Routes>

    </div>

  );

}

export default App;
