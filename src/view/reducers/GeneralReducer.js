import GeneralConstant from "../constant/GeneralConstant";

const defaultState = {
    categoryId: null,
    categoryName: null,
    categoryImagePath: null,
    productId: null,
    productName: null,
    productImagePath: null,
    productSku: null,
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case GeneralConstant.SET_CATEGORY_ID:
            return {
                ...state,
                categoryId: action.categoryId,
                categoryName: action.categoryName,
                categoryImagePath: action.categoryImagePath,
            };

        case GeneralConstant.SET_PRODUCT_ID:
            return {
                ...state,
                productId: action.productId,
                productName: action.productName,
                productImagePath: action.productImagePath,
                productSku: action.productSku,
            };

        default:
            return state;
    }
};
