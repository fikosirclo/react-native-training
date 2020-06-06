import React, { useState } from "react";
import { View } from "react-native";
import { Container, Header, Title, Body, Content, Item, Input, Icon, Button, Toast, Text } from "native-base";
import Colors from "./view/constant/colors";
import Styles from "./view/styles/style";
import { default as InputCustom } from "./component/Input";
import Activities from "./pages/activities";

export default () => {
    return <Activities />;

    const [username, setUsername] = useState("username");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");

    const callback = value => {
        console.log(value);
        setFirstname(value.firstname);
        setLastname(value.lastname);
    };

    return (
        <Container>
            <Header androidStatusBarColor={Colors.VANADYL_BLUE} style={{ backgroundColor: Colors.VANADYL_BLUE }}>
                <Body>
                    <Title>React Native</Title>
                </Body>
            </Header>
            <Content style={Styles.content}>
                <InputCustom callback={callback} />
                <Button
                    rounded
                    block
                    onPress={() => {
                        alert(`Hello ${username}, how are you?`);
                    }}>
                    <Text style={{ color: Colors.WHITE }}>LOGIN</Text>
                </Button>

                <View style={{ marginTop: 20 }}>
                    <Text style={{ textAlign: "center" }}>{firstname}</Text>
                    <Text style={{ textAlign: "center" }}>{lastname}</Text>
                </View>
            </Content>
        </Container>
    );
};
