import "@shopify/polaris/build/esm/styles.css";

import { type Metadata } from "next";
import classNames from "classnames";

import { Inter } from "next/font/google";

const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Printrove",
  description: "Printrove App",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={classNames(
          "min-h-screen",
          "bg-background",
          "font-sans",
          "antialiased",
          fontSans.variable
        )}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
