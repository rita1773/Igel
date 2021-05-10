
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';
import Header from "../components/Header/Header";

export default function ShippingAddressScreen(props) {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;
    const re = /^[0-9\b]+$/;

    if (!userInfo) {
        props.history.push('/signin');
    }

    const [fullName, setFullName] = useState(shippingAddress.fullName);
    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [country, setCountry] = useState(shippingAddress.country);
    const dispatch = useDispatch();
    
    const submitHandler = (e) => {
        e.preventDefault();

        if (/[^a-zA-Z -]/.test(fullName)) {
            alert('Invalid characters in name field');

        }
        else if (fullName.trim().length < 3) {
            alert('Name Needs atleast 3 characters');

        }
        else if (address.trim().length < 10) {
            alert('Address Needs atleast 10 characters');
        }
        else if (city.trim().length < 3) {
            alert('City needs atleast 3 valid characters');
        }
        else if (/[^a-zA-Z -]/.test(city)) {
            alert('City must contain only letters');
        }

        else if (!/[^a-zA-Z -]/.test(postalCode) ) {
            alert('Postal code must contain only numbers');
        }
        else if (postalCode.trim().length < 6 ) {
            alert('Postal code must contain atleast 6 numbers');
        }
        else if (/[^a-zA-Z -]/.test(country)) {
            alert('Country must contain only letters');
        }


        else if (country.trim().length < 5) {
            alert('Country must contain only 5 characters');
        }

        else {
            dispatch(
                saveShippingAddress({ fullName, address, city, postalCode, country })
            );
            props.history.push('/payment');
        }
    };


    return (
        <div>
            <Header />
            <div className="section">
            <CheckoutSteps step1 step2></CheckoutSteps>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Shipping Address</h1>
                </div>
                <div>
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        placeholder="Enter full name"
                        value={fullName}
                        maxLength="20"
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    ></input>
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        id="address"
                        placeholder="Enter address"
                        value={address}
                        maxLength="40"
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    ></input>
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        id="city"
                        placeholder="Enter city"
                        value={city}
                        maxLength="20"
                        onChange={(e) => setCity(e.target.value)}
                        required
                    ></input>
                </div>
                <div>
                    <label htmlFor="postalCode">Postal Code</label>
                    <input
                        type="text"
                        id="postalCode"
                        placeholder="Enter postal code"
                        value={postalCode}
                        maxLength="20"
                        onChange={(e) => setPostalCode(e.target.value)}
                        required
                    ></input>
                </div>
                <div>
                    <label htmlFor="country">Country</label>
                    <input
                        type="text"
                        id="country"
                        placeholder="Enter country"
                        value={country}
                        maxLength="20"
                        onChange={(e) => setCountry(e.target.value)}
                        required
                    ></input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">
                        Continue
          </button>
                </div>
            </form>
            </div>
        </div>
    );
}