import React from "react";
import styles from "./login.module.css";
import { login } from "@/lib/action";
const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form className={styles.form} action={login}>
          <input type="text" placeholder="username" name="username" />
          <input type="password" placeholder="password" name="password" />

          <button>login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
