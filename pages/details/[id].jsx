import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { productsDetails } from '../../servises/action/products'
import { addCart, getCartByToken } from "../../servises/action/cart";
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from "../../features/Auth/CartSlice";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProductDetails({ product }) {

  const router = useRouter();
  const { id } = (router.query);
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.auth.authenticated);
  const cartProduct = useSelector((state) => state.cart.cart);

  const addToCart = () => {
    if (!authUser) {
      router.push(`/Login?redirect=details/${id}`);
      return;
    };

    // const formData = new FormData();
    // formData.append("product_id", product.id);
    // formData.append("quantity", 1);
    // formData.append("attrs[color]", "black");
    // addCartAction(formData);

    // if (cartProduct) {

    // cartProduct.filter((item) => {
    //   console.log(item);
    //   if (product.id == item.id) {
    //     router.push('/cart');
    //   } else {
    //     dispatch(getCart(product));
    //     showToastMessage();
    //   }
    // });

    // };


    dispatch(getCart(product));
    showToastMessage();

  };


  // const addCartAction = async (formData) => {
  //   try {
  //     await addCart(formData);
  //     const { data } = await getCartByToken();
  //     dispatch(getCart(data.data.json_object));
  //     console.log('product added successfully');

  //   } catch (error) {
  //     console.log(error, 'addCart error');
  //   }
  // }


  function showToastMessage() {
    toast.success('product added successfully !', {
      position: toast.POSITION.TOP_RIGHT
    });
  };



  return (
    <>
      <section className='discount_bg py-5 mt-5'>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="position-relative d-flex justify-content-center">
                <img src={product.image} width="400" height="400" alt='product' />
                <div className="price_box">
                  <div className="inner_price">
                    <span className="price">
                      <strong>10%</strong> <br /> off
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h1 className="text_color"><b><span className="main_color">{product.title}</span></b></h1>
              <h2 className='discount_text text_color pt-2 pb-3'>{product.sale_price}$</h2>
              <h4><s>{product.price_off}$</s></h4>
              <p className='footer-text-2'>Quisquam minus maiores repudiandae nobis, minima saepe id, fugit ullam similique! Beatae, minima quisquam molestias facere ea. Perspiciatis unde omnis iste natus error sit voluptatem accusant</p>
              <button class="cart_btn mb-4" onClick={() => addToCart()}><i class="fas fa-shopping-cart me-2"></i> Add to Cart</button>
            </div>
          </div>
        </div>
      </section>

      <ToastContainer />

    </>
  )
};


export async function getServerSideProps(context) {
  const { id } = context.params;
  const { data } = await productsDetails(id);
  return {
    props: {
      product: data.data.json_object,
    },
  };
};