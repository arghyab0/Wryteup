//components
import { Link } from "react-router-dom";

const Listing = ({ article }) => {
  //cover image folder
  const imageFolder = "http://localhost:3080/images/";

  return (
    <>
      <div className="my-6">
        <Link to={`/articles/${article._id}`}>
          <img
            src={imageFolder + article.cover}
            alt="Article cover"
            className="w-80 h-44 object-cover cursor-pointer"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://www.adobe.com/content/dam/cc/us/en/creativecloud/illustration-adobe-illustration/vector-art/desktop/vector-art_P1_900x420.jpg.img.jpg";
            }}
          />
        </Link>
        <div className="w-4/5 mx-auto my-6 text-center font-ui text-xl cursor-pointer">
          <Link to={`/articles/${article._id}`}> {article.title} </Link>
        </div>
      </div>
    </>
  );
};

export default Listing;
