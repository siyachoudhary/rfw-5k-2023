import './App.css';
import { MyNav } from './components/MyNav';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Impact } from './pages/Impact';
import { Team } from './pages/Team';
import { Route, Routes } from 'react-router-dom';
import {Registration} from './pages/Registration'

function App () {

  return (

    <div className = "App" >

      <MyNav />

      {/* <Routes>
        <Route path = "/rfw-5k-2023" element = {<Home/>}></Route>
        <Route path = "/rfw-5k-2023/impact" element = {<Impact/>}></Route>
        <Route path = "/rfw-5k-2023/team" element = {<Team/>}></Route>
      </Routes> */}

      <div>
        <Home/>
        <About/>
        <Impact />
        <Team />
        <Registration/>
      </div>

      <Footer />

    </div>

  );

}

export default App;
