import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default function Form({addHandler}) {
    const [text, setValue] = useState('')
    const onChange =(text)=>{
        setValue(text)
    }
    return (
        <View>
            <TextInput style={styles.inp} onChangeText={onChange} placeholder='Описание задачи'/>
            <Button color='black' onPress={()=>addHandler(text)} title="Добавить задачу"/>
        </View>
    );
}

const styles = StyleSheet.create({
    inp:{
        borderBottomWidth: 1,
        width: '60%',
        borderColor: '#000',
        marginHorizontal: '20%',
        marginVertical:30,
        padding: 15
    }
})