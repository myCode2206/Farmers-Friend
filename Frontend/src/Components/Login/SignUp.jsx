import { useRef } from "react";
import "./SignUp.css";
import axios from "axios";

const SignUp = () => {
  const Username = useRef();
  const Email = useRef();
  const Password = useRef();
  const formRef = useRef();

  async function onSubmitHandler(e) {
    e.preventDefault();
    let username = Username.current.value;
    let email = Email.current.value;
    let password = Password.current.value;

    try {
      let res = await axios.post("http://localhost:8080/signup", {
        username,
        email,
        password,
      });
      alert("Data is Added Successfully");
      formRef.current.reset();
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="container parent">
      <h2>Register</h2>
      <form
        action="#"
        method="POST"
        class="custom"
        onSubmit={onSubmitHandler}
        ref={formRef}
      >
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Name :
          </label>
          <input
            type="text"
            name="username"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            autocomplete="off"
            ref={Username}
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">
            Email :
          </label>
          <input
            type="text"
            name="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
            autocomplete="off"
            ref={Email}
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
            ref={Password}
          />
        </div>
        <p className="text-center">
          Already Have An Account? <a href="/login">Log In</a>
        </p>
        <button type="submit" class="btn btn-primary">
          Log In
        </button>
      </form>
    </div>
  );
};

export default SignUp;
