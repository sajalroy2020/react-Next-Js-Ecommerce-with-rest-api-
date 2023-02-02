import request from "../../utils/request";


export const getCartByToken = () => {
    return request.get(`/cart`);
};

export const addCart = (formData) => {
    return request.post(`/cart`, formData);
};