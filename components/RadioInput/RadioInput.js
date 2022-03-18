import { Text, View, TouchableOpacity } from "react-native";
import radioInputStyle from "./RadioInput.style";

export default function RadioInput({ itemData, onPress = () => {} }) {
  const { id, text, checked } = itemData;
  return (
    <TouchableOpacity
      style={radioInputStyle.container}
      onPress={() => onPress(id)}
    >
      <View style={radioInputStyle.checkbox}>
        {checked ? <View style={radioInputStyle.checkboxDot}></View> : null}
      </View>
      <View style={radioInputStyle.textContainer}>
        <Text
          style={[
            radioInputStyle.text,
            checked ? radioInputStyle.textLineThrough : null,
          ]}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
