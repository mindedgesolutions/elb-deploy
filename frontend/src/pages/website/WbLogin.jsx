import React, { useState } from "react";
import breadCrumbBg from "../../assets/website/img/breadcrumb-bg.png";
import bwOne from "../../assets/website/img/others/1.png";
import { Form, Link } from "react-router-dom";
import { ErrorModal, Google, LinkedIn, Twitter } from "../../components";
import { splitErrors } from "../../utils/showErrors";
import customFetch from "../../utils/customFetch";
import { setErrorModal } from "../../feature/commonSlice";

// Action starts ------
export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      const response = await customFetch.post(`/auth/login`, data);
      console.log(response);
      return null;
    } catch (error) {
      store.dispatch(setErrorModal({ msg: error?.response?.data?.msg }));
      return error;
    }
  };

// Main component starts ------
const WbLogin = () => {
  document.title = `Sign In | ${import.meta.env.VITE_APP_TITLE}`;

  const [selectedUser, setSelectedUser] = useState(3);

  return (
    <main>
      <section
        className="w-breadcrumb-area"
        style={{
          background: `url(${breadCrumbBg}) no-repeat center center/cover`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-auto">
              <div className="position-relative z-2">
                <h2 className="section-title-light mb-2">Sign In</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb w-breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to={`/`}>Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Login
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Form method="post" autoComplete="off">
        <input type="hidden" name="userType" defaultValue={selectedUser} />

        <section className="py-110 bg-offWhite">
          <div className="container">
            <div className="mb-5">
              <div className="row justify-content-center">
                <div className="col-auto">
                  <div className="d-flex align-items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedUser(3)}
                      className={
                        selectedUser === 3 ? `w-form-btn` : `w-form-btn-outline`
                      }
                    >
                      Member
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedUser(2)}
                      className={
                        selectedUser === 2 ? `w-form-btn` : `w-form-btn-outline`
                      }
                    >
                      Admin
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3 p-3">
              <div className="row g-4">
                <div className="col-lg-6 p-3 p-lg-5">
                  <div className="mb-40">
                    <h2 className="section-title mb-2">Log in</h2>
                    <p className="section-desc">Welcome to Work Zone</p>
                  </div>
                  <div className="form-container d-flex flex-column gap-4">
                    <div className="form-input">
                      <label htmlFor="eamil" className="form-label">
                        Email <span className="text-lime-300">*</span>
                      </label>
                      <input
                        type="text"
                        id="email"
                        placeholder="example@gmail.com"
                        className="form-control shadow-none"
                        name="username"
                      />
                    </div>
                    <div className="form-input">
                      <label htmlFor="password" className="form-label">
                        Password <span className="text-lime-300">*</span>
                      </label>
                      <input
                        type="password"
                        id="password"
                        placeholder="********"
                        className="form-control shadow-none"
                        name="password"
                      />
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center gap-2 form-input">
                        <input
                          type="checkbox"
                          className="form-check"
                          id="remember"
                          name="remember"
                        />
                        <label className="form-check-label" htmlFor="remember">
                          Remember Me
                        </label>
                      </div>
                      <div>
                        <Link
                          to={`/forgot-password`}
                          className="form-forget-pass"
                        >
                          Forget Password
                        </Link>
                      </div>
                    </div>
                    <div className="d-grid">
                      <button type="submit" className="w-btn-secondary-lg">
                        Log In
                      </button>
                    </div>
                  </div>
                  <div className="py-5">
                    <div className="form-divider d-flex justify-content-center align-items-center">
                      <span className="form-divider-text">OR</span>
                    </div>
                  </div>
                  <div className="d-flex gap-3 justify-content-center align-items-center social-login">
                    <button type="button" className="social-login-item">
                      <LinkedIn />
                    </button>
                    <button type="button" className="social-login-item">
                      <Twitter />
                    </button>
                    <button type="button" className="social-login-item">
                      <Google />
                    </button>
                  </div>
                  <div className="mt-4">
                    <p className="text-center form-text">
                      Don't have an account ?
                      <Link to={`/register`}> Create Account </Link>
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="login-img">
                    <img src={bwOne} className="img-fluid w-100" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Form>

      <ErrorModal />
    </main>
  );
};

export default WbLogin;
