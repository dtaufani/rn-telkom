import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import appearance from "../styles/error";

export default class Error extends React.Component {
    render() {
        if (!this.props.error) {
            return null;
        }

        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    style={appearance.view}
                    onPress={this.props.press}
                >
                    <Text style={appearance.text}>{this.props.text}</Text>
                    <Text style={appearance.refresh}>Tap to refresh</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
