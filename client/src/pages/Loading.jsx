//loading animation gif
import LoadingAnimation from "../assests/loading.gif";

const Loading = () => {
  return (
    <>
      <div className="w-screen mx-auto">
        <img src={LoadingAnimation} alt="Loading..." />
      </div>
    </>
  );
};

export default Loading;
