import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import axios from "axios";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const navigate = useNavigate();
  function Redirect() {
    navigate("/");
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleFormSwitch = () => {
    setIsLogin(!isLogin);
  };

  const Username = useRef();
  const Email = useRef();
  const Password = useRef();
  const formRef = useRef();

  const singnUpEvent = async (e) => {
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
      formRef.current.reset();
      Redirect();
    } catch (err) {
      console.log(err);
    }
  };

  const LoginEvent = async (e) => {
    e.preventDefault();
    let username = Username.current.value;
    let password = Password.current.value;
    try {
      let res = await axios.post("http://localhost:8080/login", {
        username,
        password,
      });
      formRef.current.reset();
      Redirect();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 ">
        <div className={styles.container} style={{ marginTop: "20px" }}>
          <div className={styles.forms}>
            {isLogin ? (
              <div className={styles.form}>
                <span className={styles.title}>Login</span>
                <form ref={formRef} onSubmit={LoginEvent}>
                  <div className={styles.inputField}>
                    <input
                      id="inp-email"
                      type="text"
                      placeholder="Enter your Name"
                      name="username"
                      ref={Username}
                      required
                    />
                    <i className="uil uil-envelope icon"></i>
                  </div>
                  <div className={styles.inputField}>
                    <input
                      type={Password ? "text" : "password"}
                      id="inp-pass"
                      className={styles.password}
                      placeholder="Enter your password"
                      name="password"
                      ref={Password}
                      required
                    />
                    <i className="uil uil-lock icon"></i>
                    <i
                      className={`uil ${
                        showPassword ? "uil-eye" : "uil-eye-slash"
                      } ${styles.showHidePw}`}
                      onClick={togglePasswordVisibility}
                    ></i>
                  </div>
                  <div className={styles.checkboxText}>
                    <div className={styles.checkboxContent}>
                      <input type="checkbox" id="logCheck" />
                      <label htmlFor="logCheck" className={styles.text}>
                        Remember me
                      </label>
                    </div>
                    <a href="#" className={styles.text}>
                      Forgot password?
                    </a>
                  </div>
                  <div className={styles.inputField}>
                    <button type="submit">Login</button>
                  </div>
                </form>
                <div className={styles.loginSignup}>
                  <span className={styles.text}>
                    Not a member?{" "}
                    <a className={styles.text} onClick={handleFormSwitch}>
                      Signup Now
                    </a>
                  </span>
                </div>
              </div>
            ) : (
              <div className={styles.form}>
                <span className={styles.title}>SignUp</span>
                <form onSubmit={singnUpEvent} ref={formRef}>
                  <div className={styles.inputField}>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      name="username"
                      ref={Username}
                      required
                    />
                    <i className="uil uil-user"></i>
                  </div>
                  <div className={styles.inputField}>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      name="email"
                      ref={Email}
                      required
                    />
                    <i className="uil uil-envelope icon"></i>
                  </div>
                  <div className={styles.inputField}>
                    <input
                      type="password"
                      className={styles.password}
                      placeholder="Create a password"
                      name="password"
                      ref={Password}
                      required
                    />
                    <i className=" uil uil-lock icon"></i>
                  </div>
                  <div className={styles.checkboxText}>
                    <div className={styles.checkboxContent}>
                      <input type="checkbox" id="termCon" />
                      <label htmlFor="termCon" className={styles.text}>
                        I accepted all terms and conditions
                      </label>
                    </div>
                  </div>
                  <div className={styles.inputField}>
                    <button type="submit">Signup</button>
                  </div>
                </form>
                <div className={styles.loginSignup}>
                  <span className={styles.text}>
                    Already have an account?{" "}
                    <a className={styles.text} onClick={handleFormSwitch}>
                      Log In
                    </a>
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
