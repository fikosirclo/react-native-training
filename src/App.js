/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// reducer
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./view/reducers";

// Pages
import Splash from "./pages/Splash";
import Home from "./pages/Auth";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Category from "./pages/Category";
import Product from "./pages/Product";

const store = createStore(reducer);
const Stack = createStackNavigator();

export default () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                    <Stack.Screen name="LandingPage" component={Landing} options={{ headerShown: false }} />
                    <Stack.Screen name="HomePage" component={Home} options={{ headerShown: false }} />
                    <Stack.Screen name="LoginPage" component={Login} options={{ headerShown: false }} />
                    <Stack.Screen name="RegisterPage" component={Register} options={{ headerShown: false }} />
                    <Stack.Screen name="CategoryPage" component={Category} />
                    <Stack.Screen name="ProductPage" component={Product} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};
