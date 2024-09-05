import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
    backgroundColor: "white",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#eeeeee",
  },
  itemSearchResult: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginVertical: 2,
    backgroundColor: "white",
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 18,
  },
  clearIconContainer: {
    paddingLeft: 10,
  },
  titleText: {
    fontSize: 28,
    textAlign: "center",
    marginVertical: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  card: {
    width: "45%",
    aspectRatio: 16 / 9, // 16:9 aspect ratio for a standard card size
    borderRadius: 20,
    overflow: "hidden",
    marginVertical: 10,
    marginHorizontal: 7,
    alignSelf: "center",
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
}); 