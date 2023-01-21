import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { api } from "../../services/api";
import { getStripeJs } from "../../services/stripe-js";
import styles from "./styles.module.scss";

interface ISubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: ISubscribeButtonProps) {
  const { status, data: sessionData } = useSession();

  const { push } = useRouter();
  async function handleSubsribe() {
    if (status === "unauthenticated") {
      signIn("github");
      return;
    }

    if (sessionData?.activeSubscription) {
      push("/posts");
      return;
    }

    try {
      const { data } = await api.post("/subscribe");
      const { sessionId } = data;
      const stripe = await getStripeJs();
      stripe?.redirectToCheckout({
        sessionId,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubsribe}
    >
      Subscribe now
    </button>
  );
}
