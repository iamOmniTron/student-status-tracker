import Navbar from "./navbar";





export default function DashboardContainer({children}){


    return(
        <div className="" style={{
            height:"100vh",
            width:"100vw",
        }}>
            <Navbar/>
            {children}
        </div>
    )
}