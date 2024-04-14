import "./Login.css";
const Login = () => {
  return (
    <div className="container parent">
      <h2>Login</h2>
      <form
        action="/add"
        enctype="multipart/form-data"
        method="POST"
        class="custom"
      >
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email :
          </label>
          <input
            type="text"
            name="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            autocomplete="off"
          />
        </div>
        <div class="mb-3 custom-file">
          <label for="customFile" class="form-label">
            Password :
          </label>
          <input
            type="text"
            name="password"
            class="form-control custom-file-input"
            id="customFile"
          />
        </div>

        <p className="text-center">
          Do not Have An Account? <a href="/signup">Sign Up</a>
        </p>
        <button type="submit" class="btn btn-primary">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
