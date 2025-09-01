import { BrowserRouter, Route, Routes } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import Home from "../components/Home.jsx";
import Login from "../components/Login.jsx";
import { ToastContainer } from "react-toastify";
import Logout from "../components/Logout.jsx";
import ListCategory from "../components/category/ListCategory.jsx";
import AddCategory from "../components/category/AddCategory.jsx";
import EditCategory from "../components/category/EditCategory.jsx";
import NoPage from "../components/NoPage.jsx";
import ListSupplier from "../components/supplier/ListSupplier.jsx";
import AddSupplier from "../components/supplier/AddSupplier.jsx";
import EditSupplier from "../components/supplier/EditSupplier.jsx";
import ListProduct from "../components/product/ListProduct.jsx";
import AddProduct from "../components/product/AddProduct.jsx";
import EditProduct from "../components/product/EditProduct.jsx";
import ListSales from "../components/sales/ListSales.jsx";
import OrderSend from "../components/sales/OrderSend.jsx";

const RouteNavigation = () => {
    const refreshToken = secureLocalStorage.getItem("refreshToken");
    const buildNav = () => {
        if (refreshToken){
            return(
                <>
                <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/category" element={<ListCategory />} />
                    <Route path="/category/add" element={<AddCategory />} />
                    <Route path="/category/:id" element={<EditCategory />} />
                    <Route path="/supplier" element={<ListSupplier />} />
                    <Route path="/supplier/add" element={<AddSupplier />} />
                    <Route path="/supplier/:id" element={<EditSupplier />} />
                    <Route path="/product" element={<ListProduct />} />
                    <Route path="/product/add" element={<AddProduct />} />
                    <Route path="/product/:id" element={<EditProduct />} />
                    <Route path="/sales" element={<ListSales />} />
                    <Route path="/orders/:id" element={<OrderSend />} />
                    <Route path="*" element={<NoPage />} />   
                </Routes>
                </BrowserRouter>
                </>
            );
        } else{
            return (
                <BrowserRouter>
                <Routes>
                    <Route path="*" element={<Login />} />
                </Routes>
                </BrowserRouter>
            );
        }
    };
    return (
       <>
       {buildNav()}
       <ToastContainer />
       </>
    );
};

export default RouteNavigation;