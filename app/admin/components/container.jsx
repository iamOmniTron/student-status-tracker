import AdminNav from "./nav";
import Sidebar from "./sidebar";




export default function AdminDashboardContainer({children}){

    return(
        <div className="d-flex" style={{
            height:"100vh",
            width:"100vw"
        }}>
            <div className="" style={{
                height:"100%",
                width:"20%"
            }}>
                <Sidebar/>
            </div>
            <div style={{
                height:"100%",
                width:"100%"
            }}>
                <AdminNav/>
                <div className="container">
                    {children}
                </div>
            </div>
        </div>
    )
}