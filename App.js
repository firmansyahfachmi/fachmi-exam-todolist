import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { v4 as uuidv4 } from "uuid";
import TaskList from "./screen/TaskList";
import AddTask from "./components/AddTask";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleAdd = (text) => {
    const newTask = {
      id: uuidv4(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const handleCheck = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <TaskList tasks={tasks} handleCheck={handleCheck} />
      <AddTask handleAdd={handleAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
  },
});

export default App;
