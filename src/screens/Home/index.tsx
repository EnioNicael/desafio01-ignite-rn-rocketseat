import { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function Home() {
  const [task, setTask] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../../assets/Logo.png")} />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Adicione uma nova tarefa"
          onChangeText={setTask}
          value={task}
        />
        <TouchableOpacity style={styles.button}>
          <Image source={require("../../../assets/plus.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
