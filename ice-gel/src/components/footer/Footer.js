import React from 'react'
import './Footer.css'
import { Link, NavLink, useHistory } from "react-router-dom";
export default function Footer() {
    return (
        <div>
            <div className="foot">


                <div className="foot1">
                    <NavLink to="/" className="logo colo">
                        IGel
            </NavLink>
                    <p>
                        @2021 IGel

    </p>

                </div>

                <div className="foot2">
                    <h6>Menu</h6>
                    <NavLink to="/" className="b">
                        Home
            </NavLink>
                    <li className="main_li"><Link to="/shop">Shop</Link></li>

                </div>
                <div className="foot3">
                    <h6>Connect</h6>
                    <div>
                        <li className="main_li"><Link to="/shop">Facebook</Link></li>
                        <li className="main_li"><Link to="/shop">Instagram</Link></li>
                        <li className="main_li"><Link to="/shop">Twitter</Link></li>


                    </div>

                </div>




            </div>
        </div>
    )
}
