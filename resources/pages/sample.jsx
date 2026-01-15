import React, { useState } from "react";

function Sample() {
    const [text, setText] = useState("");
    const [fruits, setFruits] = useState([]);

    const AddToList = () => {
        if (text.trim() === "") {
            return;
        }

        setFruits((prev) => [...prev, text]);
        setText("");
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold text-center mb-6">Fruit List</h1>

            <div className="flex gap-2 mb-4">
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Add a fruit to the list?"
                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button onClick={AddToList} className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
                    Add to the List
                </button>
            </div>

            <ul className="space-y-2">
                {fruits.map((fruit) => (
                    <li className="flex justify-between items-center px-4 py-2 bg-gray-100 rounded-lg">
                        <span key={fruit}>{fruit}</span>
                        <button onClick={() => setFruits(fruits.filter(i => i !== fruit))} className="px-3 py-1 text-sm text-white bg-red-500 rounded-lg hover:bg-red-600 transition">
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sample;
