import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../features/Auth/CartSlice';
import { ssrAuthCheck } from "../middleware/authCheck";
import { getCartByToken } from "../servises/action/cart";
import { getCart } from "../features/Auth/CartSlice";

const Cart = () => {

    const cartProduct = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
    let totalPrice = 0;

    cartProduct.map((items) => (
        totalPrice = totalPrice + items.sale_price
    ));

    // const removeCart = (id) => {
    //     dispatch(removeItem(id));
    // }


    // const getCartByTokenAction = async () => {
    //     try {
    //         const { daya } = await getCartByToken();
    //         dispatch(getCart(data.data.json_object));
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // useEffect(() => {
    //     getCartByTokenAction()
    // }, []);



    return (
        <div>
            {/* <div className="about_bg"></div> */}
            <div className="container my-5 pt-5">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <div className="card-body">
                            <div className="card p-2">
                                {
                                    cartProduct.length > 0 ?
                                        <>
                                            {
                                                cartProduct.map((item) => (

                                                    <div key={item.id} className="bg-light border p-3 my-1 d-flex justify-content-between align-items-center" >
                                                        <img src={item.image} width="60" height="60" alt='product' className='border' />
                                                        <h4>{item.title}</h4>
                                                        <h5><b>{item.sale_price}$</b></h5>
                                                        <button onClick={() => dispatch(removeItem(item.id))} className='btn btn-warning'>X</button>
                                                    </div>

                                                ))
                                            }
                                        </>
                                        :
                                        <h2 className='p-4 text-center'>No Cart Item</h2>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="bg-light border p-3 my-1 d-flex justify-content-between align-items-center" >
                            <h4><b>Total</b></h4>
                            <h4><b>{totalPrice}$</b></h4>
                            <button className='btn btn-danger'>Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Cart


Cart.getInitialProps = async (ctx) => {
    await ssrAuthCheck(ctx, 'Cart');
    return {};
}



