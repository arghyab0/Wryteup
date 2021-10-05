//components
import Navbar from "../components/Navbar";
import { HiPencilAlt, HiOutlineTrash } from "react-icons/hi";
import ReactMarkdown from "react-markdown";

const Article = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center py-10 ">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit iste
        fuga, nam, magnam modi enim quo
      </div>
      <div>
        <img
          className="w-screen h-full object-cover"
          src="https://resi.ze-robot.com/dl/4k/4k-desktop-wallpaper.-2560%C3%971080.jpg"
          alt="blog cover"
        />
      </div>
      <div className="mt-10 mb-14 w-1/2 mx-auto border-gray-900 border-2">
        <div className="flex">
          <span className="">
            image <br /> name <br /> date
          </span>
          <span className="flex">
            <HiPencilAlt className="text-2xl cursor-pointer" />
            <HiOutlineTrash className="text-2xl cursor-pointer" />
          </span>
        </div>
        <div className=" mt-14 border-gray-900 border-2 pb-64">
          <ReactMarkdown>
            # hello world **Lorem** ipsum dolor sit amet, consectetur
            adipisicing elit. Temporibus explicabo, ea delectus culpa ullam
            dolore ipsa facilis, modi laboriosam praesentium expedita aliquid in
            deleniti rem fugiat ducimus sapiente molestiae animi.
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default Article;
