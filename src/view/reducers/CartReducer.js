import CartConstant from "../constant/CartConstant";

const defaultState = {
    items: [],
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case CartConstant.ADD_TO_CART:
            return [...state];

        case CartConstant.REMOVE_FROM_CART:
            return [...state];

        case CartConstant.UPDATE_CART_ITEM:
            return [...state];

        default:
            return state;
    }
};
