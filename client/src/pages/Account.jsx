const Account = () => {
  return (
    <>
      <h1>this is account</h1>
      <div>
        <span> Update your account </span>
        <span> Delete account </span>
      </div>
      <form action="">
        <label>Profile picture</label>
        <img
          src="https://media.voguebusiness.com/photos/5ef6493adf1073db3375835d/2:3/w_2560%2Cc_limit/kanye-west-gap-news-voguebus-mert-alas-and-marcus-piggott-june-20-story.jpg"
          alt="profile"
          className="w-12 h-12 rounded-full object-cover"
        />

        <label htmlFor="fileInput"></label>
        <input type="file" name="" id="fileInput" />

        <label>Username</label>
        <input type="text" className="border-2" name="" placeholder="JohnDoe" />

        <label>Email</label>
        <input
          type="email"
          className="border-2"
          name=""
          placeholder="johndoe@email.com"
        />

        <label>Password</label>
        <input type="password" className="border-2" name="" />

        <button type="submit" className="border-2">
          Update
        </button>
      </form>
    </>
  );
};

export default Account;
