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
      {isFetching ? (
        <div className="font-body text-5xl text-center">Fetching...</div>
      ) : (
        <div className="w-1/2 mx-auto text-center">
          <h1 className="font-heading text-5xl py-10">Login</h1>
          <form onSubmit={handleSubmit} className="font-ui text-lg ">
            <div className="pb-6">
              <label className="">Username</label>
              <input
                type="text"
                className="mx-8 p-1 border-2 rounded-lg border-gray-400 "
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
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
              Login
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
