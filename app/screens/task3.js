import React from "react";
import { View, FlatList, Image } from "react-native";
import { connect } from "react-redux";

import Loader from "../components/loader";
import Error from "../components/error";

import actions from "../actions/task";
import styles from "../styles/task";

export default connect(state => ({
    task: state.task
}))(
    class Task3 extends React.Component {
        static navigationOptions = {
            title: "Task 3"
        };

        constructor(props) {
            super(props);

            this.refresh = this.refresh.bind(this);
            this.row = this.row.bind(this);
        }

        componentWillMount() {
            this.props.dispatch(actions.get());
        }

        refresh() {
            this.props.dispatch(actions.get());
        }

        row({ index, item }) {
            return (
                <View key={"image" + index} style={{ flex: 1 }}>
                    <Image source={{ uri: item }} style={styles.image} />
                </View>
            );
        }

        render() {
            if (this.props.task.loading) {
                return (
                    <View style={styles.body}>
                        <Loader
                            loading={this.props.task.loading}
                            size="large"
                            color="#0d57a7"
                        />
                    </View>
                );
            }

            if (this.props.task.error) {
                console.log(this.props.task.error);

                return (
                    <Error
                        error={this.props.task.error}
                        press={this.refresh}
                        text={"Unable to load the data"}
                    />
                );
            }

            return (
                <View style={styles.body}>
                    <FlatList
                        data={this.props.task.items}
                        keyExtractor={(item, index) => index}
                        refreshing={this.props.task.loading}
                        renderItem={this.row}
                        numColumns={2}
                    />
                </View>
            );
        }
    }
);
