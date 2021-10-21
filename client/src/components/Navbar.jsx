//components
import { useContext } from "react";
import { Link } from "react-router-dom";
import Identicon from "react-identicons";

//context
import { Context } from "../context/Context";

const Navbar = () => {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="w-screen h-32 top-0 flex items-center border-b border-gray-300">
      <div className="mx-12">
        <h1 className="text-6xl font-heading">Wryteup</h1>
      </div>

      <div className="flex w-screen justify-end items-center mx-10 ">
        <ul className="inline-flex list-none font-heading text-2xl ">
          <li className="mx-4">
            <Link to="/">HOME</Link>
          </li>
          <li className="mx-4">
            <Link to="/write">WRITE</Link>
          </li>
          {!user && (
            <li className="mx-4">
              <Link to="/register">REGISTER</Link>
            </li>
          )}
          {!user && (
            <li className="mx-4">
              <Link to="/login">LOGIN</Link>
            </li>
          )}
          {user && (
            <li className="mx-4" onClick={handleLogout}>
              LOGOUT
            </li>
          )}
        </ul>
        {user && (
          <Link to="/account">
            {user.displayImg ? (
              <img
                src={user.displayImg}
                alt="Account"
                className="inline-flex w-12 h-12 mx-4 rounded-full object-cover"
              />
            ) : (
              <Identicon
                string={user._id}
                size="70"
                className="inline-flex w-12 h-12 mx-4 rounded-full object-scale-down"
              />
            )}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
