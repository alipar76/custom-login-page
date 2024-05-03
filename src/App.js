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
    const [usernameClassName, setUsernameClassName] = useState("");
    const [passwordClassName, setPasswordClassName] = useState("");

    const setUserNameActive = (event) => {
        setUsernameClassName("active");
    };

    const setUsernamePassive = (event) => {
        if (!username) {
            setUsernameClassName("");
        }
    };

    const setPasswordActive = (event) => {
        setPasswordClassName("active");
    };

    const setPasswordPassive = (event) => {
        if (!password) {
            setPasswordClassName("");
        }
    };

    const usernameChangeHandler = (event) => {
        setUsername(event.target.value);
    };

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    };

    return (
        <div className="app">
            <div className="login-box">
                <h5>Sign in</h5>
                <form className="form">
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
                            <span>Username</span>
                            <RiUserFill className="icon" size={20} />
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
                            <span>Password</span>
                            <MdKey className="icon" size={20} />
                        </div>
                    </div>
                    <div className="login-choice">
                        <button className="choice">
                            <FcGoogle className="login-choice-icon" size={20} />
                        </button>
                        <button className="choice">
                            <FaApple className="login-choice-icon" size={20} />
                        </button>
                        <button className="choice">
                            <FaFacebook
                                className="login-choice-icon"
                                size={20}
                                color="#347aeb"
                            />
                        </button>
                        <button className="choice">
                            <FaGithub className="login-choice-icon" size={20} />
                        </button>
                    </div>
                    <div className="form-checkbox">
                        <input type="checkbox" name="staysignin" />
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
