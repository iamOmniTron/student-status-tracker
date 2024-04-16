import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home | Student Status Tracker",
  description: "Student Status Tracker App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
