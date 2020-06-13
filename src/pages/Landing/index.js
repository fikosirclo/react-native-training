import React, { useEffect } from "react";
import { Image, ImageBackground, View, StatusBar, Text, TouchableOpacity } from "react-native";
import { Button, Text as TextBase } from "native-base";
import { get } from "../../helper/LocalStorageHelper";

export default ({ navigation }) => {
    return (
        <ImageBackground
            source={require("../../view/images/back.png")}
            style={{
                flex: 1,
                resizeMode: "cover",
                justifyContent: "center",
            }}>
            <StatusBar backgroundColor="transparent" barStyle="light-content" translucent={true} />
            <View
                style={{
                    flex: 1,
                    justifyContent: "space-around",
                    alignItems: "stretch",
                }}>
                <View style={{ flex: 0.8, alignItems: "center", justifyContent: "center" }}>
                    <Image source={require("../../view/images/logo-128.png")} style={{ width: 128, height: 128 }} />
                </View>
                <View
                    style={{
                        flex: 0.2,
                        justifyContent: "center",
                        padding: 32,
                        backgroundColor: "#ffffff",
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 5,
                        },
                        elevation: 5,
                    }}>
                    <TouchableOpacity
                        style={{
                            paddingTop: 16,
                            paddingBottom: 16,
                            backgroundColor: "#e84118",
                            borderRadius: 8,
                        }}
                        onPress={() => navigation.navigate("LoginPage")}>
                        <Text style={{ fontWeight: "bold", color: "#ffffff", textAlign: "center" }}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            marginTop: 20,
                            paddingTop: 16,
                            paddingBottom: 16,
                            backgroundColor: "#ffffff",
                            borderWidth: 2,
                            borderColor: "#e84118",
                            borderRadius: 8,
                        }}
                        onPress={() => navigation.navigate("RegisterPage")}>
                        <Text style={{ fontWeight: "bold", color: "#e84118", textAlign: "center" }}>REGISTER</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};
