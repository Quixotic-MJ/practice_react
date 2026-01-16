import axios from "axios";
import React, { useState } from "react";

function Sample() {
    const [name, setName] = useState("");
    const [age, setAge] = useState();
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('/enter', {name, age});
            setMessage(res.data);
        } catch (err) {
            if (err.response && err.response.status === 422){
                setMessage('You are too young to enter the club')
            } else {
                setMessage("Something went wrong");
            }
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <input
                    type="number"
                    name="age"
                    placeholder="Enter your age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <br />
                <br />
                <button type="submit">Enter Club</button>

                <h1>{message}</h1>
            </form>
        </div>
    );
}

export default Sample;
