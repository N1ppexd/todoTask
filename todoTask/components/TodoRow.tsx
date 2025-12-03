import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

type TodoRowProps = {
    id: number,
    task: string,
    onDelete: (id: number) => void,
}

const TodoRow = ({ id, task, onDelete } : TodoRowProps) => {
    return (
        <View style={styles.row}>
            <Text>{task}</Text>
            <Pressable
            style={styles.deleteButton}
            onPress={() => onDelete(id)}>
                <Text style={styles.deleteButtonText}>X</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        marginTop:10
    },
    deleteButton:{
        backgroundColor:'#ffa5a5ff',
        marginLeft: 10,
        padding: 5,
        alignItems:'center',
        justifyContent:'center'
    },
    deleteButtonText:{
        color:'#fff',
        alignItems:'center',
        justifyContent:'center'
    }
})

export default TodoRow