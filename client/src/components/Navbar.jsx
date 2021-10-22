//components
import { useContext } from "react";
import { Link } from "react-router-dom";
import Identicon from "react-identicons";

//context
import { Context } from "../context/Context";

const Navbar = () => {
  const { user } = useContext(Context);

  return (
    <div className="w-screen h-24 md:h-32 top-0 flex items-center border-b border-gray-300">
      <div className="mx-4 md:mx-12">
        <h1 className="text-2xl md:text-6xl font-brand">
          <Link to="/">Wryteup</Link>
        </h1>
      </div>

      <div className="flex w-screen justify-end items-center mx-6 md:mx-10 ">
        <ul className="inline-flex list-none font-brand text-base md:text-2xl ">
          {user && (
            <li className="mx-3 md:mx-4">
              <Link to="/write">WRITE</Link>
            </li>
          )}
          {!user && (
            <li className="mx-3 md:mx-4">
              <Link to="/">ARTICLES</Link>
            </li>
          )}
          {!user && (
            <li className="mx-3 md:mx-4">
              <Link to="/login">LOGIN</Link>
            </li>
          )}
        </ul>
        {user && (
          <Link to="/account">
            {user.displayImg ? (
              <img
                src={user.displayImg}
                alt="Account"
                className="inline-flex w-8 h-8 md:w-12 md:h-12 md:mx-4 rounded-full object-cover"
              />
            ) : (
              <Identicon
                string={user._id}
                size="70"
                className="inline-flex w-8 h-8 md:w-12 md:h-12 md:mx-4 rounded-full object-scale-down"
              />
            )}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
