import React, { useState } from "react";
import { View, Text } from "react-native";

export default ({ content, backgroundColor, borderColor, color }) => (
    <View style={{ marginTop: 32, marginBottom: 12 }}>
        <View style={{ borderBottomWidth: 1, borderColor: borderColor ? borderColor : "#aaaaaa" }} />
        <Text
            style={{
                alignSelf: "center",
                marginTop: -18,
                backgroundColor: backgroundColor ? backgroundColor : "transparent",
                padding: 8,
                color: color ? color : "#666666",
            }}>
            {content}
        </Text>
    </View>
);
