//assets
import DefaultCover from "../assests/default.jpg";

const ArticleCover = ({ coverFilename }) => {
  return (
    <>
      <img
        className="w-screen h-96 md:h-cover object-cover my-2"
        src={coverFilename}
        alt="Article cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = { DefaultCover };
        }}
      />
    </>
  );
};

export default ArticleCover;
