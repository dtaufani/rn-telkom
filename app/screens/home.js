import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "../styles/home";

export default class Home extends Component {
    static navigationOptions = {
        title: "Home"
    };

    render() {
        return (
            <View style={styles.body}>
                <View style={styles.container}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate("task1")}
                    >
                        <Text style={styles.text}>Task 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate("task2")}
                    >
                        <Text style={styles.text}>Task 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate("task3")}
                    >
                        <Text style={styles.text}>Task 3</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
