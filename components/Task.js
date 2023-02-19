import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Checkbox from '@react-native-community/checkbox';

const Task = ({ task, handleCheck }) => {
  return (
    <View style={styles.task}>
      {/* <Checkbox
        value={task.completed}
        onValueChange={() => handleCheck(task.id)}
      /> */}
      <Text style={styles.taskText}>{task.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 3,
  },
  taskText: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default Task;
