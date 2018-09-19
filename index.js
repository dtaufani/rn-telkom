import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";

import { name as application } from "./app.json";
import AppNavigation from "./app/index";
import configuration from "./app/configurations/store";

const store = configuration();

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigation />
            </Provider>
        );
    }
}

AppRegistry.registerComponent(application, () => App);
