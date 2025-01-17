// src/app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";  // استيراد مكون Navbar
import Footer from "../components/Footer";  // استيراد مكون Footer

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "عيادة غمدان",
  description: "أفضل خدمات طب الأسنان",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />  {/* إضافة مكون Navbar */}
        {children}
        <Footer />  {/* إضافة مكون Footer */}
      </body>
    </html>
  );
}
