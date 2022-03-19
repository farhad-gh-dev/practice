import { Text, View } from "react-native";
import titleStyle from "./Title.style";

export default function Title({ children }) {
  return (
    <View style={titleStyle.container}>
      <Text style={titleStyle.text}>{children}</Text>
    </View>
  );
}
