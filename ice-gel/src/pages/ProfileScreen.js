import React, { useEffect, useState } from 'react';
import Header from "../components/Header/Header";

import { useDispatch, useSelector } from 'react-redux';
import { detailsUser, updateUserProfile } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { USER_UPDATE_PROFILE_RESET } from '../Constants/userConstants';

export default function ProfileScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;

    const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
    const {
        success: successUpdate,
        error: errorUpdate,
        loading: loadingUpdate,
    } = userUpdateProfile;

    const dispatch = useDispatch();
    useEffect(() => {
        if (!user) {
            dispatch({ type: USER_UPDATE_PROFILE_RESET });
            dispatch(detailsUser(userInfo._id));
        } else {
            setName(user.name);
            setEmail(user.email);
        }
    }, [dispatch, userInfo._id, user]);

    const submitHandler = (e) => {
        e.preventDefault();
        // dispatch update profile
        if (password !== confirmPassword) {
            alert('Password and Confirm Password Are Not Matched');
        }
        else if (name.trim().length < 3) {
            alert('Name Needs atleast 3 characters');

        }
        else if (/[^a-zA-Z -]/.test(name)) {
            alert('Invalid characters in name field');

        }
        

        else {
            dispatch(updateUserProfile({ userId: user._id, name, email, password }));
        }
    };
    return (
        <div>
            <Header />
            <div className="outerdiv">
                <form className="form" onSubmit={submitHandler}>
                    <div>
                        <h1>User Profile</h1>
                    </div>
                    {loading ? (
                        <LoadingBox></LoadingBox>
                    ) : error ? (
                        <MessageBox variant="danger">{error}</MessageBox>
                    ) : (
                        <>
                            {loadingUpdate && <LoadingBox></LoadingBox>}
                            {errorUpdate && (
                                <MessageBox variant="danger">{errorUpdate}</MessageBox>
                            )}
                            {successUpdate && (
                                <MessageBox variant="success">
                                    Profile Updated Successfully
                                </MessageBox>
                            )}
                            <div>
                                <label htmlFor="name">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Enter name"
                                    value={name}
                                    maxLength="20"
                                    onChange={(e) => setName(e.target.value)}
                                ></input>
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    maxLength="40"
                                    onChange={(e) => setEmail(e.target.value)}
                                ></input>
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    maxLength="20"
                                    placeholder="Enter password"
                                    onChange={(e) => setPassword(e.target.value)}
                                ></input>
                            </div>
                            <div>
                                <label htmlFor="confirmPassword">confirm Password</label>
                                <input
                                    id="confirmPassword"
                                    type="password"
                                    maxLength="20"
                                    placeholder="Enter confirm password"
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                ></input>
                            </div>
                            <div>
                                <label />
                                <button className="primary" type="submit">
                                    Update
              </button>
                            </div>
                        </>
                    )}
                </form>
            </div>
        </div>
    );
}