import { SignInButton } from "../SignInButton";
import styles from "./styles.module.scss";
import ActiveLink from "../ActiveLink";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="" />
        <nav>
          <ActiveLink
            activeClassName={styles.active}
            href="/"
            contentLink="Home"
          />
          <ActiveLink
            activeClassName={styles.active}
            href="/posts"
            contentLink="Posts"
          />
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
