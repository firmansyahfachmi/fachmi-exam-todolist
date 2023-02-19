import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddTask = ({ handleAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (text) {
      handleAdd(text);
      setText('');
    }
  };

  return (
    <View style={styles.addTask}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={(value) => setText(value)}
        placeholder="Add a task..."
        placeholderTextColor="#BEBEBE"
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Icon name="plus" size={20} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  addTask: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    elevation: 5,
  },
  input: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 10,
    color: '#333333',
    fontSize: 16
},
button: {
  backgroundColor: '#FF8C00',
  padding: 15,
  borderRadius: 5,
  marginLeft: 5,
},
});

export default AddTask;
