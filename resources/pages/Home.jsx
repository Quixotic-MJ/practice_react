import axios from "axios";
import React, { useState } from "react";

function Home() {
    // UI State only (to show/hide the modal)
    const [profile, setProfile] = useState({
        name: "John Mark P. Magdasal",
        role: "Junior Developer",
        bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas sint ipsum veniam itaque earum in nisi autem, voluptatum temporibus dolorem laboriosam voluptatem quis blanditiis doloremque minus fugit eaque magnam labore?",
    });

    const [draftProfile, setDraftProfile] = useState({
        name: "",
        role: "",
        bio: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDraftProfile({
            ...draftProfile,
            [name]: value,
        });
    };

    const openModal = () => {
        setDraftProfile(profile)
        setShowModal(true)
    }

    const updateProfile = async () => {
        const { name, role, bio } = draftProfile;

        try {
            const res = await axios.put("/profileUpdate", { name, role, bio });
            setProfile({
                name: res.data.user.name,
                role: res.data.user.role,
                bio: res.data.user.bio,
            });
            setMessage(res.data.message)
            setShowModal(false)
        } catch (err) {
            console.log(err)
        }
    };

    const [message, setMessage] = useState("");

    const [showModal, setShowModal] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            {/* ----------------- 1. Profile Display Card ----------------- */}
            <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Banner Image */}
                <div className="h-32 bg-linear-to-r from-blue-500 to-indigo-600"></div>
                {}

                {/* Profile Content */}
                <div className="px-6 pb-6">
                    {/* Avatar (Overlapping the banner) */}
                    <div className="relative -mt-12 mb-4">
                        <div className="w-24 h-24 rounded-full border-4 border-white bg-gray-200 flex items-center justify-center overflow-hidden shadow-md">
                            {/* Placeholder for Image */}
                            <span className="text-3xl text-gray-400">👤</span>
                        </div>
                    </div>

                    {/* User Info */}
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">
                            {profile.name}
                        </h2>
                        <p className="text-sm text-indigo-600 font-semibold mb-2">
                            {profile.role}
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {profile.bio}
                        </p>
                    </div>

                    {/* Edit Trigger Button */}
                    <button
                        onClick={() => openModal()}
                        className="w-full py-2 px-4 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-lg transition-colors shadow-lg"
                    >
                        Edit Profile
                    </button>
                </div>
            </div>

            {/* ----------------- 2. Edit Modal (Overlay) ----------------- */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    {/* Modal Content */}
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all">
                        {/* Modal Header */}
                        <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                            <h3 className="text-lg font-bold text-gray-800">
                                Edit Profile
                            </h3>
                            <button
                                onClick={() => setShowModal(false)}
                                className="text-gray-400 hover:text-gray-600"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Modal Body (The Form) */}
                        <div className="p-6 space-y-4">
                            {/* Name Input */}
                            <div>
                                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={draftProfile.name}
                                    onChange={handleChange}
                                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm"
                                    placeholder="Enter your name"
                                />
                            </div>

                            {/* Role Input */}
                            <div>
                                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">
                                    Role / Job Title
                                </label>
                                <input
                                    type="text"
                                    name="role"
                                    value={draftProfile.role}
                                    onChange={handleChange}
                                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm"
                                    placeholder="e.g. Designer"
                                />
                            </div>

                            {/* Bio Input */}
                            <div>
                                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">
                                    Bio
                                </label>
                                <textarea
                                    rows="3"
                                    name="bio"
                                    value={draftProfile.bio}
                                    onChange={handleChange}
                                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm resize-none"
                                    placeholder="Tell us about yourself..."
                                ></textarea>
                            </div>

                            {message === "success" ? (
                                <span className="text-green-500">Profile updated successfully</span>
                            ) : message === "" ? (
                                <span></span>
                            ) : (
                                <span className="text-red-500">something is wrong</span>
                            )}
                        </div>

                        {/* Modal Footer */}
                        <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex justify-end gap-3">
                            <button
                                onClick={() => setShowModal(false)}
                                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors"
                            >
                                Cancel
                            </button>
                            <button onClick={() => updateProfile()} className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm transition-colors">
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
