import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import ReactQueryProvider from "@/ReactQueryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <body className={inter.className}>
          <nav>
            <Link href="/">{"Home"}</Link>
            <Link href="posts">{"All Posts"}</Link>
          </nav>
          {children}
          <ReactQueryDevtools />
        </body>
      </html>
    </ReactQueryProvider>
  );
}
