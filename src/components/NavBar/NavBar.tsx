import React from "react";
import Links from "./links/Links";
import styles from "./NavBar.module.css";
import Link from "next/link";
import { auth } from "@/lib/auth";
const NavBar = async () => {
  const session = await auth();

  console.log(session);
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Logo
      </Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};

export default NavBar;
