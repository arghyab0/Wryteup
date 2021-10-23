//components
import { useContext, useState } from "react";
import axios from "axios";
import Loading from "./Loading";

//context
import { Context } from "../context/Context";

const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [cover, setCover] = useState("");
  const { user, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newArticle = { username: user.username, cover, title, desc };
    // if (file) {
    //   const data = new FormData();
    //   const filename = Date.now() + file.name;
    //   data.append("name", filename);
    //   data.append("file", file);
    //   newArticle.cover = filename;

    //   try {
    //     await axios.post("/upload", data);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }
    try {
      const res = await axios.post("/articles", newArticle);
      window.location.replace("/articles/" + res.data._id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {isFetching ? (
        <Loading />
      ) : (
        <div className="mx-2 md:w-1/2 md:mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-5xl py-6 md:py-10">
            New article
          </h1>
          <form onSubmit={handleSubmit} className="font-ui text-lg ">
            <div className="pb-6">
              <label htmlFor="fileInput">Article cover</label>
              {/* <input
                type="file"
                id="fileInput"
                className="mx-2 -mr-36"
                onChange={(e) => setFile(e.target.files[0])}
              /> */}
              <input
                type="text"
                className="mx-2 md:mx-8 p-1 border-2 rounded-lg border-gray-400"
                placeholder="link"
                onChange={(e) => setCover(e.target.value)}
              />
            </div>

            <div className="pb-6">
              <label className="">Article title</label>
              <input
                type="text"
                className="mx-2 md:mx-8 p-1 border-2 rounded-lg border-gray-400"
                placeholder="title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="pb-2">
              <label className="">Article content (markdown supported!)</label>{" "}
              <br />
              <textarea
                className="w-5/6 md:w-full h-96 mx-auto p-1 border-2 rounded-lg border-gray-400"
                placeholder="content"
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>
            </div>

            <button
              type="submit"
              className="text-center px-2 py-1 border-2 rounded-lg border-gray-400"
            >
              Publish
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Write;
