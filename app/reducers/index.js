import { combineReducers } from "redux";
import navigation from "./navigation";
import task from "./task";

const reducer = combineReducers({
    navigation,
    task
});

export default reducer;
