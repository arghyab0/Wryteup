const ArticleHeading = ({ heading }) => {
  return (
    <>
      <div className="md:w-3/5 mx-auto px-4 md:px-0 py-10 md:py-16 font-heading font-bold text-4xl md:text-5xl text-center">
        {heading}
      </div>
    </>
  );
};

export default ArticleHeading;
