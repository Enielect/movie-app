import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ShowSideBar from "./ui/ShowSidebar";
import GenreProvider from "./contexts/GenreProvider";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",

  description: "Generated by create next app",
};

export const viewport: Viewport = {
  themeColor: "#03030a",
};

//getserversideprops acceps a contexts object as an argument(that stores its p)

//you can access the movie props in the layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-hidden`}>
        <GenreProvider>
          <div>{children}</div>
          <ShowSideBar />
        </GenreProvider>
      </body>
    </html>
  );
}
