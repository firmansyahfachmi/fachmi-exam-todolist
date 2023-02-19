import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from '../components/Task';

const TaskList = ({ tasks, handleCheck }) => {
  return (
    <View style={styles.taskList}>
      {tasks.map((task) => (
        <Task key={task.id} task={task} handleCheck={handleCheck} />
      ))}
      {tasks.length === 0 && (
        <Text style={styles.noTasks}>No tasks to display</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  taskList: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  noTasks: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default TaskList;
