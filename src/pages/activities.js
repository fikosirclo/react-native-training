import React, { useState, useEffect } from "react";
import { Container, Header, Title, Body, Content, Icon, Button, Fab, Left } from "native-base";
import ActivityList from "../component/ActivityList";
import NewActivityForm from "../component/NewActivityForm";
import Colors from "../view/constant/colors";
import Styles from "../view/styles/style";

export default () => {
    const [addNew, setAddNew] = useState(false);
    const [label, setLabel] = useState("");
    const [activity, setActivity] = useState("");
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        if (activities.length === 0) {
            setAddNew(true);
        }
    }, []);

    useEffect(() => {
        setLabel("");
        setActivity("");
    }, [activities]);

    handleAddActivity = () => {
        let newActivity = {
            label: label,
            activity: activity,
        };
        let newAcvities = [...activities];
        newAcvities.push(newActivity);
        setActivities(newAcvities);
        setAddNew(false);
    };

    return (
        <Container>
            <Header androidStatusBarColor={Colors.VANADYL_BLUE} style={{ backgroundColor: Colors.VANADYL_BLUE }}>
                {addNew && (
                    <Left>
                        <Button transparent onPress={() => setAddNew(false)}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                )}
                <Body>
                    <Title>{addNew ? "New Activity" : "Activities"}</Title>
                </Body>
            </Header>
            <Content padder>
                {addNew ? (
                    <NewActivityForm
                        label={label}
                        activity={activity}
                        setLabel={setLabel}
                        setActivity={setActivity}
                        handleAddActivity={handleAddActivity}
                    />
                ) : (
                    <ActivityList activities={activities} />
                )}
            </Content>
            {!addNew && (
                <Fab
                    active={true}
                    direction="left"
                    useNativeDriver={false}
                    containerStyle={{}}
                    style={{ backgroundColor: Colors.VANADYL_BLUE }}
                    position="bottomRight"
                    onPress={() => setAddNew(true)}>
                    <Icon name="ios-add" />
                </Fab>
            )}
        </Container>
    );
};
