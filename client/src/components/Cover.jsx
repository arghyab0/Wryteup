//assets
import { ReactComponent as CoverImage } from "../assests/cover.svg";

const Cover = () => {
  return (
    <>
      <div className="pt-14 md:pt-20 pb-2 md:pb-4">
        <div className="w-screen md:w-3/5 mx-auto">
          <CoverImage className="w-full h-full" />
        </div>
        <div className="w-screen md:w-3/5 mx-auto px-4 md:px-0 pt-10 pb-6 md:pb-10 font-heading font-bold text-4xl md:text-5xl text-center">
          A few words about this blog platform and how this site was made
        </div>
        <div className="md:w-2/5 mx-auto px-4 md:px-0 pb-12 md:pb-10 font-ui text-lg md:text-xl text-center border-black border-b-2">
          Why I made this platform and what I learned?
        </div>
      </div>
    </>
  );
};

export default Cover;
