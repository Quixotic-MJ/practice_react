import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Home() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const nav = useNavigate();

    const handleLogin = () => {
        axios
            .post("login", {
                email: email,
                password: password,
            })
            .then((res) => {
                if (res.data === true) {
                    nav('/home');
                } else {
                    setMessage("Invalid Credentials");
                }
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

                <form className="space-y-4">
                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="button"
                        onClick={() => handleLogin()}
                        className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                        Login
                    </button>

                    <h2 className="text-red-500 text-center">{message}</h2>
                </form>

                {/* Footer */}
                <p className="text-sm text-center text-gray-500 mt-6">
                    Don’t have an account?{" "}
                    <span className="text-blue-600 cursor-pointer">
                        Sign up
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Home;
