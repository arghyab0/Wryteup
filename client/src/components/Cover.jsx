//assets
import { ReactComponent as CoverImage } from "../assests/cover.svg";

const Cover = () => {
  return (
    <>
      <div className="pt-20 pb-4">
        <div className="w-screen md:w-3/5 mx-auto">
          <CoverImage className="w-full" />
        </div>
        <div className=" lg:w-3/5 mx-auto py-10 font-heading font-bold text-5xl text-center">
          A few words about this blog platform and how this site was made
        </div>
        <div className="w-2/5 mx-auto pb-8 font-ui text-xl text-center border-black border-b-2">
          Why I made this platform and what I learned?
        </div>
      </div>
    </>
  );
};

export default Cover;
