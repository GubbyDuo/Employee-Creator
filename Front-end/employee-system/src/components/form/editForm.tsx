import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function EditForm() {
    // const { user } = props.location.state;
    const location = useLocation();
    const data = location.state;
    console.log(data);

    const [formData, setFormData] = useState({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        mobileNo: data.mobileNo,
        address: data.address,
        contractType: data.contractType,
        startDate: data.startDate,
        endDate: data.endDate,
        contractTime: data.contractTime,
        hoursPerWeek: data.hoursPerWeek,
    });
    const navigate = useNavigate();

    function handleSubmit(event: any) {
        event.preventDefault();
        axios
            .post(
                "http://localhost:8080/user/add",
                {
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    mobileNo: formData.mobileNo,
                    address: formData.address,
                    contractType: formData.contractType,
                    startDate: formData.startDate,
                    endDate: formData.endDate,
                    employmentTime: formData.contractTime,
                    hoursPerWeek: formData.hoursPerWeek,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
            )
            .then(function (response) {
                console.log(response);
                navigate("/");
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
                <br />

                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
                <br />

                <label htmlFor="email">Email Address:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <br />

                <label htmlFor="mobileNo">Mobile Number:</label>
                <input
                    type="tel"
                    id="mobileNo"
                    name="mobileNo"
                    value={formData.mobileNo}
                    onChange={handleChange}
                    required
                />
                <br />

                <label htmlFor="address">Address:</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                />
                <br />

                <label htmlFor="contractType">Contract Type:</label>
                <input
                    type="radio"
                    id="permanent"
                    name="contractType"
                    value="Permanent"
                    onChange={handleChange}
                    required
                />
                <label htmlFor="permanent">Permanent</label>
                <input
                    type="radio"
                    id="contract"
                    name="contractType"
                    value="Contract"
                    onChange={handleChange}
                    required
                />
                <label htmlFor="contract">Contract</label>
                <br />

                <label htmlFor="startDate">Start Date:</label>
                <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                />
                <br />

                <label htmlFor="endDate">End Date:</label>
                <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    required
                />
                <br />

                <label htmlFor="contractTime">Contract Time:</label>
                <input
                    type="radio"
                    id="fullTime"
                    name="contractTime"
                    value="fullTime"
                    onChange={handleChange}
                    required
                />
                <label htmlFor="fullTime">Full-Time</label>
                <input
                    type="radio"
                    id="PartTime"
                    name="contractTime"
                    value="partTime"
                    onChange={handleChange}
                    required
                />
                <label htmlFor="partTime">Part-Time</label>

                <br />

                <label htmlFor="hoursPerWeek">Hours per Week:</label>
                <input
                    type="number"
                    id="hoursPerWeek"
                    name="hoursPerWeek"
                    value={formData.hoursPerWeek}
                    onChange={handleChange}
                    required
                />
                <br />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default EditForm;
