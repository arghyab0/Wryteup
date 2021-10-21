//components
import { useContext, useState } from "react";
import axios from "axios";
import Identicon from "react-identicons";

//context
import { Context } from "../context/Context";

const Account = () => {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);
  const imageFolder = "http://localhost:3080/images/";

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch({ type: "UPDATE_START" });

    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.displayImg = filename;

      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
    console.log(success);
  };

  return (
    <>
      <div className="w-1/2 mx-auto text-center">
        <h1 className="font-heading text-5xl py-10">Account</h1>
        <form onSubmit={handleSubmit} className="font-ui text-lg ">
          <div className="pb-6">
            <label>Profile picture</label>
            {user?.displayImg ? (
              <img
                src={imageFolder + user.displayImg}
                alt="Profile"
                className="inline-flex w-12 h-12 mx-4 rounded-full object-cover"
              />
            ) : (
              <Identicon
                string={user._id}
                size="70"
                className="inline-flex w-12 h-12 mx-4 rounded-full object-scale-down"
              />
            )}

            <label htmlFor="fileInput"></label>
            <input
              type="file"
              id="fileInput"
              className="mx-2 -mr-36"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          <div className="pb-6">
            <label>Username</label>
            <input
              type="text"
              className="mx-8 p-1 border-2 rounded-lg border-gray-400"
              placeholder={user.username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="pb-6">
            <label>Email</label>
            <input
              type="email"
              className="ml-10 p-1 border-2 rounded-lg border-gray-400"
              placeholder={user.email}
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
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default Account;
