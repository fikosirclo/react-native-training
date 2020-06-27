import React, { useState, useEffect } from "react";
import { Text, ImageBackground, Image, StatusBar } from "react-native";
import LocalStorageHelper from "../../helper/LocalStorageHelper";

export default ({ navigation }) => {
    useEffect(() => {
        LocalStorageHelper.get("token")
            .then(val => {
                if (val === null) {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: "LandingPage" }],
                    });
                } else {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: "HomePage" }],
                    });
                }
            })
            .catch(err => {
                navigation.reset({
                    index: 0,
                    routes: [{ name: "LandingPage" }],
                });
            });
    }, []);

    return (
        <ImageBackground
            source={require("../../view/images/back.png")}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <StatusBar backgroundColor="transparent" barStyle="light-content" translucent={true} />
            <Image source={require("../../view/images/logo-128.png")} style={{ width: 128, height: 128 }} />
        </ImageBackground>
    );
};
