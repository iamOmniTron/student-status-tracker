"use client";
import { TOKEN_NAME } from "@/app/lib/helpers";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";




export default function Navbar(){
  const router = useRouter();

  const handleLogout = ()=>{
    localStorage.removeItem(TOKEN_NAME);
    router.push("/student/login");
  }


    return(
        <nav className="navbar navbar-expand-lg bg-success">
  <div className="container">
    <div className="navbar-brand">
        <Image src={"/nsuk-logo.jpg"} height={50} width={50} className="rounded"/>
        <span className="fw-bold text-light ms-2">Student Dashboard</span>
    </div>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link fw-bold text-light" href="/student/dashboard">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold text-light" href="/student/dashboard/documents">Documents</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold text-light" href="/student/dashboard/status">View Status</Link>
        </li>
        <li className="nav-item">
          <button className="btn btn-secondary" onClick={handleLogout}>
            Log Out
          </button>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}