import { Inter } from "next/font/google";
import "../../globals.css";
import "bootstrap/dist/css/bootstrap.css"
import DashboardContainer from "../components/container";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Student Dashboard | Student Status Tracker", 
  description: "Student Status Tracker App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DashboardContainer>
            {children}
        </DashboardContainer>
      </body>
    </html>
  );
}
