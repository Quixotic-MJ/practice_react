import axios from "axios";
import React, { useState } from "react";

function Sample() {
    const [tasks, setTasks] = useState([]);
    const [message, setMessage] = useState("");
    const [task, setTask] = useState("");

    const handleChange = (e) => {
        const {value} = e.target;
        setTask(value);
    }

    const addTask = async () => {
        if (!task) return;

        try {
            const res = await axios.post('/tasks', {title: task})
            const newTask = ({
                id: res.data.id,
                title: res.data.title
            })
            setTasks(prev => [...prev, newTask])
            setTask("")
        } catch (err) {
            console.log(err)
        }
    }

    const deleteTask = async (id) => {
        try {
            const res = await axios.delete(`/tasks/${id}`);
            // setTasks(prev =>
            //     prev.map(task =>
            //     task.id === id ? {...task, title: res.data.message} : task
            // ))

            setTasks(prev => prev.filter(task => task.id !== id))

        } catch (err) {
            console.log(err)
        }
    }
    
    

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            
            <div className="w-full max-w-md bg-white rounded-xl shadow-xl overflow-hidden">
                
                <div className="bg-blue-600 p-6 text-center">
                    <h1 className="text-2xl font-bold text-white">Task Master</h1>
                    <p className="text-blue-100 text-sm mt-1">Get things done, one at a time.</p>
                </div>

                <div className="p-4 bg-white border-b border-gray-100">
                    <div className="flex gap-2">
                        <input 
                            type="text"
                            value={task}
                            onChange={handleChange}
                            className="flex-1 p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                            placeholder="Enter a new task..."
                        />
                        <button onClick={() => addTask()} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors shadow-sm">
                            Add
                        </button>
                    </div>
                </div>

                {tasks.map((job) => (
                    <div key={job.id} className="p-4 bg-gray-50 h-80 overflow-y-auto">
                    
                    <div className="flex items-center justify-between p-3 mb-3 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                        <span key={job.title} className="text-gray-700 font-medium">{job.title}</span>
                        <button onClick={() => deleteTask(job.id)} className="text-gray-400 hover:text-red-500 p-2 rounded-full hover:bg-red-50 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                    </div>
                </div>
                ))}
                

            </div>
        </div>
    );
}

export default Sample;