const Register = () => {
  return (
    <>
      <h1>Register</h1>
      <form action="">
        <label>Username</label>
        <input
          type="text"
          className="border-2"
          name=""
          placeholder="username"
        />

        <label>Email</label>
        <input type="email" className="border-2" name="" placeholder="email" />

        <label>Password</label>
        <input
          type="password"
          className="border-2"
          name=""
          placeholder="password"
        />

        <button type="submit" className="border-2">
          Login
        </button>
      </form>

      <button className="border-2">Login</button>
    </>
  );
};

export default Register;
