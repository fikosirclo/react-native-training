import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Image, Text, ScrollView, View, TouchableOpacity, StatusBar } from "react-native";
import { gql } from "apollo-boost";
import { query } from "../../services/graphql/api";
import GeneralActions from "../../view/actions/GeneralActions";
import Colors from "../../view/constant/colors";
import style from "../Login/style";

export default ({ navigation, title }) => {
    const dispatch = useDispatch();
    const { categoryId, categoryName, categoryImagePath } = useSelector(state => state.GeneralReducer);
    const [products, setProducts] = React.useState([]);
    navigation.setOptions({ title: categoryName });

    React.useEffect(() => {
        const schema = gql`
            query category($id: Int!) {
                category(id: $id) {
                    product_count
                    products {
                        items {
                            id
                            sku
                            image {
                                url
                            }
                            name
                        }
                    }
                }
            }
        `;
        query(schema, { variables: { id: categoryId } }).then(res => {
            setProducts(res.data.category.products.items);
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
                        source={{ uri: categoryImagePath }}
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
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>{categoryName}</Text>
                </View>
                <View style={{ flex: 1, alignSelf: "stretch", padding: 16, paddingVertical: 8 }}>
                    {products.map(product => (
                        <TouchableOpacity
                            key={product.id}
                            onPress={() => {
                                dispatch(
                                    GeneralActions.setProductId(
                                        product.id,
                                        product.name,
                                        product.image.url,
                                        product.sku,
                                    ),
                                );
                                navigation.navigate("ProductPage");
                            }}>
                            <View
                                style={{
                                    marginVertical: 8,
                                    backgroundColor: Colors.WHITE,
                                    borderRadius: 8,
                                    flex: 1,
                                    flexDirection: "row",
                                    padding: 8,
                                }}>
                                <Image
                                    source={{ uri: product.image.url }}
                                    style={{ width: 64, height: 64, borderRadius: 8 }}
                                />
                                <View style={{ paddingLeft: 8 }}>
                                    <Text style={{ width: 250, fontWeight: "bold", lineHeight: 20 }}>
                                        {product.name}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};
