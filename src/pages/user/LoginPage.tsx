import { useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import logo from "../../assets/images/logo.png";
import axios from "axios";
import { FormEvent, useState } from "react";

function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    console.log("Username: " + username);
    console.log("Password: " + password);

    const handleBackLoginFormBtn = () => {
        window.history.back();
    };

    const googleLogin = useGoogleLogin({
        onSuccess: (tokenResponse: { access_token: string }) => console.log(tokenResponse),
        onError: () => console.log("Error"),
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        axios
            .post("", { username, password })
            .then((result) => {
                console.log(result);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <div className="">
                <section className="container d-flex justify-content-center align-items-center vh-100 text-center">
                    <div className="col-12 col-sm-8 col-md-6 col-lg-4 col-xl-3 shadow-lg p-4 rounded-4">
                        <img src={logo} alt="CAVITE STATE UNIVERSITY TANZA CAMPUS LIBRARY LOGO" className="img-fluid" />

                        <h3 className="fs-2 py-3 fw-semibold" style={{ fontFamily: "arial" }}>
                            LOGIN
                        </h3>

                        <div className="container d-flex justify-content-center">
                            <button className="btn border rounded-pill d-flex align-items-center" onClick={() => googleLogin()}>
                                <i className="mx-2">
                                    <FcGoogle />
                                </i>
                                Continue with Google
                            </button>
                        </div>

                        <hr className="hr_login_text" data-content="or continue with username & password" />

                        <form onSubmit={handleSubmit} className="needs-validation m-0" method="POST" noValidate>
                            <div className="form-outline text-start mb-2">
                                <label className="form-label mb-0">Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    className="form-control form-control-md"
                                    autoComplete="off"
                                    onChange={(e) => {
                                        setUsername(e.target.value);
                                    }}
                                    required
                                />
                                <div id="validationUsernameFeedback" className="invalid-feedback fs-7">
                                    Please enter username.
                                </div>
                            </div>

                            <div className="form-outline text-start">
                                <label className="form-label mb-0">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control form-control-md"
                                    autoComplete="off"
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                    required
                                />
                                <div id="validationPasswordFeedback" className="invalid-feedback fs-7">
                                    Please enter the password.
                                </div>
                            </div>

                            <div className="form-check d-flex justify-content-start mb-2">
                                <input className="form-check-input" type="checkbox" />
                                <label className="form-check-label ms-2">Remember password</label>
                            </div>

                            <div className="text-danger mb-2 fs-7"></div>

                            <button type="submit" className="btn btn-primary btn-md w-100 my-3">
                                Login
                            </button>
                        </form>

                        <div className="d-flex align-items-center">
                            <button type="button" className="btn btn-danger fs-7" onClick={handleBackLoginFormBtn}>
                                Cancel
                            </button>
                            <a className="ms-auto fs-7" type="button">
                                Forgot password?
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default LoginPage;
