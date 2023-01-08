import { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

interface Iprops {
  id: string;
  task: string;
  isDone: boolean;
}

interface Props {
  item: Iprops;
  setTasks: (prop: Iprops[]) => void;
  tasks?: Iprops[];
}

export function ToDoList(props: Props) {
  const { id, task, isDone } = props.item;
  const { tasks, setTasks } = props;

  const [isSelected, setSelection] = useState(false);

  function changeTodoItem(id: string) {
    return tasks?.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isDone: !isDone,
        };
      }
      return task;
    });
  }

  function handleSelect() {
    setSelection(!isSelected);
    const result = changeTodoItem(id) || [];
    setTasks(result);
  }

  function handleRemove() {
    if (tasks) {
      const result = tasks.filter((item) => item.id !== id);
      setTasks(result);
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchableContainer} onPress={handleSelect}>
        <TouchableOpacity
          style={
            isSelected ? [styles.checkbox, styles.selected] : styles.checkbox
          }
        >
          {isSelected && (
            <Image source={require("../../../assets/check.png")} />
          )}
        </TouchableOpacity>
        <Text style={isSelected ? [styles.text, styles.done] : styles.text}>
          {task}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleRemove}>
        <Image source={require("../../../assets/trash.png")} />
      </TouchableOpacity>
    </View>
  );
}
