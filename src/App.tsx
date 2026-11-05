import { useState, FormEvent } from "react";
import "./App.css";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", email); // replace with a real API call
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <form
        onSubmit={handleSubmit}
        className="card w-80 bg-base-100 shadow-md p-8 flex flex-col gap-3"
      >
        <h1 className="text-2xl font-bold mb-2">Log in</h1>
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-secondary">
          Log in
        </button>
      </form>
    </div>
  );
}