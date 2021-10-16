//components
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const user = true;

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
          {user && <li className="mx-4 cursor-pointer">Logout</li>}
        </ul>
      </div>

      <div className="flex mx-10 items-center">
        {user && (
          <img
            src="https://media.voguebusiness.com/photos/5ef6493adf1073db3375835d/2:3/w_2560%2Cc_limit/kanye-west-gap-news-voguebus-mert-alas-and-marcus-piggott-june-20-story.jpg"
            alt="profile"
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        <FiSearch className="ml-4 text-2xl font-bold cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
