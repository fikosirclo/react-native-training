import * as React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Pages
import Home from "./Home";
import Notification from "./Notification";
import Profile from "./Profile";

// function HomeScreen() {
//     return (
//         <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//             <Text>Home!</Text>
//         </View>
//     );
// }

// function SettingsScreen() {
//     return (
//         <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//             <Text>Settings!</Text>
//         </View>
//     );
// }

const Tab = createBottomTabNavigator();

export default () => {
    return (
        <Tab.Navigator
            style={{ height: 400 }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    switch (route.name) {
                        case "Home":
                            iconName = "ios-home";
                            break;
                        case "Notification":
                            iconName = "ios-notifications";
                            break;
                        case "Cart":
                            iconName = "ios-cart";
                            break;
                        case "Profile":
                            iconName = "ios-person";
                            break;
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: "tomato",
                inactiveTintColor: "gray",
            }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Notification" component={Profile} />
            <Tab.Screen name="Cart" component={Profile} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
};
