import Link from "next/link";



export default function NavItem({item}){
    

    return(
        <Link href={item.path} className="px-3 my-4 fw-bold text-white nav-link d-flex gap-3" style={{
            width:"100%"
        }}>
            <span>{item.icon}</span>
            <span>{item.name}</span>
        </Link>
    )
}