import React, { Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useHistory } from "react-router-dom";
import Home from '../../pages/Home';
import './Header.css';
import { signout } from '../../actions/userActions';


function App() {
  const history = useHistory();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
    history.push(`/shop`);

  };
  return (
    <div className="head  headert">

      <div>
      <NavLink to="/" className="logo">
          IGel
            </NavLink>
      </div>

      <div className="nav-toggle">
        <div className="nav-toggle-bar"></div>
      </div>

      <nav id="nav" className="nav">
        <ul>
         
         
          <li className="main_li"><Link to="/cart" className="left">
          {/* <i className="bx bx-cart-alt"></i> */} Cart
                    {cartItems.length > 0 && (
              <span className="badge">{cartItems.length}</span>
            )}


          </Link></li>
          <li  className="left">
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/profile">User Profile</Link>
                  </li>
                  <li>
                    <Link to="/orderhistory">Order History</Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>

            ) : (
                <Link to="/signin" className="left">Sign In</Link>
              )}

            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin" className="left">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  
                </ul>
              </div>
            )}
          </li>
          <li className="main_li"><Link to="/shop" className="left">Shop</Link></li>
        </ul>
      </nav>
    </div>
  )
}
export default App;
