import React from "react";
import { useDispatch } from "react-redux";
import {
    TextInput,
    Text,
    SafeAreaView,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    ImageBackground,
    StatusBar,
    Dimensions,
    StyleSheet,
    Platform,
} from "react-native";
import { gql } from "apollo-boost";
import { SliderBox } from "react-native-image-slider-box";
import { mutate, query } from "../../../services/graphql/api";
import style from "../../Login/style";
import DataHelper from "../../../helper/Data";
import LocalStorageHelper from "../../../helper/LocalStorageHelper";
import Colors from "../../../view/constant/colors";
import GeneralActions from "../../../view/actions/GeneralActions";

export default ({ navigation }) => {
    const [slider, setSlider] = React.useState([]);
    const [images, setImages] = React.useState([]);
    const [categories, setCategories] = React.useState([]);
    const dispatch = useDispatch();
    const STATUS_BAR_HEADER = Platform.OS === "ios" ? 20 : 24;

    React.useEffect(() => {
        const schemaGetSlider = gql`
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
        const schemaGetCategory = gql`
            {
                categoryList(filters: { ids: { in: ["3", "4", "5", "7"] } }) {
                    id
                    name
                    url_key
                    image_path
                }
            }
        `;

        mutate(schemaGetSlider).then(res => {
            const { data } = res;
            let newImages = data.getHomepageSlider.images.map(image => image.mobile_image_url);
            setSlider(data.getHomepageSlider.images);
            setImages(newImages);
        });

        query(schemaGetCategory).then(res => {
            const { data } = res;
            setCategories(data.categoryList);
        });
    }, []);

    return (
        <SafeAreaView>
            <ScrollView style={{ position: "relative" }}>
                <StatusBar backgroundColor="transparent" barStyle="light-content" translucent={true} />
                <View style={{ alignSelf: "stretch", height: 280, flex: 1, backgroundColor: Colors.PLACEHOLDER }}>
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
                    <Text
                        style={{
                            margin: 16,
                            marginBottom: 4,
                            marginTop: 20,
                            fontWeight: "bold",
                            fontSize: 16,
                            color: "#666",
                        }}>
                        Popular Categories
                    </Text>
                    <ScrollView
                        ref={scrollView => {
                            this.scrollView = scrollView;
                        }}
                        style={styles.container}
                        horizontal={true}
                        contentInset={{
                            top: 0,
                            left: 30,
                            bottom: 0,
                            right: 30,
                        }}>
                        {categories.length > 0 ? (
                            categories.map((category, index) => (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => {
                                        dispatch(
                                            GeneralActions.setCategoryId(
                                                category.id,
                                                category.name,
                                                category.image_path,
                                            ),
                                        );
                                        navigation.navigate("CategoryPage");
                                    }}>
                                    <ImageBackground
                                        style={{
                                            width: DataHelper.screenWidth - 80,
                                            margin: 10,
                                            height: 200,
                                            borderRadius: 10,
                                            position: "relative",
                                        }}
                                        source={{ uri: category.image_path }}>
                                        <Text
                                            style={{
                                                position: "absolute",
                                                bottom: 0,
                                                padding: 4,
                                                backgroundColor: "#00000033",
                                                width: DataHelper.screenWidth - 80,
                                            }}>
                                            {category.name}
                                        </Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                            ))
                        ) : (
                            <React.Fragment>
                                <TouchableOpacity>
                                    <Image style={styles.view} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image style={styles.view} />
                                </TouchableOpacity>
                            </React.Fragment>
                        )}
                    </ScrollView>
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
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 6,
    },
    view: {
        backgroundColor: Colors.PLACEHOLDER,
        width: DataHelper.screenWidth - 80,
        margin: 10,
        height: 200,
        borderRadius: 10,
    },
});