import { NavLink } from "react-router-dom";
import "./user.scss";
import axios from "axios";

const User = ({ data, onDelete }: any) => {
    const handleDeleteUser = () => {
        onDelete(data.id);
    };

    return (
        <div className="userBorder">
            <div>
                {data.firstName} {data.lastName}
            </div>
            <div>{data.contractType}</div>
            <div>{data.email}</div>
            <br />
            <div>
                <NavLink
                    key={data.id}
                    state={data}
                    to={`./user/edit/${data.id}`}
                >
                    Edit
                </NavLink>
                <a className="deleteTag" onClick={() => handleDeleteUser()}>
                    Delete
                </a>
            </div>
        </div>
    );
};

export default User;
