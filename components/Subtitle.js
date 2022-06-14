import { Text, View, StyleSheet } from "react-native";

const Subtitle = ({ children }) => {
  return (
    <View style={styles.subContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subTitle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    color: "#e2b497",
  },
  subContainer: {
    padding: 6,
    marginVertical: 4,
    marginHorizontal: 24,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
});
