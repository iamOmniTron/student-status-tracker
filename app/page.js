import Image from "next/image";
import {FaUserLock,} from "react-icons/fa6"
import {BsMortarboardFill} from "react-icons/bs"





export default function Homepage(){

  return(
    <div>
      {/* NAVBAR */}
      <div className="nav navbar bg-light sticky top-0" style={{
        height:"10vh"
      }}>
        <div className="container">
          <div className="navbrand">
            <Image src={"/nsuk-logo.jpg"} height={50} width={50} className="rounded"/>
          </div>
          <div className="ml-auto">
            <button className="btn btn-success">
              Login
            </button>
          </div>
        </div>
      </div>
      {/* HERO SECTION */}
      <div className="position-relative d-flex justify-content-center align-items-center flex-column" style={{
        height:"50vh",
      }}>
        <div className="position-absolute" style={{
          height:"50vh",
          width:"100%",
          zIndex:-10,
          opacity:"50%"
        }}>
          <Image src={"/students.jpg"} height={300} width={300} style={{
            height:"100%",
            width:"100%"
          }}/>
        </div>
        <h1 className="text-success fw-bold">
          Students Status Tracker
        </h1>
        <button className="btn my-3 btn-success rounded-0 btn-lg">
          Go To App
        </button>
      </div>
      <div className="bg-secondary">
        <div className="container p-5 d-flex justify-content-evenly">
          <div className="card container shadow-lg" style={{
            height:"250px",
            width:"250px"
          }}>
            <span className="fw-bold text-center p-2">
              <FaUserLock style={{fontSize:20}}/>
              Admin
              </span>
            <div className="bg-secondary w-100" style={{height:"5px"}}/>
            <p className="lead my-5 text-center">
              Manage Administrative access to students
            </p>
            <button className="btn btn-success btn-sm">
              Login
            </button>
          </div>
          <div className="card container shadow-lg" style={{
            height:"250px",
            width:"250px"
          }}>
                <span className="fw-bold text-center p-2">
              <BsMortarboardFill style={{fontSize:20}}/>
              Student
              </span>
            <div className="bg-secondary w-100" style={{height:"5px"}}/>
            <p className="lead my-5 text-center">
              Login and Track Success
            </p>
            <button className="btn btn-success btn-sm">
              Login
            </button>
          </div>
        </div>
      </div>
      <div className="bg-secondary border border-top-1 border-light justify-content-center d-flex align-items-center" style={{
        height:"10vh",
      }}>
          <p className="text-white lead  text-center">Copyright - {new Date().getFullYear()}</p>
      </div>
    </div>
  )
}