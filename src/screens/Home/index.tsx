import { useState } from "react";
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import uuid from "react-native-uuid";
import { EmptyList } from "../../components/EmptyList";
import { ToDoList } from "../../components/ToDoList";
import { Information } from "../../components/Information";
import { styles } from "./styles";

interface Itask {
  id: string;
  task: string;
  isDone: boolean;
}

export function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<Itask[]>([]);

  function handlePressButton() {
    const id = uuid.v4().toString();
    setTasks([
      ...tasks,
      {
        id,
        task,
        isDone: false,
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

      <View style={styles.content}>
        <Information tasks={tasks} />
        <FlatList
          data={tasks}
          keyExtractor={(item: Itask) => item.id}
          renderItem={({ item }) => (
            <ToDoList item={item} setTasks={setTasks} tasks={tasks} />
          )}
          ListEmptyComponent={<EmptyList />}
        />
      </View>
    </View>
  );
}
