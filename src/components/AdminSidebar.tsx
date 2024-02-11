import React from "react";
import { IconType  } from "react-icons";
import { RiDashboardFill ,RiShoppingBag3Fill,RiCoupon3Fill} from "react-icons/ri";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { Link, useLocation , Location} from "react-router-dom";
import { FaChartBar, FaChartLine,FaChartPie,FaStopwatch,FaGamepad } from "react-icons/fa";
function AdminSidebar() {

const location=useLocation();

  return (
    <aside>
      <h2>Logo.</h2>
     <Dashboard location={location}/>
     <Chart location={location}/>
     <Apps location={location}/>
    </aside>
  );
}
const Dashboard=({location}:{location:Location})=>{
   return (<div>
  <h5>DashBoard</h5>
  <ul>
      <Li url="/admin/dashboard" text="Dashboard" Icon={RiDashboardFill} location={location} />

      <Li url="/admin/product" text="Product" Icon={RiShoppingBag3Fill} location={location} />

      <Li url="/admin/customer" text="Customer" Icon={IoIosPeople} location={location} /> 
      
      <Li url="/admin/transaction" text="Transaction" Icon={AiFillFileText} location={location} />
  </ul>
</div>)
}
const Chart=({location}:{location:Location})=>{
  return ( <div>
  <h5>Charts</h5>
  <ul>
      <Li url="/admin/chart/bar" text="Bar" Icon={FaChartBar} location={location} />

      <Li url="/admin/chart/pie" text="Pie" Icon={FaChartPie} location={location} />

      <Li url="/admin/chart/Line" text="Line" Icon={FaChartLine} location={location} /> 
      
  </ul>
</div>)
}

const Apps=({location}:{location:Location}) => {
  return (
    <div>
  <h5>Apps</h5>
  <ul>
      <Li url="/admin/apps/stopwatch" text="Stopwatch" Icon={FaStopwatch} location={location} />

      <Li url="/admin/apps/coupon" text="Coupon" Icon={RiCoupon3Fill} location={location} />

      <Li url="/admin/apps/toss" text="Toss" Icon={FaGamepad} location={location} /> 
      
  </ul>
</div>
  )
}

interface LiProps {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
}

const Li = ({ url, text, location, Icon }: LiProps) => (
  <li
  style={{
    backgroundColor: location.pathname.includes(url)
      ? "rgba(0,115,255,0.1)"
      : "white",
  }}
>
  <Link
    to={url}
    style={{
      color: location.pathname.includes(url) ? "rgb(0,115,255)" : "black",
    }}
  >
    <Icon />
    {text}
  </Link>
</li>

);

export default AdminSidebar;
