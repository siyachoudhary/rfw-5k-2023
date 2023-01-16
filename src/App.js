import './App.css';
import { MyNav } from './components/MyNav';
import { Home } from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App () {

  return (
    <div className = "App">
      <MyNav></MyNav>
      <BrowserRouter>
        <Routes>
          <Route path='/rfw-5k-2023/' element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  );

}

export default App;
