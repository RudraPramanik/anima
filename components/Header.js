import React, { useState } from "react";
import styles from './Modals.module.css'
import { Button, Modal } from "react-bootstrap";
import Link from "next/link";
import LoginPage from "./utilities/Login/LoginPage"
import SignUpPage from './utilities/Signup/SignUpPage'
const Header = () => {
  const [loginPage, setLoginPage] = useState(false);
  const [signupPage, setSignupPage] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const loginPageHandler = (e) => {
    e.preventDefault();
    setLoginPage(true);
    setSignupPage(false);
    handleShow();
  };
  const signupPageHandler = (e) => {
    e.preventDefault();
    setSignupPage(true);
    setLoginPage(false);
    handleShow();
  };

  return (
    <>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Button variant="primary" onClick={loginPageHandler}>
          Login
        </Button>
        <Button variant="outline-primary" onClick={signupPageHandler}>
          SignUP
        </Button>
      </nav>
      {loginPage ? (
        <div>
          <Modal show={show} onHide={handleClose} size="lg">
            <LoginPage signup={signupPageHandler}/>
          </Modal>
        </div>
      ) : signupPage ? (
        <div>
          <Modal show={show} onHide={handleClose} size="lg">
            <SignUpPage login={loginPageHandler}/>
          </Modal>

        </div>
      ) : null}
    </>
  );
};

export default Header;
