import React, { useState, useEffect }  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Home from './pages/Home';
import Allproduct from './pages/ShopPage/Allproduct';
import Product from './components/Product/Product';
import CartScreen from './pages/Cart/CartScreen';
import ScrollToTop from './ScrollToTop';
import SigninScreen from './pages/signin/SigninScreen';
import RegisterScreen from './pages/signin/RegisterScreen';
import ShippingAddressScreen from './pages/ShippingAddressScreen';
import PaymentMethodScreen from './pages/PaymentMethodScreen';
import PlaceOrderScreen from './pages/PlaceOrderScreen';
import OrderScreen from './pages/OrderScreen';
import OrderHistoryScreen from './pages/OrderHistoryScreen';
import ProfileScreen from './pages/ProfileScreen';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import ProductListScreen from './pages/ProductListScreen';
import ProductEditScreen from './pages/ProductEditScreen';
import OrderListScreen from './pages/OrderListScreen';


function App() {

  // const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 })
  // useEffect(() => {
  //   const moveCursor = (e) => {
  //     const x = e.clientX - 6
  //     const y = e.clientY - 6
  //     setCursorXY({ x, y })
  //   }
  //   window.addEventListener('mousemove', moveCursor)
  //   return () => {
  //     window.removeEventListener('mousemove', moveCursor)
  //   }
  // }, [])

  return (

    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
     
        <Switch>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/shop">
            <Allproduct />

          </Route>
          <Route path="/product/:id" component={Product} exact></Route>
          <Route
            path="/product/:id/edit"
            component={ProductEditScreen}
            exact
          ></Route>
          {/* <Route path="/product/id" component={Product} exact></Route> */}
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/order/:id" component={OrderScreen}></Route>
          <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
          <PrivateRoute
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>

          <AdminRoute
            path="/productlist"
            component={ProductListScreen}
          ></AdminRoute>
            <AdminRoute
            path="/orderlist"
            component={OrderListScreen}
          ></AdminRoute>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>

    </BrowserRouter>


  );
}

export default App;
