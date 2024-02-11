import AdminSidebar from "../components/AdminSidebar";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import userImg from '../assets/userpic.png';
import { HiTrendingDown,HiTrendingUp } from "react-icons/hi";
export default function Dashboard() {
  return (
    <div className="adminContainer">
        <AdminSidebar/>
        <main className="dashboard">
          <div className="bar">
          <BsSearch/>
          <input type="text" placeholder="search for data , users, docs"/>
           <FaRegBell/>
           <img src={userImg} alt="User" />
          </div>

          <section className="widgetcontainer">
              <WidgetItem percent={40} amount={true} value={3400000} heading="Revenue" color="rgb(0,115,255)"  />

              <WidgetItem percent={40} amount={true} value={3400000} heading="Revenue" color="rgb(0,115,255)"  />

              <WidgetItem percent={40} amount={true} value={3400000} heading="Revenue" color="rgb(0,115,255)"  />
          </section>
        </main>
        </div>
  )
}

interface WidgetItemProps{
  heading:string,
  value:number,
  percent:number,
  color:string,
  amount ?:boolean
}
const WidgetItem=({
  heading,
  value,
  percent,
  color,
  amount
}:WidgetItemProps) => {
  return(
    <article className="widget">
   <div className="widgetInfo">
    <p>{heading}</p>
    <h4>{amount ? "$"+value : value}</h4>
    { 
    percent>0 ? <span className="green"><HiTrendingUp/> +{percent}%</span>:
    percent<0 ? <span className="red"><HiTrendingDown/> {percent}%</span>:"{percent}%"
    }
   </div>
   <div className="widgetCircle">
    <span  color={color}>{percent}%</span>
   </div>
   <div className="widget-circle" style={{
    
   }}>
    <span color={color}>{percent}% </span>
   </div>
    </article>
  )
}
