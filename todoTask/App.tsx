import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, TextInput,  ScrollView } from 'react-native';
import TodoRow from './components/TodoRow';
import { TodoData } from './data/todoData';
import AntDesign from '@expo/vector-icons/AntDesign';

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

      <Text style={styles.todoTitle}>TODO</Text>

      <View style={styles.addTaskContainer}>
        <TextInput 
        style={styles.taskInput}
        placeholder='Enter a task'
        value={newTask}
        onChangeText={addNewTask}
        />
      
        <Pressable
        style={styles.submitButton}
        onPress={addTask}>
          <AntDesign name="enter" size={24} color="black" />
        </Pressable>
      </View>
      
      <StatusBar style="auto" />

      <Text style={styles.tasksTitle}>Tasks:</Text>

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
    margin: 24,
    backgroundColor: '#ffffffff',
    alignItems: 'baseline',
    justifyContent: 'center',
  },
  todoTitle:{
    marginTop:20,
    fontSize: 32,
  },
  tasksTitle:{
    marginTop:20,
    fontSize:28,
  },
  addTaskContainer:{
    marginTop: 10,
    flexDirection:'row',
    height: 42,
  },
  taskInput : {
    color : "#000000ff",
    backgroundColor: '#c8c8c8ff',
    alignItems: 'baseline',
    justifyContent: 'center',
    width: 200,
    fontSize: 24,
    padding: 5,
  },
  submitButton : {
    padding: 5,
    marginLeft: 5,
    backgroundColor: '#ff6868ff',
    alignItems: 'center',
    justifyContent: 'center',
    width:64,
  },
  submitText:{
    color: "#fff",
    fontSize: 18,
  }
});
