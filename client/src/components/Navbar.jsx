//components
import { useContext } from "react";
import { Link } from "react-router-dom";

//context
import { Context } from "../context/Context";

const Navbar = () => {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="w-screen h-32 top-0 flex items-center bg-red-200">
      <div className="flex mx-8">
        <h1 className="text-3xl font-extrabold">Wryteup</h1>
      </div>

      <div className="flex-auto">
        <ul className="flex justify-center list-none">
          <li className="mx-4 cursor-pointer">Home</li>
          <li className="mx-4 cursor-pointer">Write</li>
          {!user && <li className="mx-4 cursor-pointer">Register</li>}
          {!user && <li className="mx-4 cursor-pointer">Login</li>}
          {user && (
            <li className="mx-4 cursor-pointer" onClick={handleLogout}>
              Logout
            </li>
          )}
        </ul>
      </div>

      <div className="flex mx-10 items-center">
        <Link to="/account">
          {user && (
            <img
              src={user.displayImg}
              alt="Account"
              className="w-12 h-12 rounded-full object-cover"
            />
          )}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
