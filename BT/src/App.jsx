import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { ListProduct } from "./page/ListProduct";
import { Home } from "./page/Home";
import { About } from "./page/About";
import { Contact } from "./page/Contact";
import { Login } from "./page/Login";
import { Register } from "./page/Register";
import { Cart } from "./page/Cart";
import { Detail } from "./page/Detail";
import { useEffect } from "react";
import { BackTop } from "antd";
import { BackToTop } from "./layout/backtop/backtotop";
import { PrivateRouter } from "./page/private/PrivateRouter";
import { HomeAdmin } from "./page/private/HomeAdmin";
import { ManagerProduct } from "./page/private/ManagerProduct";
import { ManagerUser } from "./page/private/ManagerUser";

function App() {
  const loacation = useLocation();
  useEffect(() => {
    window.scrollTo({ top: "0", behavior: "smooth" });
  }, [location.pathname]);
  return (
    <>
      <Routes>
        {/*All*/}
        <Route path="/lisproduct" element={<ListProduct />} />
        <Route path="/lisproduct/:idProduct" element={<Detail />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        {/*Admin*/}
        <Route path="/admin" element={<PrivateRouter />}>
          <Route index element={<HomeAdmin />} />
          <Route path="manager-product" element={<ManagerProduct />} />
          <Route path="manager-user" element={<ManagerUser />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
