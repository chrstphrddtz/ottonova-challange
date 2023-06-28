import "./globals.css";
import { Figtree } from "next/font/google";

import Navbar from "./Navbar";

const figtree = Figtree({
  weight: ["400", "600", "800"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Ottonova challange",
  description: "Created by Christoph Raddatz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={figtree.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
