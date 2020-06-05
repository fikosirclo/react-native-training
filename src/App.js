import React from "react";
import { Container, Header, Title, Body, Content, Item, Input, Icon, Button, Toast, Text } from "native-base";
import Colors from "./view/constant/colors";
import Styles from "./view/styles/style";

export default () => {
    return (
        <Container>
            <Header androidStatusBarColor={Colors.VANADYL_BLUE} style={{ backgroundColor: Colors.VANADYL_BLUE }}>
                <Body>
                    <Title>React Native</Title>
                </Body>
            </Header>
            <Content style={Styles.content}>
                <Item rounded style={Styles.input}>
                    <Input placeholder="Username" />
                </Item>
                <Item rounded style={Styles.input}>
                    <Input placeholder="Password" secureTextEntry={true} />
                </Item>
                <Button
                    rounded
                    block
                    onPress={() => {
                        alert("Hello There, how are you?");
                    }}>
                    <Text style={{ color: Colors.WHITE }}>LOGIN</Text>
                </Button>
            </Content>
        </Container>
    );
};
