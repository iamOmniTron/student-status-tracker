"use client";
import { FaPlus } from "react-icons/fa";
import { useRouter } from "next/navigation";



export default function NewDocumentButton(){

    const router = useRouter();

    return(
        <button className="btn btn-success" onClick={()=>router.push("/admin/dashboard/document/new")}>
            <FaPlus/>
            Add New
        </button>
    )
}