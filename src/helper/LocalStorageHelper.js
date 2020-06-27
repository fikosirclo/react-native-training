import AsyncStorage from "@react-native-community/async-storage";

export default {
    set: async (key, value) => {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            console.log(error);
        }
    },

    get: async key => {
        let response = null;
        try {
            response = await AsyncStorage.getItem(key);
            response = response !== null ? response : null;
        } catch (error) {
            console.log(error);
        }
        return response;
    },

    remove: async key => {
        try {
            await AsyncStorage.removeItem(key);
        } catch (error) {
            console.log(error);
        }
    },
};
