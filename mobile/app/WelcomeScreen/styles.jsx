import { StyleSheet } from "react-native"

const styles = StyleSheet.create({ 
    screen: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    
    login_button: {
        width: "auto",
        height: "auto",
        paddingVertical: 15,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gray"
    },

    singup_button: {
        width: "auto",
        height: "auto",
        marginHorizontal: 130,
        paddingVertical: 15,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gray"
    }
})


export default styles