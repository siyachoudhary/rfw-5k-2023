import './App.css';
import { MyNav } from './components/MyNav';
import { Home } from './pages/Home';
import { Impact } from './pages/Impact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App () {

  return (

    <div className = "App">

      <MyNav />

      <BrowserRouter>

        <Routes>

          <Route path = "/rfw-5k-2023/" element={<Home/>}></Route>
          <Route path = "/rfw-5k-2023/impact" element={<Impact/>}></Route>

        </Routes>

      </BrowserRouter>
      

    </div>

  );

}

export default App;
