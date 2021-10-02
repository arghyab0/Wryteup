//components
import Article from "./Article";

const Articles = () => {
  return (
    <>
      <div className="w-screen h-auto pt-16 pb-10 bg-green-400">
        <div className="flex justify-center py-8 border-2">All articles</div>
        <div className=" justify-center pt-8 pb-14 border-2">
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
        </div>
      </div>
    </>
  );
};

export default Articles;
