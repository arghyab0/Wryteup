//components
import { useContext, useState } from "react";
import axios from "axios";
import Identicon from "react-identicons";
import Loading from "./Loading";

//context
import { Context } from "../context/Context";

const Account = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayImg, setDisplayImg] = useState(null);
  const [success, setSuccess] = useState(false);

  const { user, dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch({ type: "UPDATE_START" });

    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
      displayImg,
    };

    // if (file) {
    //   const data = new FormData();
    //   const filename = Date.now() + file.name;
    //   data.append("name", filename);
    //   data.append("file", file);
    //   updatedUser.displayImg = filename;

    //   try {
    //     await axios.post("/upload", data);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }

    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
    console.log(success);
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <>
      {isFetching ? (
        <Loading />
      ) : (
        <div className="mx-2 md:w-1/2 md:mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-5xl py-6 md:py-10">
            Account
          </h1>
          <form onSubmit={handleSubmit} className="font-ui text-lg ">
            <div className="pb-6">
              <label>Profile picture</label>
              {user?.displayImg ? (
                <img
                  src={user.displayImg}
                  alt="Profile"
                  className="inline-flex w-12 h-12 mx-2 md:mx-4 rounded-full object-cover"
                />
              ) : (
                <Identicon
                  string={user._id}
                  size="70"
                  className="inline-flex w-12 h-12 mx-2 md:mx-4 rounded-full object-scale-down"
                />
              )}
              {/* <input
                type="file"
                id="fileInput"
                className="mx-2 -mr-36"
                onChange={(e) => setFile(e.target.files[0])}
              /> */}
              <input
                type="text"
                className="mx-2 p-1 border-2 rounded-lg border-gray-400"
                placeholder="New image link"
                onChange={(e) => setDisplayImg(e.target.value)}
              />
            </div>

            <div className="pb-6">
              <label>Username</label>
              <input
                type="text"
                className="mx-2 md:mx-8 p-1 border-2 rounded-lg border-gray-400"
                placeholder={user.username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="pb-6">
              <label>Email</label>
              <input
                type="email"
                className="mx-2 md:mx-8  p-1 border-2 rounded-lg border-gray-400"
                placeholder={user.email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="pb-6">
              <label className="">Password</label>
              <input
                type="password"
                className="mx-2 md:mx-8 p-1 border-2 rounded-lg border-gray-400"
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

          <div className="my-4 md:my-6">OR</div>

          {user && (
            <button
              className="text-center px-2 py-1 font-ui text-lg bg-red-500 text-white border-2 border-white rounded-lg"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Account;
