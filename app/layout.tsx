import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ShowSideBar from "./ui/ShowSidebar";
import GenreProvider from "./contexts/GenreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
      <body className={`${inter.className}`} >
        <GenreProvider>
          <div className="w-screen h-screen ">
            {/* <Header /> */}

            <div>{children}</div>
            <ShowSideBar />
          </div>
        </GenreProvider>
      </body>
    </html>
  );
}
