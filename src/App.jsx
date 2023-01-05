import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import NAV_BAR from './components/nav_bar/Nav_Bar';
import  HOME  from "./routes/home/Home";
import ITEM_DETAIL_CONTAINER from './components/item_detail_container/Item_Detail_Container';
import ITEM_LIST_CONTAINER from './components/item_list_container/Item_List_Container';
import CART from './components/cart/Cart';


function App() {
  return (
    <BrowserRouter>
      <NAV_BAR/>
      <Routes>
        <Route exact path='/' element={<HOME/>} />
        <Route exact path='/:category_id' element={<ITEM_LIST_CONTAINER/>} />
        <Route exact path="/detail/:object_index" element={<ITEM_DETAIL_CONTAINER/>} />
        <Route excat path="/cart" element={<CART/>} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
