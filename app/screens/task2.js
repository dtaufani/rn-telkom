import React, { Component } from "react";
import { View, Text } from "react-native";

import styles from "../styles/task";

export default class Task2 extends Component {
    static navigationOptions = {
        title: "Task 2"
    };

    constructor(props) {
        super(props);

        this.state = {
            videos: [
                {
                    title: "Video 1",
                    url: "https://mystorage/video1.jpeg"
                },
                {
                    title: "Video 2",
                    url: "https://mystorage/video2.jpeg"
                },
                {
                    title: "Video 3",
                    url: "https://mystorage/video3.jpeg"
                }
            ]
        };
    }

    row(item, index) {
        return (
            <View key={"video" + index} style={styles.item}>
                <View style={styles.placeholder} />
                <Text style={styles.text}>{item.title}</Text>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.body}>
                {this.state.videos.map((item, index) => this.row(item, index))}
            </View>
        );
    }
}
