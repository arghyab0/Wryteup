//components
import { useContext, useState } from "react";
import axios from "axios";

//context
import { Context } from "../context/Context";

const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newArticle = { username: user.username, title, desc };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newArticle.cover = filename;

      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const res = await axios.post("/articles", newArticle);
      window.location.replace("/articles/" + res.data._id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>this si wrote</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fileInput"></label>
        <input
          type="file"
          id="fileInput"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <input
          type="text"
          className="border-2"
          placeholder="Title"
          autoFocus={true}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="border-2"
          placeholder="Tell your story"
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
        <button type="submit" className="border-2">
          Publish
        </button>
      </form>
    </>
  );
};

export default Write;
