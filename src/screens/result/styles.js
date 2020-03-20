import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        paddingTop:20,
    },
    page_title: {
        fontWeight: "bold",
        fontSize: 20,
    },
    button: {
        fontSize: 25,
        paddingTop: 20
    },
    table: {
        marginTop: 30,
        flex: 1,
    },
    row_item: {
        padding: 10,
        marginRight: 60,
        flexDirection: "row"
    },
    col_item_part: {
        textAlign: "center",
        width: 200,
        fontSize: 20
    },
    row_text_true: {
        paddingLeft: 20,
        fontSize: 20,
    },
    row_text_false: {
        paddingLeft: 20,
        fontSize: 20,
        color: "#888"
    },
});
