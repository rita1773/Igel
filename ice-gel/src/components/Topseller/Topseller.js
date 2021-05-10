import React, { Component } from 'react'
// import data from '../../data';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../actions/productsActions';

import 'swiper/swiper-bundle.css';
import './Topseller.css';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);



export default function Topseller(props) {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { products, loading, error } = productList;
    useEffect(() => {
        dispatch(listProducts());
    }, [])

    return (
        <div className="content">
<h1 className="padd-rl">{props.heading}</h1>
              {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>{error}</div>
            ) : (
            <Swiper

                spaceBetween={50}
                slidesPerView={4}
                centeredSlides={true}
                breakpoints={{
                    // when window width is >= 640px
                    640: {
                   
                      slidesPerView: 4,
                      spaceBetween:50,
                    },
                    // when window width is >= 768px
                    200: {
                        
                      slidesPerView: 1,
                    },
                  }}
                // centeredSlidesBounds={true}
                navigation
                pagination={{ clickable: true }}
                >


                <div className="swiper-container" >
                    <div className="swiper-wrapper">

                        {products.filter(product => product.collections === props.filter).map(topseller => (
                            <SwiperSlide><Link to={`/product/${topseller._id}`} key={topseller._id}>

                                <div className="prod-card swiper-slide">
                                    <div className="prod-image">
                                        <img className="prod-img product-img-ani" src={topseller.image} alt={topseller.image} />
                                    </div>
                                </div>

                            </Link>
                            </SwiperSlide>

                        )


                        )
                        }

                    </div>

                    < div className="swiper-pagination" ></div>

                </div >

            </Swiper>
             )}
        </div>

    )

}
