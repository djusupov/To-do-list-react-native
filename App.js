import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import Form from './components/Form';


export default function App() {
  const [ListOfItems, setListOfItem] = useState([
    { text: 'hello', key: '1' },
    { text: 'privet', key: '2' },
    { text: 'salam', key: '3' },
    { text: 'hi', key: '4' }
  ])

  const addHandler =(text)=>{
    setListOfItem((List)=>{
      return [
        {text: text, key: Math.random().toString(36).substring(7)},
        ...List
      ]
    })
  }

  const deleteHandler = (key)=>{
    setListOfItem((List)=>{
      return List.filter(ListOfItems => ListOfItems.key !== key)
    })
  }
  return (
    <View style={styles.container}>
      <Header />
      <Form addHandler={addHandler}/>
      <View>
        <FlatList data={ListOfItems} renderItem={({ item }) => (
          <ListItem elem={item} deleteHandler={deleteHandler}/>
        )} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
});
