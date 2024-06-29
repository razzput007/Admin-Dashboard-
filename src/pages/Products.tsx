import AdminSidebar from "../components/AdminSidebar";
import { ReactElement, useCallback, useState } from "react";
import TableHOC from "../components/TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

interface DataType {
  photo: ReactElement;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}
const columns: Column<DataType>[] = [
  {
    Header: "Photo",
    accessor: "photo",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Stock",
    accessor: "stock",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];
const arr: DataType[] = [
  {
    photo: <img src="img1" alt="Shoes" />,
    name: "Nike Shoes 2024",
    price: 2300,
    stock: 5,
    action: <Link to="">Manage</Link>,
  },
  {
    photo: <img src="img2" alt="Shoes" />,
    name: "Nike Shoes 2024",
    price: 23000,
    stock: 51,
    action: <Link to="">Manage</Link>,
  },
  
    {
    photo: <img src="img2" alt="Shoes" />,
    name: "Nike Shoes 2024",
    price: 23000,
    stock: 51,
    action: <Link to="">Manage</Link>,
  },{
    photo: <img src="img2" alt="Shoes" />,
    name: "Nike Shoes 2024",
    price: 23000,
    stock: 51,
    action: <Link to="">Manage</Link>,
  },{
    photo: <img src="img2" alt="Shoes" />,
    name: "Nike Shoes 2024",
    price: 23000,
    stock: 51,
    action: <Link to="">Manage</Link>,
  },{
    photo: <img src="img2" alt="Shoes" />,
    name: "Nike Shoes 2024",
    price: 23000,
    stock: 51,
    action: <Link to="">Manage</Link>,
  },{
    photo: <img src="img2" alt="Shoes" />,
    name: "Nike Shoes 2024",
    price: 23000,
    stock: 51,
    action: <Link to="">Manage</Link>,
  },{
    photo: <img src="img2" alt="Shoes" />,
    name: "Nike Shoes 2024",
    price: 23000,
    stock: 51,
    action: <Link to="">Manage</Link>,
  },{
    photo: <img src="img2" alt="Shoes" />,
    name: "Nike Shoes 2024",
    price: 23000,
    stock: 51,
    action: <Link to="">Manage</Link>,
  },{
    photo: <img src="img2" alt="Shoes" />,
    name: "Nike Shoes 2024",
    price: 23000,
    stock: 51,
    action: <Link to="">Manage</Link>,
  },{
    photo: <img src="img2" alt="Shoes" />,
    name: "Nike Shoes 2024",
    price: 23000,
    stock: 51,
    action: <Link to="">Manage</Link>,
  }
  
];
function Products() {
  const [data] = useState<DataType[]>(arr);
  const Table = useCallback(
    TableHOC<DataType>(columns, data, "dashboard-product-box", "Products"),
    []
  );
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main>{Table()}</main>
      <Link to="/admin/product/new" className="create-product-btn">
        <FaPlus />
      </Link>
    </div>
  );
}

export default Products;
