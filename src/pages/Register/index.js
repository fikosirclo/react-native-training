import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import style from "../Login/style";

export default ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Register page!</Text>
            <TouchableOpacity
                style={[style.button, { padding: 20, marginTop: 20 }]}
                onPress={() => navigation.navigate("LoginPage")}>
                <Text style={[style.textBold, style.colorWhite]}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};
