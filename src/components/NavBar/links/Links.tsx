"use client";

import Link from "next/link";
import React from "react";
import styles from "./Links.module.css";
import NavLink from "./navLink/NavLink";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";

const Links = ({ session }: Session) => {
  const links = [
    { title: "HomePage", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" },
  ];
  const onLogout = () => {
    signOut();
  };

  return (
    <div className={styles.links}>
      {links.map((link) => (
        <NavLink item={link} key={link.title} />
      ))}
      {session?.user ? (
        <>
          <button className={styles.logout} onClick={onLogout}>
            로그아웃
          </button>
        </>
      ) : (
        <NavLink item={{ title: "Login", path: "/login" }} />
      )}
    </div>
  );
};

export default Links;
