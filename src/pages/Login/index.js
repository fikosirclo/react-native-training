import React, { useState } from "react";
import { SafeAreaView, Image, ImageBackground, View, StatusBar, Text, TextInput, TouchableOpacity } from "react-native";
import { Button, Text as TextBase } from "native-base";
import { gql } from "apollo-boost";
import Hr from "../../component/Hr";
import style from "./style";
import Colors from "../../view/constant/colors";
import { mutate } from "../../services/graphql/api";
import LocalStorageHelper from "../../helper/LocalStorageHelper";

export default ({ navigation }) => {
    const [isLoginLoading, setIsLoginLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        setIsLoginLoading(true);
        const schema = gql`
            mutation generateCustomerTokenCustom($email: String!, $password: String!) {
                generateCustomerTokenCustom(username: $email, password: $password) {
                    token
                }
            }
        `;
        const params = {
            email: username,
            password: password,
        };
        mutate(schema, params)
            .then(res => {
                const { data } = res;
                const user = data.generateCustomerTokenCustom;
                setUsername("");
                setPassword("");
                setIsLoginLoading(false);
                LocalStorageHelper.set("token", user.token);
                navigation.reset({
                    index: 0,
                    routes: [{ name: "HomePage" }],
                });
            })
            .catch(err => {
                setIsLoginLoading(false);
                alert(`Your username/password was wrong, Try again!`);
            });
    };

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent={true} />
            <View style={style.logo}>
                <Image source={require("../../view/images/logo-128.png")} style={style.logoImage} />
            </View>
            <TextInput
                style={style.input}
                autoCorrect={false}
                autoCompleteType="username"
                autoCapitalize="none"
                placeholder="username"
                onChangeText={text => setUsername(text)}
                value={username}
            />
            <TextInput
                style={style.input}
                autoCorrect={false}
                autoCompleteType="password"
                secureTextEntry={true}
                autoCapitalize="none"
                placeholder="password"
                onChangeText={text => setPassword(text)}
                value={password}
            />
            <TouchableOpacity
                style={[
                    style.button,
                    {
                        backgroundColor:
                            username && password && !isLoginLoading ? Colors.PRIMARY : Colors.PRIMARY_DISABLED,
                    },
                ]}
                disabled={(username && password) || isLoginLoading ? false : true}
                onPress={handleLogin}>
                <Text style={[style.textBold, style.colorWhite]}>{isLoginLoading ? "Loading..." : "SIGN IN"}</Text>
            </TouchableOpacity>
            <Hr content="OR" backgroundColor="#E9E9E9" />
            <Text style={style.noAccountText}>Have no account?</Text>
            <TouchableOpacity style={style.button} onPress={() => navigation.navigate("RegisterPage")}>
                <Text style={[style.textBold, style.colorWhite]}>Register Now</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};
