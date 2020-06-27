import CartConstant from "../constant/CartConstant";

export default {
    addToCart: item => {
        return {
            type: CartConstant.ADD_TO_CART,
        };
    },

    removeFromCart: item => {
        return {
            type: CartConstant.REMOVE_FROM_CART,
        };
    },

    updateCartItem: item => {
        return {
            type: CartConstant.UPDATE_CART_ITEM,
        };
    },
};
