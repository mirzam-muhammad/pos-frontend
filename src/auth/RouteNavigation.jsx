import { BrowserRouter, Route, Routes } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import Home from "../components/Home.jsx";
import Login from "../components/Login.jsx";
import { ToastContainer } from "react-toastify";
import Logout from "../components/Logout.jsx";
import ListCategory from "../components/category/ListCategory.jsx";
import AddCategory from "../components/category/AddCategory.jsx";
import EditCategory from "../components/category/EditCategory.jsx";

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