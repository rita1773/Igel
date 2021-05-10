import React from 'react'
import './CartScreen.css';
import Header from '../../components/Header/Header';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../actions/cartActions';
import Footer from '../../components/footer/Footer';
export default function CartScreen(props) {

    const productId = props.match.params.id;
    const qty = props.location.search
        ? Number(props.location.search.split('=')[1])
        : 1;

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);

    const removeFromCartHandler = (id) => {
        // delete action
        dispatch(removeFromCart(id));
    };

    const checkoutHandler = () => {
        props.history.push('/signin?redirect=shipping');
    };

    return (
        <div>
            <Header />
            <div className="cartgrid sectioncart">
                <div className="">
                    <h4 className="carth">Shopping Cart</h4>
                    {cartItems.length === 0 ? (

                        <Link to="/shop">Go Shopping</Link>

                    ) : (
                        <ul>
                            {cartItems.map((item) => (
                                <li key={item.product} className="car-alt">
                                    <div className="cartrow">
                                        <div className="placecenter">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="small"
                                            ></img>
                                        </div>
                                        <div className="min-30 placecenter">
                                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                                        </div>
                                        <div className="placecenter quantity">
                                            <input type="number"
                                                min="1"
                                                max={item.countInStock}
                                                value={item.qty}
                                                onChange={(e) =>
                                                    dispatch(
                                                        addToCart(item.product, Number(e.target.value))
                                                    )
                                                }></input>
                                            {/* <select
                                                value={item.qty}
                                                onChange={(e) =>
                                                    dispatch(
                                                        addToCart(item.product, Number(e.target.value))
                                                    )
                                                }
                                            >
                                                {[...Array(item.countInStock).keys()].map((x) => (
                                                    <option key={x + 1} value={x + 1}>
                                                        {x + 1}
                                                    </option>
                                                ))}
                                            </select> */}
                                        </div>
                                        <div className="placecenter">₹{item.price}</div>
                                        <div className="placecenter">
                                        <i class="fas fa-trash-alt"></i>
                                            <button
                                            className="iconbut fontfive"
                                                type="button"
                                                onClick={() => removeFromCartHandler(item.product)}
                                            >
                                               <i class="fa fa-trash-o"></i>

                    </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul className="subtotal">
                            <li>
                                <h2>
                                    Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : ₹
                {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                                </h2>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    onClick={checkoutHandler}
                                    className="primary block herobut"
                                    disabled={cartItems.length === 0}
                                >
                                    Buy Now
              </button>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    )
}
