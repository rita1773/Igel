import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct, updateProduct } from '../actions/productsActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Header from '../components/Header/Header'
import { PRODUCT_UPDATE_RESET } from '../Constants/productsConstants';
import Axios from 'axios';

export default function ProductEditScreen(props) {
    const productId = props.match.params.id;
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [countInStock, setCountInStock] = useState('');
    const [collections, setCollections] = useState('');
    const [description, setDescription] = useState('');

    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    const productUpdate = useSelector((state) => state.productUpdate);
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = productUpdate;

    const dispatch = useDispatch();
    useEffect(() => {
        if (successUpdate) {
            props.history.push('/productlist');
        }
        if (!product || product._id !== productId || successUpdate) {
            dispatch({ type: PRODUCT_UPDATE_RESET });
            dispatch(detailsProduct(productId));
        } else {
            setName(product.name);
            setPrice(product.price);
            setImage(product.image);
            setCategory(product.category);
            setCountInStock(product.countInStock);
            setCollections(product.collections);
            setDescription(product.description);
        }
    }, [product, dispatch, productId, successUpdate, props.history]);
    const submitHandler = (e) => {
        e.preventDefault();
        // TODO: dispatch update product
        dispatch(
            updateProduct({
                _id: productId,
                name,
                price,
                image,
                category,
                collections,
                countInStock,
                description,
            })
        );
    };

    const [loadingUpload, setLoadingUpload] = useState(false);
    const [errorUpload, setErrorUpload] = useState('');

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const uploadFileHandler = async (e) => {
        const file = e.target.files[0];
        const bodyFormData = new FormData();
        bodyFormData.append('image', file);
        setLoadingUpload(true);
        try {
            const { data } = await Axios.post('/api/uploads', bodyFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${userInfo.token}`,
                },
            });
            setImage(data);
            setLoadingUpload(false);
        } catch (error) {
            setErrorUpload(error.message);
            setLoadingUpload(false);
        }
    };

    return (
        <div>
            <Header />
            <div className="outerdiv">
                <form className="form" onSubmit={submitHandler}>
                    <div>
                        <h1>Edit Product {productId}</h1>
                    </div>
                    {loadingUpdate && <LoadingBox></LoadingBox>}
                    {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
                    {loading ? (
                        <LoadingBox></LoadingBox>
                    ) : error ? (
                        <MessageBox variant="danger">{error}</MessageBox>
                    ) : (
                                <>
                                    <div>
                                        <label htmlFor="name">Name</label>
                                        <input
                                            id="name"
                                            type="text"
                                            placeholder="Enter name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        ></input>
                                    </div>
                                    <div>
                                        <label htmlFor="price">Price</label>
                                        <input
                                            id="price"
                                            type="text"
                                            placeholder="Enter price"
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                        ></input>
                                    </div>
                                    <div>
                                        <label htmlFor="image">Image</label>
                                        <input
                                            id="image"
                                            type="text"
                                            placeholder="Enter image"
                                            value={image}
                                            onChange={(e) => setImage(e.target.value)}
                                        ></input>
                                    </div>
                                    {/* <div>
                                        <label htmlFor="imageFile">Image File</label>
                                        <input
                                            type="file"
                                            id="imageFile"
                                            label="Choose Image"
                                            onChange={uploadFileHandler}
                                        ></input>
                                        {loadingUpload && <LoadingBox></LoadingBox>}
                                        {errorUpload && (
                                            <MessageBox variant="danger">{errorUpload}</MessageBox>
                                        )}
                                    </div> */}
                                    <div>
                                        <label htmlFor="category">Category</label>
                                        <input
                                            id="category"
                                            type="text"
                                            placeholder="Enter category"
                                            value={category}
                                            onChange={(e) => setCategory(e.target.value)}
                                        ></input>
                                    </div>
                                    <div>
                                        <label htmlFor="collections">Collection</label>
                                        <input
                                            id="collections"
                                            type="text"
                                            placeholder="Enter Collection"
                                            value={collections}
                                            onChange={(e) => setCollections(e.target.value)}
                                        ></input>
                                    </div>
                                    <div>
                                        <label htmlFor="countInStock">Count In Stock</label>
                                        <input
                                            id="countInStock"
                                            type="text"
                                            placeholder="Enter countInStock"
                                            value={countInStock}
                                            onChange={(e) => setCountInStock(e.target.value)}
                                        ></input>
                                    </div>
                                    <div>
                                        <label htmlFor="description">Description</label>
                                        <textarea
                                            id="description"
                                            rows="3"
                                            type="text"
                                            placeholder="Enter description"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        ></textarea>
                                    </div>
                                    <div>
                                        <label></label>
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