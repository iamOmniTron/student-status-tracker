import { FaUserCircle } from "react-icons/fa";



export default function AdminNav(){

    return(
        <div className="bg-light container shadow-lg" style={{
            height:"10vh",
            width:"100%"
        }}>
            <div style={{height:"100%",cursor:"pointer"}} className="text-end d-flex align-items-center justify-content-end">
                <FaUserCircle style={{fontSize:25}}/>
            </div>
        </div>
    )
}