import AdminSidebar from "../components/AdminSidebar"
import { ReactElement,useCallback,useState } from "react"
import TableHOC from "../components/TableHOC"
import { Column} from "react-table"
import { Link } from "react-router-dom"
import { FaPlus } from "react-icons/fa"

interface DataType{
  photo:ReactElement,
  name:string,
  price:number,
  stock:number,
  action:ReactElement
}

function Products() {
  return (
    <div className="adminContainer">
    <AdminSidebar/>
    <main>dd</main>
    </div>
  )
}

export default Products