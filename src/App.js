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

          <Route path = "/rfw-5k-2023/home" element = {<Home/>}></Route>
          <Route path = "/rfw-5k-2023/impact" element = {<Impact/>}></Route>
          <Route path = "/rfw-5k-2023/team" element = {<Team/>}></Route>

        </Routes>

    </div>

  );

}

export default App;
