import React from "react";
import { BackHandler } from "react-native";
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";

import AppNavigator from "./configurations/router";

export default connect(state => ({
    navigation: state.navigation
}))(
    class AppNavigation extends React.Component {
        constructor(props) {
            super(props);

            this.onBackPress = this.onBackPress.bind(this);
        }

        componentDidMount() {
            BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
        }

        componentWillUnmount() {
            BackHandler.removeEventListener(
                "hardwareBackPress",
                this.onBackPress
            );
        }

        onBackPress() {
            const { dispatch, navigation } = this.props;
            if (navigation.index === 0) {
                return false;
            }

            dispatch(NavigationActions.back());
            return true;
        }

        render() {
            return <AppNavigator />;
        }
    }
);
