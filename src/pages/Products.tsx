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
const img1 =
  "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685966374/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256711_umnwok.png";

  const img2 =
    "https://assets.ajio.com/medias/sys_master/root/20221025/ex6J/6357f5c5f997ddfdbd3e830e/-1117Wx1400H-469258173-black-MODEL.jpg";
const arr: DataType[] = [
  {
    photo: <img src={img1} alt="Shoes" />,
    name: "Nike Shoes 2024",
    price: 2300,
    stock: 5,
    action: <Link to="">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="Shoes" />,
    name: "Nike Shoes 2024",
    price: 23000,
    stock: 51,
    action: <Link to="">Manage</Link>,
  },
  
    {
    photo: <img src={img2} alt="Shoes" />,
    name: "Nike Shoes 2024",
    price: 23000,
    stock: 51,
    action: <Link to="">Manage</Link>,
  },{
    photo: <img src={img1} alt="Shoes" />,
    name: "Nike Shoes 2024",
    price: 23000,
    stock: 51,
    action: <Link to="">Manage</Link>,
  },{
    photo: <img src={img2} alt="Shoes" />,
    name: "Nike Shoes 2024",
    price: 23000,
    stock: 51,
    action: <Link to="">Manage</Link>,
  },{
    photo: <img src={img1} alt="Shoes" />,
    name: "Nike Shoes 2024",
    price: 23000,
    stock: 51,
    action: <Link to="">Manage</Link>,
  },{
    photo: <img src={img2} alt="Shoes" />,
    name: "Nike Shoes 2024",
    price: 23000,
    stock: 51,
    action: <Link to="">Manage</Link>,
  },{
    photo: <img src={img2} alt="Shoes" />,
    name: "Nike Shoes 2024",
    price: 23000,
    stock: 51,
    action: <Link to="">Manage</Link>,
  },{
    photo: <img src={img2} alt="Shoes" />,
    name: "Nike Shoes 2024",
    price: 23000,
    stock: 51,
    action: <Link to="">Manage</Link>,
  },{
    photo: <img src={img1} alt="Shoes" />,
    name: "Nike Shoes 2024",
    price: 23000,
    stock: 51,
    action: <Link to="">Manage</Link>,
  },{
    photo: <img src={img2} alt="Shoes" />,
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
