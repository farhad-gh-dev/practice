import { StatusBar } from "expo-status-bar";
import { Text, TextInput, SafeAreaView, Pressable } from "react-native";
import { global as styles } from "./styles/global";
import { Title, ItemsList } from "./components";
import { useState } from "react";
import uuid from "react-native-uuid";

export default function App() {
  const [todoItems, setTodoItems] = useState([
    { id: 1, text: "test item", checked: false },
  ]);
  const [newItemInput, setNewItemInput] = useState("");

  const handleAddNewItem = () => {
    if (!newItemInput) return;

    setTodoItems([
      ...todoItems,
      {
        id: uuid.v4(),
        text: newItemInput,
        checked: false,
      },
    ]);
    setNewItemInput("");
  };

  const handlePressCheckBox = (id) => {
    setTodoItems(
      todoItems.map((item) => {
        if (item.id === id) {
          item.checked = !item.checked;
        }
        return item;
      })
    );
  };

  const handleDeleteItem = (id) => {
    setTodoItems(todoItems.filter((item) => item.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Title>Your List</Title>

      <TextInput
        style={styles.input}
        onChangeText={setNewItemInput}
        value={newItemInput}
        placeholder="New Item"
        onSubmitEditing={() => handleAddNewItem()}
      />

      <ItemsList
        listData={todoItems}
        handlePressCheckBox={handlePressCheckBox}
        handleDeleteItem={handleDeleteItem}
      />

      <Pressable style={styles.button} onPress={() => handleAddNewItem()}>
        <Text style={styles.buttonText}>Add Item</Text>
      </Pressable>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
