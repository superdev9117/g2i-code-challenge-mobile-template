import { StyleSheet } from "react-native";

export default StyleSheet.create({
    button_false: {
        fontSize: 20,
        padding: 10,
        justifyContent: "flex-end",
    },
    button_true: {
        fontSize: 20,
        color: "green",
        justifyContent: "flex-end",
        padding: 10,
        marginLeft: 20,
    },
    container: {
        alignItems: "center",
        justifyContent: "center",
        padding:20,
    },
    row3: {
        alignItems: "center",
        flex: 3,
    },
    row1: {
        alignItems: "center",
        flex: 1,
    },
    row_button: {
        alignItems: "flex-end",
        flex: 1,
        flexDirection: 'row'
    },
    box: {
        // justifyContent: "center",
        alignItems: "center",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "black",
        height: 300,
        width: 300,
        padding: 20
    },
    box_header: {
        alignItems: "center",
        paddingBottom: 20,
    },
    category: {
        fontSize: 20,
        fontWeight: "bold"
    },
    question: {
        // textAlign: "center",
        fontSize: 20
    },
    page_title: {
        fontWeight: "bold",
        fontSize: 20,
    },
    page_text: {
        fontSize: 20,
    }
});
