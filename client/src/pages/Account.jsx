//components
import { useContext, useState } from "react";
import axios from "axios";

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
      <h1>this is account</h1>
      <div>
        <span> Update your account </span>
        <span> Delete account </span>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Profile picture</label>
        <img
          src={imageFolder + user.displayImg}
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover"
        />

        <label htmlFor="fileInput"></label>
        <input
          type="file"
          id="fileInput"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <label>Username</label>
        <input
          type="text"
          className="border-2"
          placeholder={user.username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Email</label>
        <input
          type="email"
          className="border-2"
          placeholder={user.email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          className="border-2"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </>
  );
};

export default Account;
