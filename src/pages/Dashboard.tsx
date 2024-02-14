import AdminSidebar from "../components/AdminSidebar";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import userImg from '../assets/userpic.png';
import { HiTrendingDown,HiTrendingUp } from "react-icons/hi";
import data from '../assets/data.json'
import { Value } from "sass";
import { BarChart, DoughnutChart } from "../components/Charts";
import { BiMaleFemale } from "react-icons/bi";
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

              <WidgetItem percent={-14} amount={true} value={400} heading="Users" color="rgb(0,198,202)"  />

              <WidgetItem percent={80} amount={true} value={20000} heading="Transaction" color="rgb(255,196,0)"  />
              
          </section>
          <section className="graph-container">
            <div className="revenue-chart">
              <h2>Revenue and Transaction</h2>
              <BarChart
              data_2={[300, 144, 433, 655, 237, 755, 190]}
              data_1={[200, 444, 343, 556, 778, 455, 990]}
              title_1="Revenue"
              title_2="Transaction"
              bgColor_1="rgb(0,115,255)"
              bgColor_2="rgba(53,162,235,0.8)"
            />
            </div>
            <div className="dashboard-categories">
              <h2>Inventory</h2>
              <div>
                  {data.categories.map((item)=>{
                    return(
                      <>
                      <CategoryItem 
                       key={item.heading}
                       heading={item.heading}
                       value={item.value}
                       color={`hsl(${item.value * 20},${item.value}%,50%)`}
                      />
                       </>
                    )
                  })}    
              </div>
            </div>
          </section>
          <section className="transaction-container">
               <div className="gender-chart">
                <h2>Gender Ratio</h2>
                   <DoughnutChart labels={["Female","Male"]}
                   data={[12,19]}
                   backgroundColor={["hsl(340,82%,56%)", "rgba(53,162,235,0.8)"]}
                   cutout={90}
                   />
                <p>
                  <BiMaleFemale/>
                </p>
               </div>
               <Table data={data.transaction}/>
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
   <div className="widget-circle" style={{
    background:`conic-gradient(
      ${color} ${(Math.abs(percent) / 100) * 360}deg,
      rgb(255,255,255) 0
    )`
   }}>
    <span style={{color}}>{percent}% </span>
   </div>
    </article>
  )
};

interface CatgeoryItemProps{
  color:string,
  value:number,
  heading:string
}


const  CategoryItem = ({color,value,heading}:CatgeoryItemProps)=>(
  <div className="category-item">
    <h5>{heading}</h5>
    <div style={{
      backgroundColor:color,
      width:`${value}%`
    }}>

    </div>
    <span>{value}%</span>
  </div>
)
