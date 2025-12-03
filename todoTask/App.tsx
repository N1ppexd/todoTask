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

  function deleteTask(id: number) {
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  return (
    <View style={styles.container}>
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
            <TodoRow key={task.id} id={task.id} task={task.task} onDelete={deleteTask} />
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
    margin: 64,
    backgroundColor: '#ffffffff',
    alignItems: 'baseline',
    justifyContent: 'center',
  },
  taskInput : {
    marginTop: 20,
    color : "#000000ff",
    backgroundColor: '#c8c8c8ff',
    alignItems: 'baseline',
    justifyContent: 'center',
    width: 200,
    height: 42,
    fontSize: 24,
    padding: 5,
  },
  submitButton : {
    marginTop: 10,
    padding: 5,
    backgroundColor: '#ff6868ff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 40
  },
  submitText:{
    color: "#fff",
    fontSize: 18,
  }
});
