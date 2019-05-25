import {
    StyleSheet
} from "react-native";

const Styles = StyleSheet.create({
    appContainer: {
        flex: 1
    },
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#F5FCFF',
    },
    centerContent: {
        alignItems: "center",
        justifyContent: "center"
    },
    textLogo: {
        fontSize: 70,
        fontWeight: "bold",
        color: "#624CAB",
        marginBottom: 20
    },
    input: {
        width: "100%",
        fontSize: 16,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: "#624CAB",
        marginBottom: 5,
        borderRadius: 5,
    },
    button: {
        width: "100%",
        padding: 15,
        backgroundColor: "#624CAB",
        borderRadius: 5,
    },
    text_btn: {
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
    },
    messageContainer: {
        flex: 1
    },
    messageControlls: {
        borderTopWidth: 1,
        borderTopColor: "rgba(0, 0, 0, 0.1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
        paddingTop: 10,
        paddingBottom: 5
    },
    roundedButton: {
        borderRadius: 200,
        backgroundColor: "#624CAB",
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
        marginLeft: 5,
        marginBottom: 5,
    },
    roundedButtonSm: {
        borderRadius: 200,
        backgroundColor: "#624CAB",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        marginLeft: 5,
    },
    roundedSm: {
        borderRadius: 200
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#624CAB"
    }
})

export default Styles;