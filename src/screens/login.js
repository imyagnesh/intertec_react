import React, { useState, memo, useEffect, useRef } from "react";
import { LocaleConsumer } from "../context/localeContext";
import styles from "../styles";

const Login = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const xyz = "hello";
  console.log("Login");

  useEffect(() => {
    console.warn("useEffect");
    const copyEvent = () => {
      console.log("copied...");
    };
    document.addEventListener("copy", copyEvent);
    return () => {
      document.removeEventListener("copy", copyEvent);
    };
  }, []);

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setErrors({});
    }
  }, [username, password]);

  const submit = e => {
    e.preventDefault();
    let err = errors;
    if (!username) {
      err = { ...err, username: "Required" };
    }
    if (!password) {
      err = { ...err, password: "Required" };
    }
    setErrors(err);

    console.log(Object.keys(err).length);

    if (Object.keys(err).length === 0) {
      onSubmit(username);
    }
  };

  return (
    <div>
      <LocaleConsumer>
        {value => {
          return (
            <div>
              <p>Hello from Login: {value.locale}</p>
              <button onClick={() => value.switchLocale()}>
                Switch Locale
              </button>
            </div>
          );
        }}
      </LocaleConsumer>
      <form onSubmit={submit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        {errors.username && <span>{errors.username}</span>}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {errors.password && <span>{errors.password}</span>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default memo(Login);
