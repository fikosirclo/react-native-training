import React from "react";
import { Text, View, TouchableOpacity, StatusBar } from "react-native";
import style from "../Login/style";
import { remove } from "../../helper/LocalStorageHelper";
import Colors from "../../view/constant/colors";

export default ({ navigation }) => {
    const [isLoadingLogout, setIsLoadingLogout] = React.useState(false);
    const handleLogout = () => {
        setIsLoadingLogout(true);
        remove("token").then(res => {
            navigation.reset({
                index: 0,
                routes: [{ name: "LoginPage" }],
            });
        });
        setIsLoadingLogout(false);
    };

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <StatusBar backgroundColor={Colors.WHITE} barStyle="dark-content" />
            <Text>HOMEPAGE!</Text>
            <TouchableOpacity style={[style.button, { padding: 20, marginTop: 20 }]} onPress={handleLogout}>
                <Text style={[style.textBold, style.colorWhite]}>{isLoadingLogout ? "Processing..." : "Logout"}</Text>
            </TouchableOpacity>
        </View>
    );
};
