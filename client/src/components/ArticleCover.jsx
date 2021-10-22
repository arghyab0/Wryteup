const ArticleCover = ({ coverFilename }) => {
  //cover image folder
  const imageFolder = "http://localhost:3080/images/";

  return (
    <>
      <img
        className="w-screen h-96 md:h-cover object-cover my-2"
        src={imageFolder + coverFilename}
        alt="Article cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = imageFolder + "default.jpg";
        }}
      />
    </>
  );
};

export default ArticleCover;
