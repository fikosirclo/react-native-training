/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { get } from "./helper/LocalStorageHelper";

// Pages
import Splash from "./pages/Splash";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Profile from "./pages/Profile";

const Stack = createStackNavigator();

const AppNavigator = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        get("token").then(val => {
            setTimeout(() => {
                setIsLoading(false);
            }, 500);
            if (val === null) return;
            setIsLoggedIn(true);
        });
    }, [isLoggedIn]);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="LandingPage"
                    component={isLoading ? Splash : isLoggedIn ? Home : Landing}
                    options={{
                        headerShown: isLoggedIn ? true : false,
                        title: isLoggedIn ? "Lotte Mart" : "",
                    }}
                />
                <Stack.Screen name="HomePage" component={Home} options={{ title: "Lotte Mart" }} />
                <Stack.Screen name="LoginPage" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="RegisterPage" component={Register} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default AppNavigator;
