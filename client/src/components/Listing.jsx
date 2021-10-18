//components
import { Link } from "react-router-dom";

const Listing = ({ article }) => {
  //cover image folder
  const imageFolder = "http://localhost:3080/images/";

  return (
    <>
      <div className="mx-4 my-6 border-2">
        <img
          src={imageFolder + article.cover}
          alt=""
          className="w-72 h-40 object-cover"
        />
        <div className="flex-col items-center my-4 cursor-pointer">
          <Link to={`/articles/${article._id}`}> {article.title} </Link>
        </div>
      </div>
    </>
  );
};

export default Listing;
