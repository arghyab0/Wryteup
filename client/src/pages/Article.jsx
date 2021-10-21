//components
import { useState, useEffect, useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import { HiPencilAlt, HiOutlineTrash } from "react-icons/hi";
import ReactMarkdown from "react-markdown";
import ArticleHeading from "../components/ArticleHeading";
import ArticleCover from "../components/ArticleCover";
import Footer from "../components/Footer";

//context
import { Context } from "../context/Context";

const Article = () => {
  const [article, setArticle] = useState({});
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  const { user } = useContext(Context);

  useEffect(() => {
    const getArticle = async () => {
      const res = await axios.get("/articles/" + pathId);
      setArticle(res.data);
    };
    getArticle();
  }, [pathId]);

  const handleDelete = async () => {
    try {
      await axios.delete("/articles/" + pathId, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <ArticleHeading heading={article.title} />
      <ArticleCover coverFilename={article.cover} />

      <div className="mt-10 mb-14 w-1/2 mx-auto border-gray-900 border-2">
        <div className="flex">
          <span>
            image
            <br />
            <Link to={`/?user=${article.username}`}>{article.username}</Link>
            <br />
            {new Date(article.createdAt).toDateString()}
          </span>
          {article.username === user?.username && (
            <span className="flex">
              <HiPencilAlt className="text-2xl cursor-pointer" />
              <HiOutlineTrash
                className="text-2xl cursor-pointer"
                onClick={handleDelete}
              />
            </span>
          )}
        </div>
        <div className="mt-14 border-gray-900 border-2 pb-64">
          <ReactMarkdown>{article.desc}</ReactMarkdown>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Article;
