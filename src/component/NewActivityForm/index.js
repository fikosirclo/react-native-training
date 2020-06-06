import React from "react";
import { Body, Item, Input, Button, Text, Card, CardItem } from "native-base";
import Colors from "../../view/constant/colors";
import StyleGlobal from "../../view/styles/style";
import Style from "./style";

export default ({ label, activity, setLabel, setActivity, handleAddActivity }) => {
    return (
        <Card>
            <CardItem bordered>
                <Body style={Style.content}>
                    <Item style={StyleGlobal.input}>
                        <Input placeholder="Label" value={label} onChangeText={e => setLabel(e)} />
                    </Item>
                    <Item style={StyleGlobal.input}>
                        <Input placeholder="Activity" value={activity} onChangeText={e => setActivity(e)} />
                    </Item>
                    <Button
                        rounded
                        block
                        onPress={() => handleAddActivity()}
                        style={Style.button}>
                        <Text style={{ color: Colors.WHITE }}>ADD NEW</Text>
                    </Button>
                </Body>
            </CardItem>
        </Card>
    );
};
