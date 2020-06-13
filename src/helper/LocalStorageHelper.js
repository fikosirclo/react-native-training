import AsyncStorage from "@react-native-community/async-storage";

export const set = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.log(error);
    }
};

export const get = async key => {
    let response = null;
    try {
        response = await AsyncStorage.getItem(key);
        response = response !== null ? response : null;
    } catch (error) {
        console.log(error);
    }
    return response;
};

export const remove = async key => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.log(error);
    }
};
