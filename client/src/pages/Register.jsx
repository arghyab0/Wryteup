//components
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <>
      <div className="w-1/2 mx-auto text-center">
        <h1 className="font-heading text-5xl py-10">Register</h1>
        <form onSubmit={handleSubmit} className="font-ui text-lg ">
          <div className="pb-6">
            <label>Username</label>
            <input
              type="text"
              className="mx-8 p-1 border-2 rounded-lg border-gray-400 "
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="pb-6">
            <label>Email</label>
            <input
              type="email"
              className="ml-10 p-1 border-2 rounded-lg border-gray-400 "
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="pb-6">
            <label className="">Password</label>
            <input
              type="password"
              className="mx-8 p-1 border-2 rounded-lg border-gray-400"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="text-center px-2 py-1 border-2 rounded-lg border-gray-400"
          >
            Register
          </button>
        </form>

        {error && <div>Something went wrong!</div>}
      </div>
    </>
  );
};

export default Register;
