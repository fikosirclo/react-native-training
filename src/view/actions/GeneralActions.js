import GeneralConstant from "../constant/GeneralConstant";

export default {
    setCategoryId: (categoryId, categoryName, categoryImagePath) => {
        return {
            type: GeneralConstant.SET_CATEGORY_ID,
            categoryId: categoryId,
            categoryName: categoryName,
            categoryImagePath: categoryImagePath,
        };
    },
    setProductId: (productId, productName, productImagePath, productSku) => {
        return {
            type: GeneralConstant.SET_PRODUCT_ID,
            productId: productId,
            productName: productName,
            productImagePath: productImagePath,
            productSku: productSku,
        };
    },
};
