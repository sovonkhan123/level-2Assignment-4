import { Outlet } from "react-router-dom";
import Footer from "../components/Home/Footer";
import Header from "../components/Home/Header";

const MainPage = () => {
    return (
        <div>
            <Header/>
           <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainPage;