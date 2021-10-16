const Write = () => {
  return (
    <>
      <h1>this si wrote</h1>
      <form action="">
        <label htmlFor="fileInput"></label>
        <input type="file" name="" id="fileInput" />
        <input
          type="text"
          name=""
          id=""
          className="border-2"
          placeholder="Title"
          autoFocus={true}
        />
        <textarea
          name=""
          id=""
          className="border-2"
          placeholder="Tell your story"
        ></textarea>
        <button type="submit" className="border-2">
          Publish
        </button>
      </form>
    </>
  );
};

export default Write;
