import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Список дел</Text>
        </View>
    );
} 

const styles = StyleSheet.create({
    header: {
        paddingTop: 60,
        height: 100,
        backgroundColor: 'gray'
    }, 
    text: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center'
    }
})