import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Opac from "./components/Opac";
import RightSideBar from "./components/RightSideBar";
import LeftSideBar from "./components/LeftSideBar";
import MainContent from "./components/MainContent";

function Layout() {
    return (
        <>
            <Header />
            <Opac />

            <div className="container pt-5">
                <div className="row">
                    <LeftSideBar />

                    <MainContent>
                        <Outlet />
                    </MainContent>

                    <RightSideBar />
                </div>
            </div>
        </>
    );
}

export default Layout;
