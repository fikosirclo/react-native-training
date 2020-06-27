import { Platform, Dimensions } from "react-native";
import LocalStorageHelper from "./LocalStorageHelper";

export default {
    statusBarHeight: Platform.OS === "ios" ? 20 : 24,
    screenWidth: Math.round(Dimensions.get("window").width),
    screenHeight: Math.round(Dimensions.get("window").height),

    handleLogout: navigation => {
        LocalStorageHelper.remove("token").then(res => {
            navigation.reset({
                index: 0,
                routes: [{ name: "LoginPage" }],
            });
        });
    },
};
