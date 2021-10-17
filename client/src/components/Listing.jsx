//components
import { Link } from "react-router-dom";

const Listing = ({ article }) => {
  return (
    <>
      <div className="mx-4 my-6 border-2">
        <img
          src="https://i.pinimg.com/originals/54/ae/a9/54aea96a8a7e61acc6aabdc89ff17b2a.jpg"
          alt=""
          className="w-72 h-40 object-cover"
        />
        <div className="flex-col items-center my-4 cursor-pointer">
          <Link to={`/article/${article._id}`}> {article.title} </Link>
        </div>
      </div>
    </>
  );
};

export default Listing;
