import axios from "axios";

const getUsers = async () => {
    return axios
        .get("http://localhost:8080/users")
        .then(function (response) {
            console.log(response.data);
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
};

export default getUsers;
