import { NextApiRequest, NextApiResponse } from "next";
import { Readable } from "stream";
import Stripe from "stripe";
import { isBreakOrContinueStatement } from "typescript";
import { stripe } from "../../services/stripe";
import { saveSubscription } from "./_lib/managedSubscription";

async function buffer(readable: Readable) {
  const chunks = [];

  // eslint-disable-next-line no-restricted-syntax
  for await (const chunk of readable) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

export const config = {
  api: {
    bodyParser: false,
  },
};

const relevantEvents = new Set([
  "checkout.session.completed",
  "customer.subscription.created",
  "customer.subscription.updated",
  "customer.subscription.deleted",
]);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const buf = await buffer(req);
    const secret = req.headers["stripe-signature"] as string;

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(
        buf,
        secret,
        process.env.STRIPE_WEBHOOK_SECRET
      );

      const { type } = event;

      if (relevantEvents.has(type)) {
        try {
          switch (type) {
            case "customer.subscription.created":
            case "customer.subscription.updated":
            case "customer.subscription.deleted": {
              const subscription = event.data.object as Stripe.Subscription;
              await saveSubscription(
                subscription.id,
                subscription.customer.toString(),
                type === "customer.subscription.created"
              );

              break;
            }

            case "checkout.session.completed": {
              const checkoutSession = event.data
                .object as Stripe.Checkout.Session;
              if (checkoutSession.subscription && checkoutSession.customer) {
                await saveSubscription(
                  checkoutSession.subscription?.toString(),
                  checkoutSession.customer?.toString()
                );
              }
              break;
            }

            default:
              throw new Error("Unhandled event.");
          }
        } catch (error) {
          return res.json({ error: "webhook handler failed." });
        }
      }

      return res.status(200).json({ received: true });
    } catch (err) {
      res.status(400).send("Webhook error");
    }
  }

  return res.setHeader("Allow", "POST").status(405).end("Method not allowed");
};
