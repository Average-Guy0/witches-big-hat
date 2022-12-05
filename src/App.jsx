import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import NAV_BAR from './components/nav_bar/Nav_Bar';

function App() {
  return (
    <BrowserRouter>
      <NAV_BAR/>
      <Routes>
        <Route path='/'/>
        <Route path='/armas'/>
        <Route path='/armaduras'/>
        <Route path='/anillos'/>
        <Route path='/pociones'/>
        <Route path='/artefactos'/>
      </Routes>
    </BrowserRouter>
  )
};

export default App;
