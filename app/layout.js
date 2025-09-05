import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "p a s k a l - 파스칼",
  description: "파스칼의 블로그, p a s k a l ' s   b l o g",
};

// layout.js
export const dynamic = "force-dynamic";


export default function RootLayout({ children, modal }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="font-[RoundedFixedsys]">{children}</div>
        <div className="font-[RoundedFixedsys] h-full">{modal ? <div className="h-screen">{modal}</div> : <></>}</div>
      </body>
    </html>
  );
}


