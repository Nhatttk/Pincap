import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "flex-end",
      },
      headerContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10
      },
      headerText: {
        fontWeight: "bold",
        fontSize: 16
      },
      bottomSheet: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingVertical: 30,
        paddingHorizontal: 20,
      },
      bottomSheetItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 20,
      },
      bottomSheetItemText: {
        marginLeft: 10,
      },
});
