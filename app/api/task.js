export default {
    get: async function() {
        const url = "https://dog.ceo/api/breed/boxer/images";

        return fetch(url, {
            headers: {
                Accept: "application/json"
            },
            method: "GET"
        });
    }
};
