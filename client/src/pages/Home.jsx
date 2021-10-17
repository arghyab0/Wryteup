//components
import axios from "axios";
import Cover from "../components/Cover";
import Listings from "../components/Listings";
import Footer from "../components/Footer";

//hooks
import { useState, useEffect } from "react";

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await axios.get("/articles");
      setArticles(res.data);
    };
    fetchArticles();
  }, []);

  return (
    <>
      <Cover />
      <Listings articles={articles} />
      <Footer />
    </>
  );
};

export default Home;
