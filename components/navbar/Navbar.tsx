import Link from "next/link";
import styles from "../../styles/Navbar.module.css";
import { signIn, signOut, useSession } from "next-auth/react";

function Navbar() {
  const { data: session, status: loading } = useSession();

  return (
    <nav className={styles.header}>
      <h1 className={styles.logo}>
        <Link href="#">NextAuth</Link>
      </h1>

      <ul
        className={`${styles.mainNav} ${
          !session && loading ? styles.loading : styles.loaded
        }`}
      >
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>

        {!session && (
          <li>
            <Link
              href="/api/auth/signin"
              onClick={(e) => {
                e.preventDefault();
                signIn("github");
              }}
            >
              Sign In
            </Link>
          </li>
        )}
        {session && (
          <li>
            <Link
              href="/api/auth/signout"
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              Sign Out
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
