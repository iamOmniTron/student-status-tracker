import Image from "next/image";
import { BsFileSlides } from "react-icons/bs";
import { FaFileAlt, FaUsers } from "react-icons/fa";
import { FaUsersViewfinder } from "react-icons/fa6";
import {RxDashboard} from "react-icons/rx";
import NavItem from "./navitem";


const SIDEBAR_ITEMS = [
    {
        name:"Dashboard",
        path:"/admin/dashboard",
        icon:<RxDashboard style={{fontSize:25}}/>
    },
    {
        name:"Status",
        path:"/admin/dashboard/status",
        icon:<FaUsersViewfinder style={{fontSize:25}}/>
    },
    {
        name:"Students",
        path:"/admin/dashboard/student",
        icon:<FaUsers style={{fontSize:25}}/>
    },
    {
        name:"Documents",
        path:"/admin/dashboard/document",
        icon:<FaFileAlt style={{fontSize:25}}/>
    },

]



export default function Sidebar(){

    return(
        <div className="bg-success" style={{
            height:"100%",
            width:"100%",
            position:"static"
        }}>
            <div className="p-4 flex align-items-end" style={{
                height:"15vh",
                width:"100%"
            }}>
                <Image src={"/nsuk-logo.jpg"} height={50} width={50} className="rounded"/>
                <span className="fw-bold text-white ms-2 h3">Admin</span>
            </div>
            <div className="d-flex flex-column">
                {
                    SIDEBAR_ITEMS.map((item,idx)=>(
                        <NavItem item={item} key={idx}/>
                    ))
                }
            </div>
        </div>
    )
}