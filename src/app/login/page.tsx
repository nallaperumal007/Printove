// app/login/page.tsx
"use client";  // Ensure this file is treated as a client component

import React, { useState } from "react";
import styles from "./Login.module.css"; // Ensure this CSS file exists
import Image from "next/image";
import logo from "@/assets/logo.svg"; // Adjust logo path
import PageLayout from "@/components/main-layout"; // Adjust path as needed
import Navbar from "@/components/navbar"; // Adjust path as needed
import { useRouter } from "next/navigation"; // Import useRouter to handle navigation

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>(""); // State for email
  const [password, setPassword] = useState<string>(""); // State for password
  const [error, setError] = useState<string>(""); // State for error messages
  const router = useRouter(); // Use useRouter to navigate

  // Form submission handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate inputs
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setError(""); // Clear errors if validation passes

    // Example authentication logic (replace with real logic)
    if (email === "admin@example.com" && password === "admin123") {
      localStorage.setItem("userRole", "admin");
      alert(`Welcome to Printrove, ${email}!`);
      router.push("/admin/dashboard"); // Correct redirect path
    } else if (email === "merchant@example.com" && password === "merchant123") {
      localStorage.setItem("userRole", "merchant");
      alert(`Welcome to Printrove, ${email}!`);
      router.push("/merchant/dashboard"); // Correct redirect path
    } else if (email === "customer@example.com" && password === "customer123") {
      localStorage.setItem("userRole", "customer");
      alert(`Welcome to Printrove, ${email}!`);
      router.push("/customer/dashboard"); // Correct redirect path
    } else {
      setError("Invalid credentials, please try again.");
    }
  };

  return (
    <PageLayout>
      <Navbar /> {/* Include Navbar here */}
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.brand}>
            <Image src={logo} alt="Printrove Logo" className={styles.logo} />
          </div>
          <h2 className={styles.title}>Login</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className={styles.error}>{error}</p>}
            <button type="submit" className={styles.button}>Login</button>
          </form>
        </div>
      </div>
    </PageLayout>
  );
};

export default Login;
