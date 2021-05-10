import React, { useEffect, useState } from 'react'
import { detailsProduct } from '../../actions/productsActions';
import Rating from '../Rating/Rating';
import './Product.css';
import Header from "../../components/Header/Header";
import Topseller from '../Topseller/Topseller';
import { useDispatch, useSelector } from 'react-redux';
import Topcollection from '../Topseller/Topcollection';
import Footer from '../../components/footer/Footer'



export default function Product(props) {



    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const [qty, setQty] = useState(1);
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(detailsProduct(productId));
    }, [dispatch, productId]);

    const addToCartHandler = () => {
        props.history.push(`/cart/${productId}?qty=${qty}`);
    };

    const decqty = () => {

        if (qty == 1) {
            setQty(qty)

        }
        if (qty < 1) {
            setQty(qty + 1)

        }
        if (qty > 1) {
            setQty(qty - 1)

        }
    }


    const incqty = () => {

        if (qty == product.countInStock) {
            setQty(qty)

        }
        else {
            setQty(qty + 1)
        }

    }

    return (
        <div class="p_outer">
            <Header />
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>{error}</div>
            ) : (
                <div className="sec_color">
                <div className="section sec_color">
                    <div className="row">
                        <div className="col-1">
                            <h3 className="prod-name">{product.name}</h3>
                            {(product.collections === "Topselling") ? <p className="paddfive red">{`#${product.collections}`}</p> : null}

                        </div>
                        <div className="col-2">
                            <img className="large anim-img" src={product.image} alt={product.name}></img>
                        </div>
                        <div className="col-3">
                            <div className="col-3-wrapper">
                                <li className="col-3-des paddfive">{product.description}</li>
                                <li>
                                    <Rating
                                        rating={product.rating}
                                        numReviews={product.numReviews}
                                    ></Rating></li>
                                <li className="col-3-price paddfive">₹{product.price}</li>
                                {/* <div>Status</div> */}
                                <div>

                                    {product.countInStock > 0 ? (
                                        <span className="success"></span>
                                    ) : (
                                        <span className="danger paddfive">Unavailable</span>
                                    )}
                                </div>
                                <div className="add-qua paddfive">
                                    {product.countInStock > 0 && (
                                        <div className="addq">

                                            <li className="cartbutqua">
                                                <div className="floatleft">
                                                    <button
                                                        onClick={addToCartHandler}
                                                        className="primary block probut"
                                                    >
                                                        Add to Cart
                        </button>
                                                </div>
                                                <div className="floatleft">
                                                    {/* <div>Qty</div> */}
                                                    <div className="qua">
                                                    <button onClick={decqty} className="quab">-</button>
                                                       
                                                        <span>{qty}</span>
                                                        <button onClick={incqty} className="quab">+</button>
                                                    
                                                    </div>
                                                </div>

                                            </li>

                                            <li>

                                            </li>
                                        </div>
                                    )}</div>

                            </div>
                        </div>
                    </div>
                </div>
                </div>
            )}
            
            <Topseller heading="Top Seller" filter="Topselling" />
            {/* <Topcollection/> */}
            <Topcollection heading="Gelato" filter="Gelato" />
                    <Topcollection heading="Icepops" filter="Icepops" />



<Footer/>
        </div>



    )
}
