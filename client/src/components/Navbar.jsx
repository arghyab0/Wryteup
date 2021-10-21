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
            <img
              src={user.displayImg}
              alt="Account"
              className="inline-flex w-14 h-14 mx-4 rounded-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://animade.imgix.net/Plus-Plus%E2%80%94Teasers-0-00-26-09.png?crop=focalpoint&domain=animade.imgix.net&fit=crop&fm=pjpg&fp-x=0.5&fp-y=0.5&h=1450&ixlib=php-3.3.1&q=82&usm=20&w=1450";
              }}
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
