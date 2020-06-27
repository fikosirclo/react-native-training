import React from "react";
import { useSelector } from "react-redux";
import { Image, Text, ScrollView, View, TouchableOpacity, StatusBar } from "react-native";
import { gql } from "apollo-boost";
import { query } from "../../services/graphql/api";
import Colors from "../../view/constant/colors";
import style from "../Login/style";

export default ({ navigation, title }) => {
    const { productId, productName, productImagePath, productSku } = useSelector(state => state.GeneralReducer);
    const [product, setProduct] = React.useState({});
    navigation.setOptions({ title: productName });

    React.useEffect(() => {
        const schema = gql`
            query products($sku: String!) {
                products(filter: { sku: { eq: $sku } }, selectedStore: 1) {
                    items {
                        name
                        media_gallery {
                            label
                            position
                            url
                        }
                        attribute_set_id
                    }
                }
            }
        `;
        query(schema, { variables: { sku: productSku } }).then(res => {
            console.log(res.data.products.items[0]);
            setProduct(res.data.products.items[0]);
        });
    }, []);

    return (
        <ScrollView>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" />
            <View style={{ flex: 1, alignItems: "center", marginTop: 28 }}>
                <View
                    style={{
                        width: 120,
                        height: 120,
                        borderRadius: 60,
                        zIndex: 1,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.22,
                        shadowRadius: 2.22,
                        elevation: 3,
                    }}>
                    <Image
                        source={{ uri: productImagePath }}
                        style={{
                            width: 120,
                            height: 120,
                            borderRadius: 60,
                        }}
                    />
                </View>
                <View
                    style={{
                        zIndex: 0,
                        backgroundColor: Colors.WHITE,
                        alignSelf: "stretch",
                        alignItems: "center",
                        padding: 16,
                        paddingTop: 36,
                        marginTop: -20,
                    }}>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>{productName}</Text>
                    <Text style={{ marginTop: 20 }}>testing</Text>
                </View>
            </View>
        </ScrollView>
    );
};
