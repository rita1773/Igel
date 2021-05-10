import React, { Component, useEffect, useState } from 'react'
import Header from "../../components/Header/Header";
import './Allproduct.css';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../actions/productsActions';
import { Link, useHistory } from 'react-router-dom';


export default function Gelpage(props) {
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
                <section className="products">
                    {products.filter(product => product.category === props.filter).map(p => (
                    // { products.map((product) => (

                        <div key={p._id} className="product-card">
                            <Link to={`/product/${p._id}`}>
                                <div className="product-image">
                                    <img className="product-img product-img-ani" src={p.image} alt={p.image} />
                                </div></Link>

                                <button
                                // onClick={addToCart}
                                onClick={() => addToCartHandler(p)}
                                className="plus_but">+</button>

                            <Link to={`/product/${p._id}`}><div className="product-info">
                                <h5 className="pro-name">{p.name}</h5>
                                <h6 className="pro-price">₹{p.price}</h6> </div>
                            </Link>
                           


                      
                        </div>
                    ))


                    }






                </section>
            )}

        </div>
    )
}
