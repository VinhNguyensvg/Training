import { StyleSheet, Text, View } from "react-native";
import NumPad from "./Components/NumPad";
import Operation from "./Components/Operation";
import Display from "./Components/Display";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ flex: 1, backgroundColor: "red", width: "100%" }}>
        <Display></Display>
      </View>
      <View
        style={{
          flex: 3,
          backgroundColor: "black",
          width: "100%",
          flexDirection: "row",
          margin: 10,
        }}
      >
        <View
          style={{
            width: "80%",
            backgroundColor: "pink",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <NumPad></NumPad>
        </View>
        <View
          style={{
            width: "20%",
            backgroundColor: "green",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Operation></Operation>
        </View>
      </View>
    </View>
  );
}
