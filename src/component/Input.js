import React, { useState, useEffect } from "react";
import { Item, Input, Text } from "native-base";
import Styles from "../view/styles/style";

const InputCustom = ({ callback }) => {

    const [fullname, setFullname] = useState({
        firstname: "",
        lastname: "",
    });

    useEffect(() => {
        callback(fullname);
    }, [fullname]);

    return (
        <>
            <Item rounded style={Styles.input}>
                <Input
                    placeholder="Fistname"
                    onChangeText={e => {
                        setFullname({
                            ...fullname,
                            firstname: e,
                        });
                        // callback(fullname);
                    }}
                />
            </Item>
            <Item rounded style={Styles.input}>
                <Input
                    placeholder="Lastname"
                    onChangeText={e => {
                        setFullname({
                            ...fullname,
                            lastname: e,
                        });
                        // callback(fullname);
                    }}
                />
            </Item>
        </>
    );
};
// value={value ? value : "aku"}
export default InputCustom;
