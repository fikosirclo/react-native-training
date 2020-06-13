import { StyleSheet } from "react-native";
import Colors from "../../view/constant/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
        backgroundColor: "#E9E9E9",
        padding: 32,
    },
    logo: {
        alignItems: "center",
        marginBottom: 44,
    },
    logoImage: {
        width: 48,
        height: 48,
    },
    button: {
        height: 48,
        backgroundColor: Colors.PRIMARY,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
    colorWhite: {
        color: Colors.WHITE,
    },
    textBold: {
        fontWeight: "bold",
    },
    noAccountText: {
        alignSelf: "center",
        marginBottom: 12,
        color: "#666666",
    },
    input: {
        height: 48,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 8,
        padding: 12,
        backgroundColor: "#E3E3E3",
        borderColor: "#bbb",
    },
});
