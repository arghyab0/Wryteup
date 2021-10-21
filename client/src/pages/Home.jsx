//components
import { useLocation } from "react-router-dom";
import axios from "axios";
import Cover from "../components/Cover";
import Listings from "../components/Listings";
import Footer from "../components/Footer";

//hooks
import { useState, useEffect } from "react";

const Home = () => {
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
      <Cover />
      <Listings articles={articles} page="home" />
      <Footer />
    </>
  );
};

export default Home;
