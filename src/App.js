import { useState } from "react";
import { RiUserFill } from "react-icons/ri";
import { MdKey } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook, FaGithub } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";

import "./App.scss";

function App() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameValidationErrorStatus, setUsernameValidationErrorStatus] =
        useState("");
    const [passwordValidationErrorStatus, setPasswordValidationErrorStatus] =
        useState("");
    const [usernameClassName, setUsernameClassName] = useState("");
    const [passwordClassName, setPasswordClassName] = useState("");

    const setUserNameActive = (event) => {
        if (usernameValidationErrorStatus) setUsernameClassName("error active");
        else setUsernameClassName("active");
    };

    const setUsernamePassive = (event) => {
        if (!username) {
            if (usernameValidationErrorStatus) setUsernameClassName("error");
            else setUsernameClassName("");
        }
    };

    const setPasswordActive = (event) => {
        if (passwordValidationErrorStatus) setPasswordClassName("error active");
        else setPasswordClassName("active");
    };

    const setPasswordPassive = (event) => {
        if (!password) {
            if (passwordValidationErrorStatus) setPasswordClassName("error");
            else setPasswordClassName("");
        }
    };

    const usernameChangeHandler = (event) => {
        setUsername(event.target.value);
        if (username) {
            setUsernameValidationErrorStatus("");
            setUsernameClassName("active");
        }
    };

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
        if (password) {
            setPasswordValidationErrorStatus("");
            setPasswordClassName("active");
        }
    };

    const submitHandler = (event) => {
        event.preventDefault();

        if (!username) {
            setUsernameClassName("error");
            setUsernameValidationErrorStatus("show");
        }
        if (!password) {
            setPasswordClassName("error");
            setPasswordValidationErrorStatus("show");
        }
    };

    return (
        <div className="app">
            <div className="login-box">
                <h5>Sign in</h5>
                <form className="form" onSubmit={submitHandler}>
                    <div className="form-fields">
                        <div
                            className={
                                "form-field username-field " + usernameClassName
                            }
                        >
                            <input
                                type="text"
                                onFocus={setUserNameActive}
                                onBlur={setUsernamePassive}
                                onChange={usernameChangeHandler}
                            />
                            <label>Username</label>
                            <span className="secondary-label">Username</span>
                            <RiUserFill className="icon" size={20} />
                            <span
                                className={
                                    "validation-message " +
                                    usernameValidationErrorStatus
                                }
                            >
                                This field is required.
                            </span>
                        </div>
                        <div
                            className={
                                "form-field password-field " + passwordClassName
                            }
                        >
                            <input
                                type="password"
                                onFocus={setPasswordActive}
                                onBlur={setPasswordPassive}
                                onChange={passwordChangeHandler}
                            />
                            <label>Password</label>
                            <span className="secondary-label">Password</span>
                            <MdKey className="icon" size={20} />
                            <span
                                className={
                                    "validation-message " +
                                    passwordValidationErrorStatus
                                }
                            >
                                This field is required.
                            </span>
                        </div>
                    </div>
                    <div className="login-choice">
                        <a className="choice">
                            <FcGoogle className="login-choice-icon" size={20} />
                        </a>
                        <a className="choice">
                            <FaApple className="login-choice-icon" size={20} />
                        </a>
                        <a className="choice">
                            <FaFacebook
                                className="login-choice-icon"
                                size={20}
                                color="#347aeb"
                            />
                        </a>
                        <a className="choice">
                            <FaGithub className="login-choice-icon" size={20} />
                        </a>
                    </div>
                    <div className="form-checkbox">
                        <input type="checkbox" id="staysignin" />
                        <label htmlFor="staysignin">Stay signed in</label>
                    </div>
                    <div className="submit-button">
                        <button type="submit">
                            <CiLogin className="login-choice-icon" size={30} />
                        </button>
                    </div>
                    <div className="alternative">
                        <div>
                            <a href="#">Can't sign in?</a>
                        </div>
                        <div>
                            <a href="#">Create account</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default App;
