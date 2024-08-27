import React from 'react';
import styles from '../styles/signin.module.css';

const SignIn = () => {
  return (
    <div className={styles.container}>
      <div className={styles.signinBox}>
        <h1 className={styles.title}>Sign In</h1>
        <form>
          <input
            type="email"
            placeholder="Email or mobile number"
            className={styles.inputField}
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.inputField}
          />
          <button type="submit" className={styles.signInButton}>Sign In</button>
          <div className={styles.orText}>OR</div>
          <button className={styles.codeButton}>Use a sign-in code</button>
        </form>
        <div className={styles.forgotPassword}>Forgot password?</div>
        <div className={styles.signUpText}>
          New to Netflix? <a href="#">Sign up now.</a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
