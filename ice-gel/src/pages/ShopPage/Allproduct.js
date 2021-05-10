import React, { Component, useEffect, useState } from 'react'
import Header from "../../components/Header/Header";
import './Allproduct.css';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../actions/productsActions';
import { Link, useHistory } from 'react-router-dom';
import Everyproduct from './Everyproduct'
import Gelpage from './Gelpage'
import Footer from '../../components/footer/Footer'



export default function Allproduct(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const productList = useSelector((state) => state.productList);
    const { products, loading, error } = productList;

    const filteroption = '';



    useEffect(() => {
        dispatch(listProducts());
    }, [])

    const [qty, setQty] = useState(1);
    const [filter, setfilter] = useState(<Everyproduct />);
    const addToCartHandler = (idvalue) => {

        console.log(`/cart/${idvalue._id}?qty=${qty}`);
        // <Link to={(`/cart/${idvalue._id}?qty=${qty}`)}></Link>
        history.push(`/cart/${idvalue._id}?qty=${qty}`);
    };

    const shopfilter = (filteroptio) => {

        switch (filteroptio) {
            case 'all':
                // console.log(filteroptio);
                return setfilter(<Everyproduct/>);
                break;
            case 'gelato':
                return setfilter(<Gelpage filter='Gelato'/>);
                break;
                case 'icepops':
                    return setfilter(<Gelpage filter='Icepops'/>);
                    break;
            default:
                return <Everyproduct />;
        }

    }

    // };


    return (

        <div >

            <Header />

            <div className="sectiont">
                <h3 className="sectionh">Discover Our Products</h3>
                <div className="fil">
                <button onClick={() => shopfilter("all")} className="shopb">ALL</button>
                {/* <button onClick={<Everyproduct/>}>ALL</button> */}

                <button onClick={() => shopfilter("gelato")} className="shopb">GELATO</button>
                <button onClick={() => shopfilter("icepops")} className="shopb">ICE POPS</button></div>
            </div>
            {/* <Everyproduct /> */}
            {filter}
          
        </div>
        
    )
}
