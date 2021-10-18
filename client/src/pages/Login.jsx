//components
import { useState, useContext } from "react";
import axios from "axios";

//context
import { Context } from "../context/Context";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user, dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });

    try {
      const res = await axios.post("/auth/login", {
        username,
        password,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  console.log(user);

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="border-2"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          className="border-2"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="border-2">
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
