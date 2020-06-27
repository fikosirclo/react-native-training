import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import DataHelper from "../../../helper/Data";
import style from "../../Login/style";

export default ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Profile Page!</Text>
            <TouchableOpacity
                style={[style.button, { padding: 20, marginTop: 20 }]}
                onPress={() => DataHelper.handleLogout(navigation)}>
                <Text style={[style.textBold, style.colorWhite]}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};
