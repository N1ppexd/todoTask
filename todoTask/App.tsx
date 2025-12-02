import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, TextInput,  ScrollView } from 'react-native';
import TodoRow from './components/TodoRow';
import { TodoData } from './data/todoData';

let nextId = 0

export default function App() {

  const [newTask, addNewTask] = useState("")
  const [tasks, setTasks] = useState<Array<TodoData>>([])

  function addTask() {

    if(newTask==='') return

    nextId++

    setTasks(
      [
        ...tasks,
        {id: nextId, task: newTask}
      ]
    )
    
    
    addNewTask("")
  }

  return (
    <View style={styles.container}>
      <Text>{nextId.toString()}</Text>
      <TextInput 
        style={styles.taskInput}
        placeholder='Enter a task'
        value={newTask}
        onChangeText={addNewTask}
      />
      
      <Pressable
        style={styles.submitButton}
        onPress={addTask}>
          <Text style={styles.submitText}>Submit</Text>
      </Pressable>
      <StatusBar style="auto" />

      

      <ScrollView>
        {
          tasks.map(task => (
            <Text key={task.id}>{task.task}</Text>
          ))
        }
      </ScrollView>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskInput : {
    margin: 40,
    color : "#fff",
    backgroundColor: '#ff6363ff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    padding: 5,
  },
  submitButton : {
    margin: 10,
    padding: 5,
    backgroundColor: '#ff6868ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitText:{
    color: "#fff",
  }
});
