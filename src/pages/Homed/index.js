import React from "react";
import {
    TextInput,
    Text,
    SafeAreaView,
    View,
    ScrollView,
    TouchableOpacity,
    StatusBar,
    Dimensions,
    Platform,
} from "react-native";
import { gql } from "apollo-boost";
import { SliderBox } from "react-native-image-slider-box";
import { mutate } from "../../services/graphql/api";
import style from "../Login/style";
import LocalStorageHelper from "../../helper/LocalStorageHelper";
import Colors from "../../view/constant/colors";

export default ({ navigation }) => {
    const [slider, setSlider] = React.useState([]);
    const [images, setImages] = React.useState([]);
    const STATUS_BAR_HEADER = Platform.OS === "ios" ? 20 : 24;

    React.useEffect(() => {
        const schema = gql`
            {
                getHomepageSlider {
                    images {
                        image_id
                        url
                        mobile_image_url
                    }
                }
            }
        `;

        mutate(schema).then(res => {
            const { data } = res;
            let newImages = data.getHomepageSlider.images.map(image => image.mobile_image_url);
            setSlider(data.getHomepageSlider.images);
            setImages(newImages);
        });
    }, []);

    return (
        <SafeAreaView>
            <ScrollView style={{ position: "relative" }}>
                <StatusBar backgroundColor="transparent" barStyle="light-content" translucent={true} />
                <View style={{ alignSelf: "stretch", height: 280, flex: 1 }}>
                    {images.length > 0 && (
                        <SliderBox
                            sliderBoxHeight={280}
                            images={images}
                            onCurrentImagePressed={index => console.warn(`image pressed`)}
                            currentImageEmitter={index => console.warn(`current pos is:`)}
                        />
                    )}
                </View>
                <View
                    style={{
                        position: "absolute",
                        flex: 1,
                        alignSelf: "stretch",
                        top: STATUS_BAR_HEADER + 16,
                        left: 16,
                        width: Math.round(Dimensions.get("window").width) - 32,
                        height: 50,
                    }}>
                    <TextInput
                        autoCorrect={false}
                        placeholder="Search Product"
                        style={{
                            backgroundColor: "#ffffff",
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 5,
                            },
                            shadowOpacity: 0.34,
                            shadowRadius: 6.27,
                            paddingLeft: 16,
                            paddingRight: 16,
                            elevation: 10,
                            borderRadius: 8,
                        }}
                    />
                </View>
                <View>
                    <Text>contoh</Text>
                    <Text>contoh</Text>
                    <Text>contoh</Text>
                    <Text>contoh</Text>
                    <Text>contoh</Text>
                    <Text>contoh</Text>
                    <Text>contoh</Text>
                    <Text>contoh</Text>
                    <Text>contoh</Text>
                    <Text>contoh</Text>
                    <Text>contoh</Text>
                    <Text>contoh</Text>
                    <Text>contoh</Text>
                    <Text>contoh</Text>
                    <Text>contoh</Text>
                    <Text>contoh</Text>
                    <Text>contoh</Text>
                    <Text>contoh</Text>
                    <Text>contoh</Text>
                    <Text>contoh</Text>
                    <Text>contoh</Text>
                    <Text>contoh</Text>
                    <Text>contoh</Text>
                    <Text>contoh</Text>
                    <Text>contoh</Text>
                    <Text>contoh</Text>
                    <Text>contoh</Text>
                    <Text>contoh</Text>
                    <Text>contoh</Text>
                    <Text>contoh</Text>
                </View>
                {/* <TouchableOpacity style={[style.button, { padding: 20, marginTop: 20 }]} onPress={handleLogout}>
                <Text style={[style.textBold, style.colorWhite]}>{isLoadingLogout ? "Processing..." : "Logout"}</Text>
            </TouchableOpacity> */}
            </ScrollView>
        </SafeAreaView>
    );
};
