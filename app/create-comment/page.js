"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateCommentPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!name) newErrors.name = "Field is required";
    if (!email) newErrors.email = "Field is required";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Must be a valid email";
    if (!body) newErrors.body = "Field is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      
      router.push("/dashboard");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create Comment</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
    
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name}</p>
          )}
        </div>

       
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            className="w-full border rounded px-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        
        <div>
          <label className="block mb-1 font-medium">Body</label>
          <textarea
            className="w-full border rounded px-3 py-2"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          {errors.body && (
            <p className="text-red-500 text-sm">{errors.body}</p>
          )}
        </div>

        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => router.push("/dashboard")}
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
