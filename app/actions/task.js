import api from "../api/task";
import constants from "../constants/task";

const task = {
    error(data) {
        return {
            error: data,
            type: constants.error
        };
    },

    get() {
        return {
            type: constants.get
        };
    },

    set(data) {
        return {
            items: data.message,
            type: constants.set
        };
    }
};

export default {
    get() {
        return dispatch => {
            dispatch(task.get());

            // Get the data
            return (
                api
                    .get()

                    // Transform the reponse
                    .then(response => response.json())

                    // Dispatch the data
                    .then(data => {
                        if (data.status === "error") {
                            dispatch(task.error(data));
                        } else {
                            dispatch(task.set(data));
                        }
                    })

                    // Or dispatch an error
                    .catch(data => dispatch(task.error(data)))
            );
        };
    }
};
