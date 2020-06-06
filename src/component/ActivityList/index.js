import React from "react";
import { Body, List, ListItem, Text } from "native-base";

export default ({ activities }) => {
    return (
        <List>
            {activities.length > 0 &&
                activities.map(item => (
                    <ListItem thumbnail>
                        <Body>
                            <Text>{item.label}</Text>
                            <Text note numberOfLines={1}>
                                {item.activity}
                            </Text>
                        </Body>
                    </ListItem>
                ))}
        </List>
    );
};
