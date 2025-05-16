import { createCivicAuthPlugin } from "@civic/auth-web3/nextjs"
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://lh3.googleusercontent.com/**')],
  },
};

const withCivicAuth = createCivicAuthPlugin({
  clientId: "098a41a4-9f2c-42a4-b36f-a1a9df62a7d9"
});

export default withCivicAuth(nextConfig)