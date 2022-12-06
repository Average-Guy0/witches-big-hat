import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import NAV_BAR from './components/nav_bar/Nav_Bar';
import  HOME  from "./routes/home/Home";


function App() {
  return (
    <BrowserRouter>
      <NAV_BAR/>
      <Routes>
        <Route exact path='/' element={<HOME/>} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
