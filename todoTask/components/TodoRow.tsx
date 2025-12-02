import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

type TodoDataProps = {
    id:number,
    task:string
}

const TodoRow = ({task} : TodoDataProps) => {

    return (
        <View style={styles.row}>
            <Text>{task}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
    }
})

export default TodoRow