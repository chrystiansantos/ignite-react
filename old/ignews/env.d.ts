namespace NodeJS {
  interface ProcessEnv {
    STRIPE_API_KEY: string;
    NEXT_PUBLIC_STRIPE_PUBLIC_KEY: string;
    STRIPE_PRICE_ID: string;
    STRIPE_SUCCESS_URL: string;
    STRIPE_CANCEL_URL: string;
    STRIPE_WEBHOOK_SECRET: string;
    GITHUB_ID: string;
    GITHUB_SECRET: string;
    FAUNADB_KEY: string;
    PRISMIC_ACCESS_TOKEN: string;
  }
}
