//components
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import { HiOutlineTrash } from "react-icons/hi";
import Identicon from "react-identicons";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Listings from "./Listings";

//assets
import { ReactComponent as EyeIcon } from "../assests/eyeIcon.svg";

const ArticleBody = ({ userData, articleData, handleDelete }) => {
  const [articles, setArticles] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await axios.get("/articles" + search);
      setArticles(res.data);
    };
    fetchArticles();
  }, [search]);

  return (
    <>
      <div className="md:w-1/2 mx-4 md:mx-auto mt-10 md:mt-14 mb-28 md:mb-32">
        <div className="flex items-center font-ui text-lg">
          <div>
            {userData?.displayImg ? (
              <img
                src={userData?.displayImg}
                alt="Account"
                className="inline-flex w-10 md:w-12 h-10 md:h-12 mx-2 md:mx-4 rounded-full object-cover"
              />
            ) : (
              <Identicon
                string={userData?._id}
                size="70"
                className="inline-flex w-10 md:w-12 h-10 md:h-12 mx-2 md:mx-4 rounded-full object-scale-down"
              />
            )}
          </div>
          <div className="w-4/5 px-2">
            <Link to={`/?user=${articleData.username}`}>
              <b>{articleData.username}</b>
            </Link>
            <br />
            {new Date(articleData.createdAt).toDateString()}
          </div>

          {articleData.username === userData?.username && (
            <div className="flex justify-end items-center p-1 rounded-xl border-2 border-gray-300 cursor-pointer">
              <HiOutlineTrash
                className="inline-flex text-xl md:text-2xl"
                onClick={handleDelete}
              />{" "}
              Delete
            </div>
          )}
        </div>

        <div className="mt-14">
          <div className="font-body text-base md:text-lg leading-loose prose">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {articleData.desc}
            </ReactMarkdown>
          </div>
        </div>
      </div>

      <div className="w-screen border-t-2 border-black relative">
        <EyeIcon className="w-screen text-center z-50 absolute -top-8" />
        <div className="text-center font-heading text-3xl md:text-5xl pt-16 md:pt-24">
          What to read next
        </div>
        <div className="pv-2 md:pb-10">
          <Listings articles={articles} page="article" />
        </div>
      </div>
    </>
  );
};

export default ArticleBody;
