import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import getUsers from "../../services/getUsers";
import User from "../user/user";
import axios from "axios";
import "./home.scss";

function Home() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const wrapper = async () => {
            let usersList: any = await getUsers();
            console.log(usersList);
            setUsers(usersList);
        };
        wrapper();
    }, []);

    const handleDeleteUser = async (id: any) => {
        await axios
            .post(`http://localhost:8080/user/delete/${id}`)
            .then(function (response) {
                console.log(response);
                setUsers(users.filter((user: any) => user.id !== id));
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div className="homePage">
            <div>
                <NavLink to={"./new"}>
                    <p>Create New User</p>
                </NavLink>
            </div>
            <div className="userBlock">
                <div className="userList">
                    {users
                        ? users.map((user: any) => {
                              console.log(user);
                              return (
                                  <User
                                      key={user.id}
                                      data={user}
                                      onDelete={handleDeleteUser}
                                  />
                              );
                          })
                        : null}
                </div>
            </div>
        </div>
    );
}

export default Home;
