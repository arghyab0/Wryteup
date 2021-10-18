const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <form action="">
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
    </>
  );
};

export default Login;
