import React, { memo, useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  return (
    <Modal visible={false}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          value={enteredGoal}
          onChangeText={goalInputHandler}
        />
        <Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  input: {
    width: "80%",
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 10
  }
});

export default memo(GoalInput);
