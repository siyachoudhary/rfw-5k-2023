import './App.css';
import { MyNav } from './components/MyNav';
import { Home } from './pages/Home';
import { Impact } from './pages/Impact';
import { Team } from './pages/Team';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';

function App () {

  return (

    <div className = "App">

      <MyNav />

      {/* <BrowserRouter> */}

      <HashRouter>

        <Routes>

          <Route path = "/rfw-5k-2023/" element = {<Home/>}></Route>
          <Route path = "/rfw-5k-2023/impact" element = {<Impact/>}></Route>
          <Route path = "/rfw-5k-2023/team" element = {<Team/>}></Route>

        </Routes>

      </HashRouter>

      {/* </BrowserRouter> */}

    </div>

  );

}

export default App;
