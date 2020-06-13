import React, { useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { View } from "react-native";
import { Container, Header, Title, Body, Content, Item, Input, Icon, Button, Toast, Text } from "native-base";
import { gql } from "apollo-boost";
import { mutate } from "./services/graphql/api";
import Colors from "./view/constant/colors";
import Styles from "./view/styles/style";
import { get, set } from "./helper/LocalStorageHelper";
import { default as InputCustom } from "./component/Input";

export default () => {
    const [isLoginLoading, setIsLoginLoading] = useState(false);
    const [isCheckLoading, setIsCheckLoading] = useState(false);
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
                setIsLoginLoading(false);
                alert(`This is your token : ${user.token}`);
                set("token", user.token);
            })
            .catch(err => {
                setIsLoginLoading(false);
                alert(`Your username/password was wrong, Try again!`);
            });
    };

    const handleCheck = async () => {
        setIsCheckLoading(true);
        let data = await get("token").then(res => {
            console.log(res);
        });
        setIsCheckLoading(false);
    };

    return (
        <Container>
            <Content style={Styles.content}>
                <Item rounded style={Styles.input}>
                    <Input
                        placeholder="Email / Phone Number"
                        value={username}
                        onChangeText={usernameValue => {
                            setUsername(usernameValue);
                        }}
                    />
                </Item>
                <Item rounded style={Styles.input}>
                    <Input
                        placeholder="Password"
                        value={password}
                        secureTextEntry={true}
                        onChangeText={passwordValue => {
                            setPassword(passwordValue);
                        }}
                    />
                </Item>
                <Button rounded block onPress={handleLogin} disabled={isLoginLoading ? true : false}>
                    <Text style={{ color: Colors.WHITE }}>{isLoginLoading ? "Processing..." : "LOGIN"}</Text>
                </Button>
                <Button
                    rounded
                    block
                    onPress={handleCheck}
                    style={{ marginTop: 28 }}
                    disabled={isCheckLoading ? true : false}>
                    <Text style={{ color: Colors.WHITE }}>
                        {isCheckLoading ? "Processing..." : "Check Local Storage"}
                    </Text>
                </Button>
            </Content>
        </Container>
    );
};
