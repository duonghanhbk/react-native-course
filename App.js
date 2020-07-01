import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList
} from "react-native";

import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);

  const addGoalHandler = enteredGoal => {
    setCourseGoal(currentGoal => [
      ...currentGoal,
      { id: Math.random().toString(), value: enteredGoal }
    ]);
  };

  const removeGoalHandler = goalId => {
    setCourseGoal(currentGoal => {
      return currentGoal.filter(goal => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        data={courseGoal}
        keyExtractor={(item, index) => item.id}
        renderItem={itemData => (
          <GoalItem
            title={itemData.item.value}
            id={itemData.item.id}
            onDelete={removeGoalHandler}
          />
        )}
      ></FlatList>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 30
  }
});
