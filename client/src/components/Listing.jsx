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
          alt="article cover"
          className="w-80 h-40 object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://www.adobe.com/content/dam/cc/us/en/creativecloud/illustration-adobe-illustration/vector-art/desktop/vector-art_P1_900x420.jpg.img.jpg";
          }}
        />
        <div className="flex-col items-center my-4 cursor-pointer">
          <Link to={`/articles/${article._id}`}> {article.title} </Link>
        </div>
      </div>
    </>
  );
};

export default Listing;
