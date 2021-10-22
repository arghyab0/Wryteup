//components
import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ArticleHeading from "../components/ArticleHeading";
import ArticleCover from "../components/ArticleCover";
import ArticleBody from "../components/ArticleBody";
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
      <ArticleBody
        userData={user}
        articleData={article}
        handleDelete={handleDelete}
      />
      <Footer />
    </>
  );
};

export default Article;
