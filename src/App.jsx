import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NAV_BAR from './components/nav_bar/Nav_Bar';
import HOME from "./routes/home/Home";
import ITEM_DETAIL_CONTAINER from './components/item_detail_container/Item_Detail_Container';
import ITEM_LIST_CONTAINER from './components/item_list_container/Item_List_Container';
import CART from './components/cart/Cart';
import CHECKOUT from './components/checkout/Checkout';
import { CART_PROVIDER } from './context/Cart_Context';


function App() {

  return (
    <BrowserRouter>
      <CART_PROVIDER>
        {/* todo lo que este adentro del cart_provider puede ineteractuar con el context */}
        <NAV_BAR />
        <Routes>
          <Route exact path='/' element={<HOME />} />
          <Route exact path='/:category_id' element={<ITEM_LIST_CONTAINER />} />
          <Route exact path="/detail/:object_index" element={<ITEM_DETAIL_CONTAINER />} />
          <Route excat path="/hat" element={<CART />} />
          <Route exact path='/checkout' element={<CHECKOUT />}></Route>
        </Routes>
      </CART_PROVIDER>
    </BrowserRouter>
  )
};

export default App;
