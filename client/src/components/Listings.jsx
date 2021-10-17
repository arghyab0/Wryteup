//components
import Listing from "./Listing";

const Listings = ({ articles }) => {
  return (
    <>
      <div className="w-screen h-auto pt-16 pb-10 bg-green-400">
        <div className="flex justify-center py-8 border-2">All articles</div>
        <div className=" flex flex-wrap justify-center pt-8 pb-14 px-80 border-2">
          {articles.map((item) => {
            return <Listing key={item._id} article={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Listings;
