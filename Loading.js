import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

export default function Loading() {
    return (
    <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.text}>Getting the fucking</Text>
        <Text style={styles.text}>weather</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#FDF6AA"
    },
    text : {
        color: "#2c2c2c",
        fontSize: 30


    }
});