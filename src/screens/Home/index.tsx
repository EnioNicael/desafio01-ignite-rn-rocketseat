import { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import uuid from "react-native-uuid";
import { EmptyList } from "../../components/EmptyList";
import { styles } from "./styles";

interface Itask {
  id: string;
  task: string;
}

export function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<Itask[] | []>([]);

  const handlePressButton = () => {
    const id = uuid.v4().toString();
    setTasks([
      ...tasks,
      {
        id,
        task,
      },
    ]);
    setTask("");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../../assets/logo.png")} />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Adicione uma nova tarefa"
          onChangeText={setTask}
          value={task}
        />
        <TouchableOpacity style={styles.button} onPress={handlePressButton}>
          <Image source={require("../../../assets/plus.png")} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item: Itask) => item.id}
        renderItem={({ item }) => <Text style={styles.xablau}>{item.task}</Text>}
        ListEmptyComponent={<EmptyList />}
      />
    </View>
  );
}
