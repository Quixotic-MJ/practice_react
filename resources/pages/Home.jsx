import axios from "axios";
import React, { useState } from "react";

function Home() {
    const [comment, setComment] = useState({
        id: new Date().toDateString(),
        username: "John Mark",
        initial: "JM",
        text: "",
        char: 0,
    });

    const [comments, setComments] = useState([]);
    const [message, setMessage] = useState("");

    const postComment = async () => {
        const { text } = comment;

        if (!text) {
            return;
        }

        try {
            const res = await axios.post("/comment", text);

            if (res.data.status === "approved") {
                setComment({
                    ...comment,
                    text: res.data.text,
                });

                setComments([(prev) => [...prev, comment]]);
                setComment({
                    ...comment,
                    text: "",
                });
            } else {
                setMessage(res.data.text);
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="flex flex-col items-center gap-6 p-6 bg-gray-100 min-h-screen">
            {/* --- Input Section --- */}
            <div className="w-full max-w-xl bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-4">
                    <label htmlFor="comment" className="sr-only">
                        Your Comment
                    </label>
                    <textarea
                        id="comment"
                        value={comment.comment}
                        onChange={(e) =>
                            setComment({
                                ...comment,
                                text: e.target.value,
                                char: e.target.value.length,
                            })
                        }
                        rows="4"
                        className="w-full p-3 text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none resize-none transition-all"
                        placeholder="Write a comment..."
                    ></textarea>
                </div>

                {/* Footer with Actions */}
                <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-t border-gray-100">
                    <span className="text-xs text-gray-500">
                        {comment.char} chars
                    </span>
                    <div className="flex gap-2">
                        <button
                            type="button"
                            onClick={() => {
                                setComment({
                                    ...comment,
                                    comment: "",
                                });
                            }}
                            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            onClick={postComment}
                            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 shadow-sm transition-colors"
                        >
                            Post Comment
                        </button>
                    </div>
                </div>
            </div>

            {/* --- Display Section (Static Mockup) --- */}
            <div className="w-full max-w-xl">
                <h3 className="text-sm font-semibold text-gray-500 mb-3">
                    Recent Comments
                </h3>

                <h2 className="text-red-500">{message}</h2>

                {comments.map((com) => (
                    <div key={com.id} className="space-y-4">
                        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                                {com.initial}
                            </div>

                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-sm font-semibold text-gray-900">
                                        {com.username}
                                    </span>
                                    <span className="text-xs text-gray-400">
                                        • {com.id}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-700">
                                    {com.comment}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
