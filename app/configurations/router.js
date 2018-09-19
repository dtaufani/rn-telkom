import { createStackNavigator } from "react-navigation";

import Home from "../screens/home";
import Task1 from "../screens/task1";
import Task2 from "../screens/task2";
import Task3 from "../screens/task3";
import header from "../styles/header";

const Root = createStackNavigator(
    {
        home: {
            screen: Home
        },
        task1: {
            screen: Task1
        },
        task2: {
            screen: Task2
        },
        task3: {
            screen: Task3
        }
    },
    {
        navigationOptions: {
            headerStyle: header.body,
            headerTitleStyle: header.title
        }
    }
);

export default Root;
