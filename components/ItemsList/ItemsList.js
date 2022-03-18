import { ScrollView, View, Text, Pressable } from "react-native";
import itemsListStyle from "./ItemsList.style";
import RadioInput from "../RadioInput/RadioInput";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function ItemsList({
  listData,
  handlePressCheckBox,
  handleDeleteItem,
}) {
  return (
    <ScrollView>
      {listData.map((item) => {
        return (
          <View style={itemsListStyle.itemContainer} key={item.id}>
            <RadioInput
              itemData={item}
              onPress={handlePressCheckBox}
              key={item.id}
            />
            <Pressable onPress={() => handleDeleteItem(item.id)}>
              <Text>
                <Icon name="delete" size={25} color="black" />
              </Text>
            </Pressable>
          </View>
        );
      })}
    </ScrollView>
  );
}
