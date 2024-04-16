import { Inter } from "next/font/google";
import "../../globals.css";
import "bootstrap/dist/css/bootstrap.css"
import AdminDashboardContainer from "../components/container";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin | Student Status Tracker",
  description: "Student Status Tracker App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={inter.className}>
            <AdminDashboardContainer>
                {children}
            </AdminDashboardContainer>
        </body>
    </html>
  );
}
