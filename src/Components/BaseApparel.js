import React, { useState } from "react";
import classNames from "classnames";
import "./BaseApparel.scss";
import Logo from "../static/images/logo.svg";
import Arrow from "../static/images/icon-arrow.svg";

const BaseApparel = () => {
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const checkEmailFormat = () => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    pattern.test(email)
      ? setErrorMsg("")
      : setErrorMsg("Looks like this is not an email");
  };

  const checkEmailMandatory = () => {
    if (email) {
      setErrorMsg("");
      return true;
    } else {
      setErrorMsg("The email field is empty");
      return false;
    }
  };

  const handleFormSubmit = () => {
    checkEmailMandatory() && checkEmailFormat();
  };

  const handleEmailChange = (email) => {
    setEmail(email);
  };

  const onEmailChange = (event) => {
    handleEmailChange(event.target.value);
  };

  const onFormSubmit = (event) => {
    handleFormSubmit();
    event.preventDefault();
  };

  return (
    <div className="base-apparel">
      <header className="base-apparel__header">
        <figure className="base-apparel__logo">
          <img className="base-apparel__logo-img" src={Logo} alt="Logo" />
        </figure>
      </header>
      <div className="base-apparel__hero" />
      <main className="base-apparel__main">
        <h1 className="base-apparel__title">
          <span className="base-apparel__title-first">We're</span> coming soon
        </h1>
        <p className="base-apparel__announcement">
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>
        <form className="base-apparel__form" onSubmit={onFormSubmit}>
          <input
            aria-label='email'
            className={classNames("base-apparel__email", {
              "base-apparel__email--error": errorMsg,
            })}
            placeholder="Email Address"
            value={email}
            onChange={onEmailChange}
          />
          {errorMsg && <p className="base-apparel__err-msg">{errorMsg}</p>}
          <button aria-label='submit' type="submit" className="base-apparel__submit">
            <img alt="submit" src={Arrow} />
          </button>
        </form>
      </main>
    </div>
  );
};

export default BaseApparel;
