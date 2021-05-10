import React, { Component, useEffect, useState } from 'react'
import Header from "../../components/Header/Header";
import './Allproduct.css';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../actions/productsActions';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../../components/footer/Footer';


export default function Everyproduct(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const productList = useSelector((state) => state.productList);
    const { products, loading, error } = productList;




    useEffect(() => {
        dispatch(listProducts());
    }, [])

    const [qty, setQty] = useState(1);
    const [filter, setfilter] = useState(products);
    const addToCartHandler = (idvalue) => {

        console.log(`/cart/${idvalue._id}?qty=${qty}`);
        // <Link to={(`/cart/${idvalue._id}?qty=${qty}`)}></Link>
        history.push(`/cart/${idvalue._id}?qty=${qty}`);
    };

    // const addToCart=()=>{
    //    const id = this.props.product.id.toString();
    //    console.log(id);
    // }



    return (

        <div>


            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>{error}</div>
            ) : (
                <section className="products section">
                    { products.map((product) => (

                        <div key={product._id} className="product-card">
                            <Link to={`/product/${product._id}`}>
                                <div className="product-image">
                                    <img className="product-img product-img-ani" src={product.image} alt={product.image} />
                                </div></Link>
                            <button
                                // onClick={addToCart}
                                onClick={() => addToCartHandler(product)}
                                className="plus_but">+</button>

                            <Link to={`/product/${product._id}`}><div className="product-info">
                                <h5 className="pro-name">{product.name}</h5>
                                <h6 className="pro-price">₹{product.price}</h6> </div>
                            </Link>



                        </div>
                    ))


                    }






                </section>
            )}
            <div className="fo">
            {/* <Footer/> */}
            </div>
  
        </div>
    )
}
