//components
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import { HiPencilAlt, HiOutlineTrash } from "react-icons/hi";
import ReactMarkdown from "react-markdown";

const Article = () => {
  const [article, setArticle] = useState({});
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  //cover image
  const imageFolder = "http://localhost:3080/images/";

  useEffect(() => {
    const getArticle = async () => {
      const res = await axios.get("/articles/" + pathId);
      setArticle(res.data);
    };
    getArticle();
  }, [pathId]);

  return (
    <>
      <div className="flex w-3/5 mx-auto py-10 border-gray-900 border-2">
        {article.title}
      </div>
      <div>
        {article.cover ? (
          <img
            className="w-screen h-full object-cover"
            src={imageFolder + article.cover}
            alt="blog cover"
          />
        ) : (
          <img
            className="w-screen h-full object-cover"
            src="https://resi.ze-robot.com/dl/4k/4k-desktop-wallpaper.-2560%C3%971080.jpg"
            alt="blog cover"
          />
        )}
      </div>
      <div className="mt-10 mb-14 w-1/2 mx-auto border-gray-900 border-2">
        <div className="flex">
          <span className="">
            image
            <br />
            <Link to={`/?user=${article.username}`}>{article.username}</Link>
            <br />
            {new Date(article.createdAt).toDateString()}
          </span>
          <span className="flex">
            <HiPencilAlt className="text-2xl cursor-pointer" />
            <HiOutlineTrash className="text-2xl cursor-pointer" />
          </span>
        </div>
        <div className="mt-14 border-gray-900 border-2 pb-64">
          <ReactMarkdown>{article.desc}</ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default Article;
