import { View, Text, Image } from "react-native";
import { styles } from "./styles";

export function EmptyList() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../assets/clipboard.png")}
      />
      <Text style={[styles.text, styles.bold]}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.text}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
