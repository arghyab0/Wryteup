//components
import Listing from "./Listing";

const Listings = () => {
  return (
    <>
      <div className="w-screen h-auto pt-16 pb-10 bg-green-400">
        <div className="flex justify-center py-8 border-2">All articles</div>
        <div className=" flex flex-wrap justify-center pt-8 pb-14 px-80 border-2">
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
        </div>
      </div>
    </>
  );
};

export default Listings;
