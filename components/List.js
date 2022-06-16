import { Text, View, StyleSheet } from "react-native";

const List = ({ data }) => {
  const renderedList = data.map((dataPoint, i) => {
    return (
      <View style={styles.listItem} key={i}>
        <Text style={styles.itemText}>{dataPoint}</Text>
      </View>
    );
  });
  return renderedList;
};

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});

export default List;
