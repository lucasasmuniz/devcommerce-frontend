import { Outlet } from "react-router-dom";
import HeaderAdmin from "../../components/HeaderAdmin";

export default function AdminHome(){
    return(
        <>
            <HeaderAdmin />
            <Outlet />
        </>
    );
}