//components
import { Link } from "react-router-dom";

const Listing = ({ article }) => {
  //cover image folder
  const imageFolder = "http://localhost:3080/images/";

  return (
    <>
      <div className="mb-4 md:mb-6">
        <Link to={`/articles/${article._id}`}>
          <img
            src={imageFolder + article.cover}
            alt="Article cover"
            className="w-80 h-44 object-cover cursor-pointer"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = imageFolder + "default.jpg";
            }}
          />
        </Link>
        <div className="w-72 h-14 mx-auto my-2 md:my-6 text-center font-ui text-lg cursor-pointer">
          <Link to={`/articles/${article._id}`}>
            {article.title.length > 54
              ? article.title.substring(0, 54) + "..."
              : article.title}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Listing;
