import { StyleSheet } from "react-native";

export default StyleSheet.create({
    flex1: {
        flex: 1
    },
    button: {
        fontSize: 20,
        padding: 10,
        justifyContent: "flex-end"
    },
    button_true: {
        fontSize: 20,
        color: "green",
        justifyContent: "flex-end",
        padding: 10,
    },
    container: {
        alignItems: "center",
        justifyContent: "center",
        padding:20,
    },
    row3: {
        alignItems: "center",
        flex: 1,
    },
    box: {
        justifyContent: "center",
        alignItems: "center",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "black",
        height: 300,
        width: 300
    },
    question: {
        textAlign: "center",
        width: 200,
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
