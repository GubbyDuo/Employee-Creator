import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobileNo: "",
        address: "",
        contractType: "",
        startDate: "",
        endDate: "",
        contractTime: "",
        hoursPerWeek: "",
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
                    onChange={handleChange}
                    required
                />
                <br />

                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    onChange={handleChange}
                    required
                />
                <br />

                <label htmlFor="email">Email Address:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    required
                />
                <br />

                <label htmlFor="mobileNo">Mobile Number:</label>
                <input
                    type="tel"
                    id="mobileNo"
                    name="mobileNo"
                    onChange={handleChange}
                    required
                />
                <br />

                <label htmlFor="address">Address:</label>
                <input
                    type="text"
                    id="address"
                    name="address"
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
                    onChange={handleChange}
                    required
                />
                <br />

                <label htmlFor="endDate">End Date:</label>
                <input
                    type="date"
                    id="endDate"
                    name="endDate"
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
                    onChange={handleChange}
                    required
                />
                <br />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Form;
