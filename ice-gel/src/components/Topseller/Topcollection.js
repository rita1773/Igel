import React, { Component } from 'react'
// import data from '../../data';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../actions/productsActions';

import 'swiper/swiper-bundle.css';
import './Topseller.css';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);



export default function Topseller(props) {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { products, loading, error } = productList;
    useEffect(() => {
        dispatch(listProducts());
    }, [])

    return (
        <div className="contenttop">
           <h3 className="padd-rl collh">{props.heading}</h3>
              {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>{error}</div>
            ) : (
            <Swiper

                spaceBetween={50}
                slidesPerView={4}
                centeredSlides={true}
                centeredSlidesBounds={true}
                breakpoints={{
                    // when window width is >= 640px
                    640: {
                        
                      
                        spaceBetween:50,
                      slidesPerView: 4,
                    },
                    // when window width is >= 768px
                    200: {
                        spaceBetween:20,
                        loop:true,
                      slidesPerView: 2,
                    //   centeredSlides:false,
                    },
                  }}
                loop={true}
                // autoplay={{ delay: 10 }}
                // autoplay= {
                //     delay= 5000
                //   }
                navigation
                >


                <div className="swiper-container" >
                    <div className="swiper-wrapper">

                        {products.filter(product => product.category === props.filter).map(topseller => (
                            <SwiperSlide><Link to={`/product/${topseller._id}`} key={topseller._id}>

                                <div className="prod-card swiper-slide">
                                    <div className="prod-imag product-img-ani">
                                        <img className="prod-img" src={topseller.image} alt={topseller.image} />
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
