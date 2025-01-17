import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "عيادة غمدان",
  description: "أفضل خدمات طب الأسنان",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-geist-mono antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
