import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist } from "next/font/google";
import "./globals.css";
import { CivicAuthProvider } from "@civic/auth-web3/nextjs";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const titillium_web = localFont({
  src: [
    {
      path: "../assets/fonts/Space_Grotesk,Titillium_Web/Titillium_Web/TitilliumWeb-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../assets/fonts/Space_Grotesk,Titillium_Web/Titillium_Web/TitilliumWeb-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/Space_Grotesk,Titillium_Web/Titillium_Web/TitilliumWeb-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../assets/fonts/Space_Grotesk,Titillium_Web/Titillium_Web/TitilliumWeb-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/fonts/Space_Grotesk,Titillium_Web/Titillium_Web/TitilliumWeb-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../assets/fonts/Space_Grotesk,Titillium_Web/Titillium_Web/TitilliumWeb-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/Space_Grotesk,Titillium_Web/Titillium_Web/TitilliumWeb-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/Space_Grotesk,Titillium_Web/Titillium_Web/TitilliumWeb-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../assets/fonts/Space_Grotesk,Titillium_Web/Titillium_Web/TitilliumWeb-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Space_Grotesk,Titillium_Web/Titillium_Web/TitilliumWeb-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/Space_Grotesk,Titillium_Web/Titillium_Web/TitilliumWeb-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    }
  ],
  variable: "--font-titillium_web",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    template: "Bithive - %s",
    default: "Bithive"
  },
  description:"A smart job platform inspired by adventurers guilds in animes, connecting skilled professionals with exciting opportunities in a dynamic and engaging way and allowing unskilled folks to evolve."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${titillium_web.variable} antialiased`}
      >
        <CivicAuthProvider>
          {children}
          <Toaster />
        </CivicAuthProvider>
      </body>
    </html>
  );
}
