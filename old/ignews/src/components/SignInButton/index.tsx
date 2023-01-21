import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { signIn, useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";

export function SignInButton() {
  const { status, data } = useSession();
  const { push } = useRouter();

  const handleSignOut = async () => {
    await signOut();
    // await push("/");
  };

  return status === "authenticated" ? (
    <button
      type="button"
      className={styles.signInButton}
      onClick={handleSignOut}
    >
      <FaGithub color="#04d361" />
      {data.user?.name}
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signIn("github")}
    >
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );
}
