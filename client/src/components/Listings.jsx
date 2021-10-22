//components
import Listing from "./Listing";

const Listings = ({ articles, page }) => {
  return (
    <>
      <div className="w-screen pt-6 md:pt-16 pb-4 md:pb-10">
        {page === "home" && (
          <div className="w-3/5 mx-auto py-10 font-heading font-bold text-4xl md:text-5xl text-center">
            All articles
          </div>
        )}
        <div
          className={
            page === "home"
              ? "w-1/2 mx-auto flex flex-wrap justify-around"
              : "w-4/5 mx-auto flex flex-wrap justify-around"
          }
        >
          {articles.map((item) => {
            return <Listing key={item._id} article={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Listings;
